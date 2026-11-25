/* =====================================================================
   Physics@Rosmini · whole-site progress
   Used by every lab, by progress.html (My progress) and by teacher.html.
   - Every lab keeps recording progress exactly as before (in this browser).
   - Each lab also publishes a short summary ("site-sum-<lab>") whenever
     its data changes, so the My progress page can show every topic.
   - One progress code carries the whole site to another device or to the
     teacher. Nothing is sent anywhere: codes are copied or emailed by the
     student themselves.
   ===================================================================== */
(function(){
'use strict';
const Y12NUC=/^(ratings|rr-done|best-[a-z]+|ex-[a-z0-9-]+|exm-[a-z0-9-]+)$/;
const LABS=[
 {id:'y13waves', y:13,as:'91523',title:'Wave Systems',          path:'y13/waves.html',      keys:k=>/^nx-(scope|exam-last|exam-hist|ceo|spot|draw|best-(mixed|standing|em|doppler))$/.test(k),old:'W13.'},
 {id:'y13mech',  y:13,as:'91524',title:'Mechanical Systems',    path:'y13/mechanics.html',  keys:k=>k==='mech-scope'},
 {id:'y13modern',y:13,as:'91525',title:'Modern Physics',        path:'y13/modern.html',     keys:k=>k==='modern-scope'},
 {id:'y13elec',  y:13,as:'91526',title:'Electrical Systems',    path:'y13/electrical.html', keys:k=>/^emag-(scope|exam-last|exam-hist|ceo|spot)$/.test(k),old:'E13.'},
 {id:'y12waves', y:12,as:'91170',title:'Waves',                 path:'y12/waves.html',      pre:'y12waves-',rx:Y12NUC,old:'W12.'},
 {id:'y12mech',  y:12,as:'91171',title:'Mechanics',             path:'y12/mechanics.html',  pre:'y12mech-', rx:/^(ratings|order-2026|rr-done|ceo|spot|exam-last|exam-hist|best-[a-z]+)$/,old:'M12.'},
 {id:'y12elec',  y:12,as:'91173',title:'Electricity & Electromagnetism',path:'y12/electricity.html',pre:'y12elec-',rx:/^(ratings|rr-done|best-[a-z]+)$/,old:'E12.'},
 {id:'y12nuc',   y:12,as:'91172',title:'Atomic & Nuclear Physics',path:'y12/nuclear.html',  pre:'y12nuc-',  rx:Y12NUC,old:'N12.'},
 {id:'y12prac',  y:12,as:'91168',title:'Practical Investigation',path:'y12/practical.html', pre:'y12prac-', rx:Y12NUC,old:'P12.'}];
LABS.forEach(L=>{if(L.pre)L.keys=k=>k.startsWith(L.pre)&&L.rx.test(k.slice(L.pre.length))});
const SUM='site-sum-',ME='site-me';

/* ---------- storage ---------- */
const ls=(()=>{try{const t='__pr';localStorage.setItem(t,'1');localStorage.removeItem(t);return localStorage}catch(e){return null}})();
const get=(k,d)=>{try{const v=ls&&ls.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}};
const set=(k,v)=>{try{ls&&ls.setItem(k,JSON.stringify(v))}catch(e){}};
const allKeys=()=>{const o=[];try{for(let i=0;i<ls.length;i++)o.push(ls.key(i))}catch(e){}return o};

/* ---------- TeX to plain text, for reports ---------- */
const GREEK={Delta:'Δ',lambda:'λ',theta:'θ',omega:'ω',Omega:'Ω',phi:'φ',varphi:'φ',Phi:'Φ',mu:'μ',tau:'τ',pi:'π',alpha:'α',beta:'β',gamma:'γ',epsilon:'ε',varepsilon:'ε',rho:'ρ',sigma:'σ',Sigma:'Σ',circ:'°',infty:'∞'};
function plain(t){let s=String(t==null?'':t);
 for(let i=0;i<3;i++)s=s.replace(/\\d?frac\{([^{}]*)\}\{([^{}]*)\}/g,'($1)/($2)').replace(/\\sqrt\{([^{}]*)\}/g,'√($1)').replace(/\\(?:text|mathrm|textrm|mathbf|operatorname)\{([^{}]*)\}/g,'$1');
 return s.replace(/\\\(|\\\)|\\\[|\\\]/g,'').replace(/\\([A-Za-z]+)/g,(m,g)=>GREEK[g]!=null?GREEK[g]:g==='times'?'×':g==='cdot'?'·':(g==='le'||g==='leq')?'≤':(g==='ge'||g==='geq')?'≥':g==='pm'?'±':g==='approx'?'≈':'')
  .replace(/\^\{([^{}]*)\}/g,'^$1').replace(/_\{([^{}]*)\}/g,'$1').replace(/[{}]/g,'').replace(/_/g,'').replace(/\s+/g,' ').trim()}

/* ---------- summaries (published by each lab) ---------- */
const labById=id=>LABS.find(L=>L.id===id);
function summaryFrom(lab,s){return {id:lab.id,total:s.total|0,conf:s.conf|0,get:s.get|0,not:s.not|0,
  weak:(s.weak||[]).slice(0,3).map(plain),quiz:(s.quiz||[]).filter(q=>q&&q[1]!=null).map(q=>[plain(q[0]),q[1],q[2]]),quizN:(s.quiz||[]).length,
  exams:(s.hist||[]).slice(-3),ceo:s.ceoDone?[s.ceoDone,s.ceoSum]:null,spot:s.spot==null?null:s.spot,draw:s.draw||0,rr:s.rr||0}}
const started=m=>m&&(m.conf+m.get+m.not+m.quiz.length+m.exams.length+(m.ceo?1:0)+(m.spot!=null?1:0)+(m.draw||0)+(m.rr||0))>0;
let current=null,pubTimer=null;
function publish(){const L=window.SiteLab;if(!L)return;const lab=labById(L.id);if(!lab)return;let s;try{s=L.snapshot()}catch(e){return}
 const sum=summaryFrom(lab,s),prev=get(SUM+lab.id,null),same=a=>JSON.stringify(Object.assign({},a,{t:0}));
 if(prev&&same(prev)===same(sum))return;if(!prev&&!started(sum))return;sum.t=Date.now();set(SUM+lab.id,sum)}
let watched=false;
function watch(){if(watched)return;current=window.SiteLab?labById(window.SiteLab.id):null;if(!current||!ls)return;watched=true;
 const P=Storage.prototype,oS=P.setItem,oR=P.removeItem,kick=k=>{if(current.keys(k)){clearTimeout(pubTimer);pubTimer=setTimeout(publish,500)}};
 P.setItem=function(k,v){oS.call(this,k,v);if(this===ls)kick(k)};P.removeItem=function(k){oR.call(this,k);if(this===ls)kick(k)};
 setTimeout(publish,900)}

/* ---------- the "My progress" button in every lab's header ---------- */
function addButton(){const home=document.querySelector('a[href="../index.html"]');if(!home||document.querySelector('a[data-site-progress]'))return;
 const b=home.cloneNode(false);b.href='../progress.html';b.dataset.siteProgress='1';b.title='My progress for the whole website: save it, or send it to your teacher';b.removeAttribute('id');
 b.innerHTML='<svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/></svg><span>'+(/[a-z]/.test(home.textContent)?'My progress':'MY PROGRESS')+'</span>';
 home.insertAdjacentElement('afterend',b);const pc=getComputedStyle(home.parentElement);if(pc.display.indexOf('flex')<0&&pc.display.indexOf('grid')<0)b.style.marginTop='6px'}

/* ---------- one code for the whole site ---------- */
const b64u=bytes=>{let s='';for(let i=0;i<bytes.length;i+=0x8000)s+=String.fromCharCode.apply(null,bytes.subarray(i,i+0x8000));return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')};
const unb64u=t=>{t=t.replace(/-/g,'+').replace(/_/g,'/');while(t.length%4)t+='=';const s=atob(t),b=new Uint8Array(s.length);for(let i=0;i<s.length;i++)b[i]=s.charCodeAt(i);return b};
function collect(name){const k={},s={};allKeys().forEach(key=>{if(key.startsWith(SUM)){const v=get(key,null);if(v&&labById(v.id))s[v.id]=v}else if(LABS.some(L=>L.keys(key)))k[key]=get(key,null)});
 return {v:1,n:name||'',d:(t=>t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0'))(new Date()),k,s}}
async function encode(obj){const bytes=new TextEncoder().encode(JSON.stringify(obj));
 if(window.CompressionStream){try{const buf=await new Response(new Blob([bytes]).stream().pipeThrough(new CompressionStream('deflate-raw'))).arrayBuffer();return 'PR1.'+b64u(new Uint8Array(buf))}catch(e){}}
 return 'PR0.'+b64u(bytes)}
async function decode(code){const t=String(code||'').trim().replace(/\s+/g,'');
 if(t.startsWith('PR1.')){const txt=await new Response(new Blob([unb64u(t.slice(4))]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).text();return check(JSON.parse(txt))}
 if(t.startsWith('PR0.'))return check(JSON.parse(new TextDecoder().decode(unb64u(t.slice(4)))));
 const lab=LABS.find(L=>L.old&&t.startsWith(L.old));if(lab){const o=JSON.parse(new TextDecoder().decode(unb64u(t.slice(lab.old.length))));if(!o||typeof o!=='object'||Array.isArray(o))throw new Error('bad');
  const k={};Object.keys(o).forEach(key=>{const full=lab.pre?lab.pre+key:key;if(lab.keys(full))k[full]=o[key]});return {v:1,n:'',d:'',k,s:{},old:lab.id}}
 throw new Error('Not a progress code')}
function check(o){if(!o||typeof o!=='object'||!o.k||!o.s)throw new Error('bad');return o}
const findCodes=text=>(String(text).match(/\b(?:PR[01]\.[A-Za-z0-9_-]{8,}|(?:W13|E13|W12|M12|E12|N12|P12)\.[A-Za-z0-9_-]{8,})/g)||[]);
function load(o){/* replaces the progress on this device for the topics the code covers */
 const labs=o.old?[labById(o.old)]:LABS;
 allKeys().forEach(key=>{if(labs.some(L=>L.keys(key)))try{ls.removeItem(key)}catch(e){};if(key.startsWith(SUM)&&(!o.old||key===SUM+o.old))try{ls.removeItem(key)}catch(e){}});
 Object.keys(o.k).forEach(key=>{if(LABS.some(L=>L.keys(key)))set(key,o.k[key])});Object.keys(o.s).forEach(id=>{if(labById(id))set(SUM+id,o.s[id])});
 if(o.n&&!get(ME,{}).name){const me=get(ME,{});me.name=o.n;set(ME,me)}}

/* ---------- report text ---------- */
const fmtDate=t=>t?new Date(t).toLocaleDateString('en-NZ',{day:'numeric',month:'short',year:'numeric'}):'';
function report(name,summaries,code){const L=[],now=new Date().toLocaleDateString('en-NZ',{day:'numeric',month:'long',year:'numeric'});
 L.push('Physics@Rosmini · revision progress');L.push('Student: '+(name||'(no name given)'));L.push('Date: '+now);L.push('');
 const notStarted=[];
 [13,12].forEach(y=>{const labs=LABS.filter(l=>l.y===y);const done=labs.filter(l=>started(summaries[l.id]));labs.filter(l=>!started(summaries[l.id])).forEach(l=>notStarted.push('Year '+y+' '+l.title));if(!done.length)return;
  L.push('YEAR '+y+' · NCEA LEVEL '+(y-10));
  done.forEach(l=>{const m=summaries[l.id];L.push(l.title+' (AS'+l.as+')'+(m.t?' · last used '+fmtDate(m.t):''));
   L.push('  Self-ratings: '+m.conf+' of '+m.total+' confident · '+m.get+' getting there · '+m.not+' not yet · '+Math.max(0,m.total-m.conf-m.get-m.not)+' not rated');
   if(m.weak.length){L.push('  Weakest:');m.weak.forEach(w=>L.push('   - '+w))}
   if(m.quiz.length)L.push('  Quiz best scores: '+m.quiz.map(q=>q[0]+' '+q[1]+'/'+q[2]).join(' · '));
   const pr=[];if(m.ceo)pr.push('CEO answers built '+m.ceo[0]);if(m.spot!=null)pr.push('spot the mistake '+m.spot+' found first time');if(m.draw)pr.push('standing-wave diagrams '+m.draw);if(m.rr)pr.push('formulae rearranged '+m.rr);if(pr.length)L.push('  Answer practice: '+pr.join(' · '));
   if(m.exams.length)L.push('  Exam sets (self-marked): '+m.exams.map(h=>h.d+(h.timed?' timed':'')+': '+h.q.map((q,i)=>q+' = '+h.g[i]).join(', ')).join(' | '));
   L.push('')})});
 if(notStarted.length){L.push('Not started yet: '+notStarted.join(', '));L.push('')}
 L.push('These results are self-rated and self-marked by the student on the Physics@Rosmini website.');
 if(code){L.push('');L.push('Progress code (paste it into the teacher page to see these results in the class table):');L.push(code)}
 return L.join('\n')}

window.SiteProgress={LABS,get,set,plain,summaries:()=>{const o={};LABS.forEach(l=>{const v=get(SUM+l.id,null);if(v)o[l.id]=v});return o},started,collect,encode,decode,findCodes,load,report,fmtDate,ME,publish};
const start=()=>{addButton();watch();window.addEventListener('load',watch)};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
