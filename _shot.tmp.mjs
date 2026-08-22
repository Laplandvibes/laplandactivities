// mobile-shot.mjs — AIDOT mobiiliruutukaappaukset + mittaukset headless-Chromella (CDP).
// Miksi: chrome --headless --window-size=375 EI toimi Windowsissa (min-ikkuna ~500px →
// layout 500px, PNG rajataan 375:een = teksti "leikkautuu" artefaktina).
// Tämä skripti emuloi laitteen CDP:llä (setDeviceMetricsOverride) → oikea 375px-layout.
//
// Käyttö:  node _reiska/mobile-shot.mjs "/,/palvelut,/hinnasto" 375 812 ./shots http://localhost:8080
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import os from "node:os";
import { WebSocket } from "ws";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const routes = (process.argv[2] || "/").split(",");
const W = +(process.argv[3] || 375);
const H = +(process.argv[4] || 812);
const outDir = process.argv[5] || "./shots";
const base = process.argv[6] || "http://localhost:8080";
const PORT = 9223;

fs.mkdirSync(outDir, { recursive: true });
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "mshot-"));
const chrome = spawn(CHROME, [
  "--headless=new", "--disable-gpu", "--no-first-run", "--mute-audio",
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, "about:blank",
], { stdio: "ignore" });

const httpJson = (method, p) => new Promise((res, rej) => {
  const req = http.request({ host: "127.0.0.1", port: PORT, path: p, method }, (r) => {
    let b = ""; r.on("data", (c) => (b += c)); r.on("end", () => { try { res(JSON.parse(b)); } catch (e) { rej(e); } });
  });
  req.on("error", rej); req.end();
});
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// odota devtools ylös
let target;
for (let i = 0; i < 40; i++) {
  try { target = await httpJson("PUT", "/json/new?about:blank"); break; } catch { await sleep(250); }
}
if (!target) { chrome.kill(); throw new Error("Chrome DevTools ei käynnistynyt"); }

const ws = new WebSocket(target.webSocketDebuggerUrl, { maxPayload: 512 * 1024 * 1024 });
await new Promise((r) => ws.on("open", r));
let id = 0; const pending = new Map();
const events = [];
ws.on("message", (raw) => {
  const m = JSON.parse(raw);
  if (m.id && pending.has(m.id)) { const { res, rej } = pending.get(m.id); pending.delete(m.id); m.error ? rej(new Error(m.error.message)) : res(m.result); }
  else if (m.method) events.push(m.method);
});
const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pending.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
const waitEvent = async (name, timeout = 12000) => { const t0 = Date.now(); while (Date.now() - t0 < timeout) { const ix = events.indexOf(name); if (ix >= 0) { events.splice(ix, 1); return true; } await sleep(100); } return false; };

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width: W, height: H, deviceScaleFactor: 2, mobile: true });

const results = [];
for (const spec of routes) {
  // reitin voi antaa muodossa "/polku@1200" → scrollaa y=1200 ennen kaappausta
  const [route, scrollY] = spec.split("@");
  await send("Page.navigate", { url: base + route });
  await waitEvent("Page.loadEventFired");
  await sleep(1400); // kuvat/fontit/reveal
  if (scrollY) {
    await send("Runtime.evaluate", { expression: `window.scrollTo(0, ${+scrollY})` });
    await sleep(500);
  }
  const { result } = await send("Runtime.evaluate", { returnByValue: true, expression: `(() => {
    const header = document.querySelector("header");
    const img = document.querySelector("section picture img");
    const sec = img ? img.closest("section") : null;
    return {
      route: location.pathname, innerW: innerWidth,
      docScrollW: document.documentElement.scrollWidth,
      hScroll: document.documentElement.scrollWidth > innerWidth,
      headerOF: header ? header.scrollWidth > header.clientWidth : null,
      heroImg: img ? img.currentSrc.split("/").pop() : null,
      heroH: sec ? Math.round(sec.getBoundingClientRect().height) : null,
    };
  })()` });
  results.push(result.value);
  const shot = await send("Page.captureScreenshot", { format: "png" });
  const name = (route === "/" ? "home" : route.replace(/\//g, "_").replace(/^_/, "")) + `-${W}` + (scrollY ? `-y${scrollY}` : "");
  fs.writeFileSync(path.join(outDir, `${name}.png`), Buffer.from(shot.data, "base64"));
}
console.log(JSON.stringify(results, null, 1));
ws.close(); chrome.kill();
try { fs.rmSync(profile, { recursive: true, force: true }); } catch {}
