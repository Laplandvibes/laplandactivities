// Convert PNGs in public/images/{heroes,hotels,categories,og,activities/*}/
// to WebP at appropriate sizes. Original PNGs are kept until manual cleanup.

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('public/images');

// Top-level optimization rules
const targets = [
  { folder: 'heroes',     longest: 1920, quality: 78 },
  { folder: 'hotels',     longest: 1400, quality: 78 },
  { folder: 'categories', longest: 1400, quality: 78 },
  { folder: 'og',         width: 1200, height: 630, fit: 'cover', quality: 82 },
];

// activities/* subfolders all use card sizing
const ACTIVITY_RULE = { longest: 1200, quality: 78 };

async function optimize(srcDir, rule) {
  let entries = [];
  try { entries = await fs.readdir(srcDir); } catch { return { in: 0, out: 0, files: 0 }; }
  let stats = { in: 0, out: 0, files: 0 };
  for (const file of entries) {
    if (!/\.png$/i.test(file)) continue;
    const src = path.join(srcDir, file);
    const dst = src.replace(/\.png$/i, '.webp');
    const stat = await fs.stat(src);
    stats.in += stat.size;

    const pipeline = sharp(src);
    if (rule.width && rule.height) {
      pipeline.resize(rule.width, rule.height, { fit: rule.fit || 'cover' });
    } else if (rule.longest) {
      const meta = await sharp(src).metadata();
      const longerSide = Math.max(meta.width || 0, meta.height || 0);
      if (longerSide > rule.longest) {
        pipeline.resize({ width: rule.longest, height: rule.longest, fit: 'inside' });
      }
    }
    await pipeline.webp({ quality: rule.quality, effort: 5 }).toFile(dst);

    const outStat = await fs.stat(dst);
    stats.out += outStat.size;
    stats.files++;
    const inKb = (stat.size / 1024).toFixed(0);
    const outKb = (outStat.size / 1024).toFixed(0);
    const pct = ((1 - outStat.size / stat.size) * 100).toFixed(0);
    const rel = path.relative(ROOT, dst).replace(/\\/g, '/');
    console.log(`${rel}: ${inKb} kB → ${outKb} kB (-${pct}%)`);
  }
  return stats;
}

let total = { in: 0, out: 0, files: 0 };

// Top-level folders
for (const t of targets) {
  const dir = path.join(ROOT, t.folder);
  const s = await optimize(dir, t);
  total.in += s.in; total.out += s.out; total.files += s.files;
}

// activities/* subfolders (one level deep)
const actRoot = path.join(ROOT, 'activities');
let subdirs = [];
try { subdirs = await fs.readdir(actRoot); } catch {}
for (const sub of subdirs) {
  const dir = path.join(actRoot, sub);
  const stat = await fs.stat(dir).catch(() => null);
  if (!stat || !stat.isDirectory()) continue;
  const s = await optimize(dir, ACTIVITY_RULE);
  total.in += s.in; total.out += s.out; total.files += s.files;
}

console.log('\n────────');
console.log(`${total.files} files: ${(total.in / 1024 / 1024).toFixed(1)} MB → ${(total.out / 1024 / 1024).toFixed(1)} MB`);
