/* Signature intros built on the MBS horizontal and center logos.
   biHTML(v) -> intro + outro markup. v: 'signal' | 'circuit' | 'doors' | 'stream' (legacy: 'a' | 'b' | 'c') */
const HL=n=>`<div class="hl"><img class="hl-mark" src="assets/${n}_mark.png"><img class="hl-word" src="assets/${n}_word.png"></div>`;
const CL=n=>`<img class="cl-mark" src="assets/${n}_mark.png"><div class="cl-w w1"><img src="assets/${n}_w1.png"></div><div class="cl-w w2"><img src="assets/${n}_w2.png"></div>`;
const OUT_H=`<div class="bi-out"><img class="oh" src="assets/h_white_teal.png"><div class="o1">Call or text <span>(316) 516-8826</span></div><div class="o2">MBSKS.COM · WICHITA, KS</div></div>`;
const OUT_C=`<div class="bi-out"><img class="oc" src="assets/c_white_teal.png"><div class="o1">Call or text <span>(316) 516-8826</span></div><div class="o2">MBSKS.COM · WICHITA, KS</div></div>`;
function biHTML(v){
  const tag=t=>`<div class="bi-bar"></div><div class="bi-tag">${t}</div>`;
  switch(v){
  case 'signal': return `<div class="bi-in v-signal"><div class="grid"></div><div class="ring"></div><div class="ring"></div><div class="ring"></div>${CL('c_white_teal')}${tag('Managed IT &amp; Cybersecurity')}</div>`+OUT_C;
  case 'doors': return `<div class="bi-in v-doors">${CL('c_navy_teal')}${tag('Managed IT &amp; Cybersecurity · Wichita, KS')}<div class="door l"></div><div class="door r"></div><div class="seam"></div></div>`+OUT_C;
  case 'stream': return `<div class="bi-in v-stream">${[6,14,22,29,37,45,52,60,67,74,81,88,94].map((x,i)=>`<i class="st" style="left:${x}%;--s:${(i*37%7)/10}s;--h:${120+(i*53%5)*40}px"></i>`).join('')}${HL('h_white_teal')}<div class="sweep"></div>${tag('Managed IT &amp; Cybersecurity')}</div>`+OUT_H;
  default: return `<div class="bi-in v-circuit"><svg viewBox="0 0 1080 1080"><path class="th" d="M0 430 H60 L100 470 H112"/><path class="th" d="M1080 510 H1020 L980 470 H968"/><path class="tl" d="M150 300 H430 L460 270 H930"/><path class="tl" d="M150 640 H620 L650 670 H930"/><circle cx="118" cy="470" r="11"/><circle cx="962" cy="470" r="11"/><circle cx="936" cy="270" r="8"/><circle cx="144" cy="640" r="8"/></svg>${HL('h_white_teal')}${tag('Managed IT &amp; Cybersecurity')}</div>`+OUT_H;
  }
}
function videoHTMLv(p,v){return cardHTML(p).replace(/<\/div>\s*$/,biHTML(v)+'</div>')}
