const {chromium}=require('playwright');const fs=require("fs");
(async()=>{const name=process.argv[2],dir=__dirname,fps=30;const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+dir+'/'+name+'.html');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(1500);
const T=await p.evaluate(()=>window.T),N=Math.round(T*fps);
for(let i=0;i<N;i++){const d=await p.evaluate(t=>{render(t);return document.getElementById('c').toDataURL('image/jpeg',.9).split(',')[1];},i/fps);
 fs.writeFileSync(`${dir}/${process.argv[3]||'frames1'}/f${String(i).padStart(5,'0')}.jpg`,Buffer.from(d,'base64'));}
console.log('frames',N,'errors',JSON.stringify(errs));await b.close();})();
