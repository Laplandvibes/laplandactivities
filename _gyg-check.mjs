import { spawn } from "node:child_process";
import http from "node:http"; import os from "node:os"; import fs from "node:fs"; import path from "node:path";
import { WebSocket } from "ws";
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9226;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "gyg-"));
const chrome = spawn(CHROME, ["--headless=new","--disable-gpu","--no-first-run","--mute-audio",`--remote-debugging-port=${PORT}`,`--user-data-dir=${profile}`,"about:blank"],{stdio:"ignore"});
const httpJson=(m,p)=>new Promise((res,rej)=>{const r=http.request({host:"127.0.0.1",port:PORT,path:p,method:m},x=>{let b="";x.on("data",c=>b+=c);x.on("end",()=>{try{res(JSON.parse(b))}catch(e){rej(e)}})});r.on("error",rej);r.end()});
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let t; for(let i=0;i<40;i++){try{t=await httpJson("PUT","/json/new?about:blank");break}catch{await sleep(250)}}
const ws=new WebSocket(t.webSocketDebuggerUrl,{maxPayload:512*1024*1024});
await new Promise(r=>ws.on("open",r));
let id=0;const pend=new Map();
ws.on("message",raw=>{const m=JSON.parse(raw);if(m.id&&pend.has(m.id)){pend.get(m.id)(m.result);pend.delete(m.id)}});
const send=(method,params={})=>new Promise(res=>{const i=++id;pend.set(i,res);ws.send(JSON.stringify({id:i,method,params}))});
await send("Page.enable");
await send("Page.navigate",{url:"https://laplandactivities.fi/fi"});
for (const wait of [3000, 3000, 4000, 5000]) {
  await sleep(wait);
  const r = await send("Runtime.evaluate",{returnByValue:true,expression:`(()=>{
    const box=document.querySelector('[data-gyg-widget]');
    return { boxExists: !!box, boxHidden: box ? box.classList.contains('hidden') : null,
      iframes: box ? box.querySelectorAll('iframe').length : 0,
      anyGygIframe: document.querySelectorAll('iframe[src*="getyourguide"]').length,
      fallbackShown: !!document.querySelector('[data-gyg-widget] ~ div'),
      sdkLoaded: !!window.gyg || Array.from(document.scripts).some(s=>s.src.includes('getyourguide')) };
  })()`});
  console.log(JSON.stringify(r.result.value));
}
ws.close(); chrome.kill();
try{fs.rmSync(profile,{recursive:true,force:true})}catch{}
