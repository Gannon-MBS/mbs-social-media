/* Story layouts: each post gets its own composition + motion. Used when p.layout starts with "s-".
   Final state is the default (stills render correctly); motion only plays under .card.anim. */
const CUR = `<svg class="cur" viewBox="0 0 40 40"><path d="M6 3 L6 33 L14 25 L20 38 L25 36 L19 23 L30 23 Z" fill="#fff" stroke="#002A3A" stroke-width="2.5" stroke-linejoin="round"/></svg>`;
function sFoot(dark, d){return `<div class="sfoot ${dark?'dk':''} a"${D(d||4.6)}><img src="${dark?LOGO_W:LOGO_N}"><span>(316) 516-8826 · mbsks.com</span></div>`}
function storyHTML(p){
  const m=p.s||{};
  switch(p.layout){
  case 's-login': return `<div class="card s-login">
    <div class="win zoom"${D(.2)}><div class="bar"><i></i><i></i><i></i><span>Admin sign-in</span></div>
      <div class="fld a"${D(.7)}><small>Account</small>admin@yourbusiness.com</div>
      <div class="fld a"${D(.9)}><small>Password</small><span class="dots type"${D(1.1)}>••••••••••••</span></div>
      <div class="q a"${D(1.9)}>Who has this login?</div>
      ${['You, the owner','The last IT guy','Not sure'].map((t,i)=>`<div class="opt a ${i?'':'ok'}"${D(2.1+i*.2)}><b class="bx"><i class="tick"${D(3.55)}>✓</i></b>${t}</div>`).join('')}
      ${CUR}<div class="ripple"${D(3.5)}></div></div>
    <div class="H a"${D(4.1)}>${hl(p.headline,p.accent)}</div>
    <div class="sub a"${D(4.4)}>${esc(p.sub)}</div>${sFoot(true,4.7)}</div>`;
  case 's-compare': return `<div class="card s-compare"><div class="half l"></div><div class="half r slidein"${D(.1)}></div><div class="divider grow"${D(.4)}></div>
    <div class="H a"${D(.5)}>${hl(p.headline,p.accent)}</div>
    <div class="tag lt drop"${D(1.1)}>Provider A<small>$ same monthly price</small></div><div class="tag rt drop"${D(1.3)}>MBS<small>$ same monthly price</small></div>
    ${(m.rows||[]).map((r,i)=>`<div class="row" style="top:${430+i*112}px"><div class="cl fromL"${D(1.9+i*.45)}><b>✕</b><div>${esc(r[1])}<small>${esc(r[0])}</small></div></div><div class="cr fromR"${D(2.1+i*.45)}><b>✓</b><div>${esc(r[2])}<small>${esc(r[0])}</small></div></div></div>`).join('')}
    <div class="note a"${D(4.3)}>${esc(p.sub)}</div>${sFoot(true,4.6)}</div>`;
  case 's-mfa': return `<div class="card s-mfa"><div class="H a"${D(.2)}>${hl(p.headline,p.accent)}</div>
    <div class="stat stamp"${D(4.1)}><b>${esc(p.stat_number)}</b>${esc(p.stat_label)}<small>${esc(p.stat_source||'')}</small></div>
    <div class="ph rise"${D(.5)}><div class="isl"></div><div class="clock a"${D(1.0)}>9:41<small>Tuesday, November 19</small></div>
      <div class="note dropin"${D(1.6)}><div class="ap">🔒</div><div><b>Sign-in request</b><small>you@yourbusiness.com · new device</small></div></div>
      <div class="sheet up"${D(2.3)}><div class="t">Enter this number on screen</div><div class="num">47</div><div class="btns"><span>Deny</span><span class="go">Approve</span></div></div>
      <div class="ok pop"${D(3.4)}><b>✓</b>Signed in safely</div></div>
    <div class="side a"${D(4.4)}>${esc(p.sub)}</div>${sFoot(false,4.7)}</div>`;
  case 's-offboard': return `<div class="card s-offboard"><div class="eb a"${D(.2)}>${esc(p.eyebrow)}</div><div class="H a"${D(.4)}>${hl(p.headline,p.accent)}</div>
    <div class="list">${(m.rows||[]).map((r,i)=>`<div class="it a"${D(1.0+i*.15)}><div><b>${esc(r[0])}</b><small><span class="was"${D(2.0+i*.5)}>Still active</span><span class="now"${D(2.0+i*.5)}>${esc(r[1])}</span></small></div><div class="sw"${D(2.0+i*.5)}><i></i></div></div>`).join('')}</div>
    <div class="sub a"${D(4.4)}>${esc(p.sub)}</div>${sFoot(true,4.7)}</div>`;
  case 's-share': return `<div class="card s-share"><div class="glow"></div><div class="H a"${D(.2)}>${hl(p.headline,p.accent)}</div>
    <svg class="lines" viewBox="0 0 1080 1080"><path d="M540 560 L215 420"/><path d="M540 560 L865 430"/><path d="M540 560 L250 800"/><path d="M540 560 L830 800"/></svg>
    <div class="file zoom"${D(.6)}><div class="ic">▦</div><b>${esc(m.file)}</b><div class="acl pulse"${D(1.5)}>🌐 Anyone with the link</div></div>
    ${(m.asks||[]).map((t,i)=>`<div class="ask k${i} pop"${D(2.3+i*.4)}><span>AI</span>${esc(t)}</div>`).join('')}
    <div class="sub a"${D(4.3)}>${esc(p.sub)}</div>${sFoot(true,4.6)}</div>`;
  case 's-form': return `<div class="card s-form"><div class="paper a"${D(.2)}><div class="hd">Cyber Insurance Application<small>Section 4 · Security controls</small></div>
    ${(m.rows||[]).map((r,i)=>`<div class="fr"><span>${i+1}. ${esc(r[0])}</span><span class="yn"><i>Yes</i><i>No</i>${r[1]==='yes'?`<svg class="chk" viewBox="0 0 60 40"><path pathLength="100"${D(1.2+i*.45)} d="M6 22 L22 34 L54 6"/></svg>`:`<svg class="ring" viewBox="0 0 140 60"><path pathLength="100"${D(1.2+i*.45)} d="M70 6 C120 4 136 22 128 38 C118 56 30 58 12 42 C-2 28 20 6 74 8"/></svg><em class="a"${D(1.5+i*.45)}>sort of?</em>`}</span></div>`).join('')}
    <div class="sig a"${D(3.0)}>Signature ____________________</div></div>
    <div class="stampx slam"${D(3.6)}>Review before you sign</div>
    <div class="H a"${D(.5)}>${hl(p.headline,p.accent)}</div>${sFoot(false,4.6)}</div>`;
  }
  return '';
}
