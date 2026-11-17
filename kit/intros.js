/* Signature intros built on the MBS horizontal and center logos.
   biHTML(v, theme): v = 'signal' | 'circuit' | 'doors' | 'stream'; theme = 'color' (teal cloud) | 'white' (white cloud) | 'mono' (black & white) */
const HL=n=>`<div class="hl"><img class="hl-mark" src="assets/${n}_mark.png"><img class="hl-word" src="assets/${n}_word.png"></div>`;
const CL=n=>`<img class="cl-mark" src="assets/${n}_mark.png"><div class="cl-w w1"><img src="assets/${n}_w1.png"></div><div class="cl-w w2"><img src="assets/${n}_w2.png"></div>`;
const LOGOS={color:{c:'c_white_teal',h:'h_white_teal',doors:'c_navy_teal'},white:{c:'c_white',h:'h_white',doors:'c_white'},mono:{c:'c_white',h:'h_white',doors:'c_black'}};
function biHTML(v,theme){
  theme=(LOGOS[theme]&&theme!=='color')?theme:'white';const L=LOGOS[theme],T=' t-'+theme;
  const tag=t=>`<div class="bi-bar"></div><div class="bi-tag">${t}</div>`;
  const center=v==='signal'||v==='doors';
  const out=`<div class="bi-out${T}"><img class="${center?'oc':'oh'}" src="assets/${center?L.c:L.h}.png"><div class="o1">Call or text <span>(316) 516-8826</span></div><div class="o2">MBSKS.COM · WICHITA, KS</div></div>`;
  switch(v){
  case 'signal': return `<div class="bi-in v-signal${T}"><div class="grid"></div><div class="ring"></div><div class="ring"></div><div class="ring"></div>${CL(L.c)}${tag('Managed IT &amp; Cybersecurity')}</div>`+out;
  case 'doors': return `<div class="bi-in v-doors${T}">${CL(L.doors)}${tag('Managed IT &amp; Cybersecurity · Wichita, KS')}<div class="door l"></div><div class="door r"></div><div class="seam"></div></div>`+out;
  case 'stream': return `<div class="bi-in v-stream${T}">${[6,14,22,29,37,45,52,60,67,74,81,88,94].map((x,i)=>`<i class="st" style="left:${x}%;--s:${(i*37%7)/10}s;--h:${120+(i*53%5)*40}px"></i>`).join('')}${HL(L.h)}<div class="sweep"></div>${tag('Managed IT &amp; Cybersecurity')}</div>`+out;
  default: return `<div class="bi-in v-circuit${T}"><svg viewBox="0 0 1080 1080"><path class="th" d="M0 430 H60 L100 470 H112"/><path class="th" d="M1080 510 H1020 L980 470 H968"/><path class="tl" d="M150 300 H430 L460 270 H930"/><path class="tl" d="M150 720 H620 L650 750 H930"/><circle cx="118" cy="470" r="11"/><circle cx="962" cy="470" r="11"/><circle cx="936" cy="270" r="8"/><circle cx="144" cy="720" r="8"/></svg>${HL(L.h)}${tag('Managed IT &amp; Cybersecurity')}</div>`+out;
  }
}
function videoHTMLv(p,v,theme){return cardHTML(p).replace(/<\/div>\s*$/,biHTML(v,theme)+'</div>')}
