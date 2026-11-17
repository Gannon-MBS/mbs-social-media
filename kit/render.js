// Usage: node render.js <post.json> <outBase> [--video]
// Writes <outBase>.png (final frame) and, with --video, <outBase>.mp4 (10.6 s with logo intro/outro, 30 fps, H.264).
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path'), os = require('os');
(async () => {
  const [postFile, outBase] = process.argv.slice(2);
  const video = process.argv.includes('--video');
  const post = JSON.parse(fs.readFileSync(postFile, 'utf8'));
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: 1080, height: 1080 } });
  await pg.goto('file://' + path.join(__dirname, 'card.html'));
  await pg.evaluate(([p, a]) => window.renderCard(p, a), [post, video]);
  await pg.waitForTimeout(300);
  if (!video) { await pg.screenshot({ path: outBase + '.png' }); await b.close(); return; }
  await pg.evaluate(() => document.getAnimations().forEach(a => a.pause()));
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'frames-')), fps = 30, n = Math.round(10.6 * fps);
  for (let i = 0; i < n; i++) {
    await pg.evaluate(t => document.getAnimations().forEach(a => { a.currentTime = t; }), i * 1000 / fps);
    await pg.screenshot({ path: `${dir}/f${String(i).padStart(4, '0')}.png` });
  }
  fs.copyFileSync(`${dir}/f${String(Math.round(8.6 * fps)).padStart(4, '0')}.png`, outBase + '.png');
  await b.close();
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(fps), '-i', `${dir}/f%04d.png`,
    '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '20', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', outBase + '.mp4']);
  fs.rmSync(dir, { recursive: true, force: true });
})();
