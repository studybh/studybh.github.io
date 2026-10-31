/* ============================================================
   واجهة التطبيق: الشاشات (الرئيسية، المسار، الدرس) + التشغيل
   ============================================================ */
function head(){st.textContent='🔥 '+streakNow();xp.textContent='⭐ '+S.xp;
 const g=Math.min(100,todayXP()/30*100);
 side.innerHTML=`<div class="sc"><div class="b2">🔥 ${streakNow()}</div><div>سلسلة الأيام</div><small>أكمل درسًا كل يوم لتحافظ عليها</small></div>
 <div class="sc"><b>⭐ المستوى ${Math.floor(S.xp/100)+1}</b><div class="goal"><i style="width:${S.xp%100}%"></i></div><small>${S.xp%100} / 100 نقطة</small></div>
 <div class="sc"><b>🎯 هدف اليوم</b><div class="goal"><i style="width:${g}%"></i></div><small>${todayXP()} / 30 نقطة</small></div>`}
function toast(t){const e=document.getElementById('toast');e.textContent=t;e.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(()=>e.style.display='none',1600)}

const SUBJ=[['ريض 151','الرياضيات','➗',1],['عرب 101','اللغة العربية','📚'],['انج 101','اللغة الإنجليزية','🔤'],['فيز 102','الفيزياء','⚛️'],['كيم 102','الكيمياء','🧪'],['حيا 102','الأحياء','🧬'],['اجا 102','','🌍'],['قصد 101','','💰'],['اسر 102','','🏠'],['بدن 101','التربية البدنية','⚽'],['تقن 107','التقنية','💻'],['دين 101','التربية الإسلامية','🕌'],['وطن 101','التربية الوطنية','🇧🇭']];
function home(){
 const g=Math.min(100,todayXP()/30*100);
 app.innerHTML=`<div class="hero"><div class="face">🐬</div><div style="flex:1"><div class="t1">جاهز للتحدي؟</div><div>أنهِ درسًا اليوم وحافظ على سلسلتك 🔥</div><div class="goal"><i style="width:${g}%"></i></div></div></div>
 <div class="lab">المواد</div><div class="grid">${SUBJ.map((s,i)=>`<button class="card ${s[3]?'on':''}" onclick="pick(${i})">${s[3]?'':'<span class="tag">قريبًا</span>'}<span class="e">${s[2]}</span><b>${s[0]}</b><small>${s[1]}</small></button>`).join('')}</div>`;
 scrollTo(0,0)}
function pick(i){if(SUBJ[i][3]){beep(600);path()}else toast('قريبًا ✨ نجهّز لك هذه المادة')}

const has=id=>{const L=LESSONS[id];return !!(L&&L.cards&&L.cards.length&&L.questions&&L.questions.length)};
const OFF=[0,-70,-100,-70,0,70,100,70];
function node(c,ic,l,fn,k){return `<button class="node ${c}" style="--o:${OFF[k%8]}" onclick="${fn}">${ic}<span class="lbl">${l}</span></button>`}
function path(){
 let h='<button class="back" onclick="home()">› رجوع</button><div class="lab" style="margin-top:0">ريض 151 – الرياضيات 1</div>',prev=true,k=0;
 UNITS.forEach((u,ui)=>{
  h+=`<div class="unit u${ui%3}"><small>ريض 151</small><b>${u.name}</b></div><div class="path">`;
  u.lessons.forEach(([id,t])=>{
   const done=S.done[id],ok=has(id)&&prev;
   h+=node(done?'done':ok?'go':'lock',done?'✓':id,t,ok?`sheet('${id}')`:`toast('${has(id)?'أكمل الدرس السابق أولًا':'قريبًا ✨'}')`,k++);
   prev=!!done});
  const tid='T'+ui,hasT=u.test&&u.test.length,tok=prev&&hasT;
  h+=node((S.done[tid]?'done':tok?'go':'lock')+' test',S.done[tid]?'✓':'🏆','تقييم '+u.name,tok?`testStart(${ui})`:"toast('قريبًا ✨')",k++);
  if(hasT)prev=!!S.done[tid];
  h+='</div>'});
 app.innerHTML=h;scrollTo(0,0)}

function ov(id,cls,h){let l=document.getElementById(id);if(!l){l=document.createElement('div');l.id=id;document.body.appendChild(l)}l.className='ov '+cls;l.innerHTML=h}
function rm(id){const l=document.getElementById(id);if(l)l.remove()}
function close_(){rm('L');rm('SH');path()}
const title=id=>{for(const u of UNITS)for(const l of u.lessons)if(l[0]===id)return l[1]};

function sheet(id){const L=LESSONS[id];beep(500);
 ov('SH','dim',`<div class="sheet"><div class="lab" style="margin:0">الدرس ${id}</div><div class="ttl">${title(id)}</div>
 <div class="lab" style="margin:10px 0 4px">🎯 الأهداف</div>${L.goals.map(g=>box(g)).join('')}
 <button class="btn gold" style="margin-top:14px" onclick="explain('${id}')">ابدأ الدرس 🚀</button>
 <button class="back" style="margin:12px auto 0;display:block" onclick="rm('SH')">إغلاق</button></div>`)}

let R;
function explain(id){rm('SH');R={id,ci:0};card()}
function card(){const L=LESSONS[R.id],c=L.cards[R.ci],last=R.ci===L.cards.length-1;
 ov('L','',`<div class="bar"><button class="x" onclick="close_()">✕</button><div class="prog"><i id="pg" style="width:${R.ci/L.cards.length*100}%"></i></div><span class="pill">شرح 📖</span></div>
 <div class="body"><div class="ttl">${c.title}</div>${c.html}</div>
 <div class="foot"><div class="in"><button class="btn ${last?'gold':''}" onclick="${last?'startQuiz(LESSONS[R.id].questions,lessonDone)':'R.ci++;beep(500);card()'}">${last?'ابدأ الأسئلة ⚡':'التالي'}</button></div></div>`);
 setTimeout(()=>{const i=document.getElementById('pg');if(i)i.style.width=((R.ci+1)/L.cards.length*100)+'%'},30)}
function lessonDone(ok){const f=!S.done[R.id];S.done[R.id]=1;const x=ok*5+(f?10:0);gain(x);return x}
function testStart(ui){R={id:'T'+ui};startQuiz(UNITS[ui].test,ok=>{const f=!S.done[R.id];S.done[R.id]=1;const x=ok*8+(f?20:0);gain(x);return x})}

head();home();
