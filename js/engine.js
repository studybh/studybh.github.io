/* ============================================================
   1) أدوات مساعدة للكتابة (لا تعدّل)
   M('x ≥ 25')  → يكتب الرياضيات بشكل صحيح داخل النص العربي
   row('N','نص')  → سطر فيه حرف ملوّن ونص
   box('نص')      → مربع شرح
   reveal('سؤال','الحل') → سؤال يضغط عليه الطالب ليظهر الحل
   ============================================================ */
const SUBJECTS={};
const M=s=>'<span class="m">'+s+'</span>';
const row=(c,t)=>`<div class="row"><div class="chip">${c}</div><div>${t}</div></div>`;
const box=t=>`<div class="box">${t}</div>`;
const reveal=(q,a)=>`<details class="ex"><summary>${q}</summary><div>${a}</div></details>`;

/* ============================================================
   4) محرك اللعبة — لا تحتاج تعديله
   ============================================================ */
let S={streak:0,last:'',xp:0,today:0,todayDate:'',done:{}};
try{S=Object.assign(S,JSON.parse(localStorage.getItem('studybh2')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('studybh2',JSON.stringify(S))}catch(e){}};
const ds=d=>d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
const T=()=>ds(new Date()),Y=()=>{const d=new Date();d.setDate(d.getDate()-1);return ds(d)};
const streakNow=()=>(S.last===T()||S.last===Y())?S.streak:0;
const todayXP=()=>S.todayDate===T()?S.today:0;
function gain(x){const t=T();if(S.last!==t){S.streak=(S.last===Y())?S.streak+1:1;S.last=t}
 if(S.todayDate!==t){S.todayDate=t;S.today=0}S.today+=x;S.xp+=x;save();head()}

let snd=true,ac;
function mute(){snd=!snd;sn.textContent=snd?'🔊':'🔇'}
function beep(f,d=.12,t='sine'){if(!snd)return;try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();const o=ac.createOscillator(),g=ac.createGain();o.type=t;o.frequency.value=f;g.gain.value=.07;o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+d)}catch(e){}}
function boom(n=30){for(let i=0;i<n;i++){const s=document.createElement('i');s.className='cf';s.textContent=['🎉','⭐','✨','💜'][i%4];s.style.cssText='left:'+Math.random()*100+'vw;animation-delay:'+Math.random()*.5+'s;font-size:'+(14+Math.random()*18)+'px';document.body.appendChild(s);setTimeout(()=>s.remove(),2400)}}

let q;
const shuf=a=>a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1]);
function startQuiz(list,fin){q={list,fin,ord:shuf(list.map((_,i)=>i)),i:0,h:5,ok:0,combo:0};qs()}
function qs(){q.o=shuf(q.list[q.ord[q.i]].options.map((_,i)=>i));q.sel=-1;q.chk=false;qr()}
function qr(){const it=q.list[q.ord[q.i]],ok=q.sel===it.answer;
 const o=q.o.map(i=>{let c='opt';if(q.chk){if(i===it.answer)c+=' right';else if(i===q.sel)c+=' wrong'}else if(i===q.sel)c+=' sel';
  return `<button class="${c}" onclick="pickO(${i})">${it.options[i]}</button>`}).join('');
 const foot=q.chk?`<div class="foot ${ok?'good':'bad'}"><div class="in"><div class="msg">${ok?(q.combo>=3?'رائع! إجابات متتالية 🔥':'ممتاز! 🎉'):'ليست الإجابة الصحيحة 😅'}</div><div style="margin-bottom:10px;font-weight:500;color:#fff">${it.why||''}</div><button class="btn ${ok?'':'off'}" style="${ok?'background:var(--ok);color:#06201a;border-bottom-color:#1a9a77':'pointer-events:auto;background:var(--bad);color:#2a0710;border-bottom-color:#c24a5e'}" onclick="nextQ()">متابعة</button></div></div>`
  :`<div class="foot"><div class="in"><button class="btn ${q.sel<0?'off':''}" onclick="checkQ()">تحقق</button></div></div>`;
 ov('L','',`<div class="bar"><button class="x" onclick="close_()">✕</button><div class="prog"><i style="width:${q.i/q.list.length*100}%"></i></div>${q.combo>=3?`<span class="combo">🔥 ×${q.combo}</span>`:''}<b style="color:var(--bad)">❤️ ${q.h}</b></div>
 <div class="body ${q.chk&&!ok?'shake':''}"><div class="ttl">${it.q}</div>${o}</div>${foot}`)}
function pickO(i){if(q.chk)return;q.sel=i;beep(440,.06);qr()}
function checkQ(){if(q.sel<0)return;q.chk=true;const good=q.sel===q.list[q.ord[q.i]].answer;
 if(good){q.ok++;q.combo++;beep(660);setTimeout(()=>beep(880),110);if(q.combo>=3)boom(12)}else{q.h--;q.combo=0;beep(200,.25,'square')}qr()}
function nextQ(){if(q.h<=0)return end(false);q.i++;q.i>=q.list.length?end(true):qs()}
function end(win){let x=0;if(win){x=q.fin(q.ok);boom(50);beep(784,.15);setTimeout(()=>beep(1046,.25),160)}
 ov('L','',`<div class="body center"><div class="big">${win?'🏆':'💔'}</div><div class="ttl">${win?'أحسنت! أنهيت الدرس':'انتهت القلوب'}</div>
 <p>${win?'إجاباتك الصحيحة: '+q.ok+' من '+q.list.length:'لا بأس، راجع الشرح وحاول مرة أخرى.'}</p>
 ${win?`<div class="stats"><div>⭐ +${x}<br>نقاط</div><div>🔥 ${streakNow()}<br>سلسلة</div></div>`:''}</div>
 <div class="foot"><div class="in"><button class="btn gold" onclick="${win?'close_()':'startQuiz(q.list,q.fin)'}">${win?'متابعة':'حاول مرة أخرى'}</button></div></div>`)}
