/* Signature intro variants built on the horizontal logo. biHTML(v) -> intro + outro markup; v = 'a' | 'b' | 'c' */
const HL=n=>`<div class="hl"><img class="hl-mark" src="assets/${n}_mark.png"><img class="hl-word" src="assets/${n}_word.png"></div>`;
function biHTML(v){
  let intro='';
  if(v==='b') intro=`<div class="bi-in vb"><div class="term"><div class="t1"><span>&gt; connecting to mbsks.com</span><i></i></div><div class="t2">✓ secure connection</div></div><div class="scan"></div>${HL('h_white_teal')}<div class="bi-bar"></div><div class="bi-tag">Managed IT &amp; Cybersecurity · Wichita</div></div>`;
  else if(v==='c') intro=`<div class="bi-in vc"><div class="line"></div>${HL('h_navy_teal')}<div class="sweep"></div><div class="bi-tag">Managed IT &amp; Cybersecurity · Wichita, KS</div></div>`;
  else intro=`<div class="bi-in va"><svg viewBox="0 0 1080 1080"><path d="M0 470 H90"/><path d="M1080 470 H990"/><path d="M0 330 H150 L210 390 V400"/><path d="M1080 610 H930 L870 550 V540"/><circle cx="102" cy="470" r="11"/><circle cx="978" cy="470" r="11"/><circle cx="210" cy="410" r="11"/><circle cx="870" cy="530" r="11"/></svg>${HL('h_white_teal')}<div class="bi-bar"></div><div class="bi-tag">Managed IT &amp; Cybersecurity</div></div>`;
  return intro+`<div class="bi-out"><img src="assets/h_white_teal.png"><div class="o1">Call or text <span>(316) 516-8826</span></div><div class="o2">MBSKS.COM · WICHITA, KS</div></div>`;
}
function videoHTMLv(p,v){return cardHTML(p).replace(/<\/div>\s*$/,biHTML(v)+'</div>')}
