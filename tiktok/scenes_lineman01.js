
const TL=__TIMELINE__;const T=TL.T;
function brand(){txt('LINEMAN TIPS',W/2,150,44,TYPE,Y,{stroke:6});}
function cap(s,u,u0,y){const a=clamp((u-u0)/.25);s.split('\n').forEach((l,i)=>txt(l,W/2,(y||1600)+i*82,64,BLOCK,BONE,{a}));}
function card(title,lines,u){const k=back(u/.45);g.save();g.translate(W/2,820);g.scale(lerp(.6,1,k),lerp(.6,1,k));g.globalAlpha=clamp(u/.2);
 g.fillStyle='#050505';g.fillRect(-430,-300,880,620);g.fillStyle='#22241d';g.fillRect(-440,-310,880,620);g.strokeStyle=Y;g.lineWidth=8;g.strokeRect(-440,-310,880,620);
 g.fillStyle=Y;g.fillRect(-440,-310,880,120);txt(title,0,-225,76,DIRT,'#111',{stroke:0});
 lines.forEach((l,i)=>{const a=clamp((u-.6-i*.45)/.3);txt(l,0,-80+i*120,70,BLOCK,BONE,{a});});g.restore();}
const scene={
 hook(u,d){brand();slam('YOU LOSE',W/2,760,150,DIRT,BONE,.15,u);slam('THE BLOCK',W/2,920,150,DIRT,BONE,.55,u);slam('IN THE FIRST',W/2,1080,118,DIRT,BONE,.95,u);slam('3 STEPS.',W/2,1290,210,DIRT,Y,1.35,u);
  if(u>3.4)cap('Not at contact.',u,3.4,1560);},
 race(u,d){brand();ground();txt("IT'S A RACE",W/2,420,130,DIRT,Y,{a:clamp(u/.3)});
  const k=ease((u-1)/1.4);g.save();g.translate(-260,0);figure(lerpPose(P.stance,P.step2,k),BONE);g.restore();
  g.save();g.translate(1080+260,0);g.scale(-1,1);figure(lerpPose(P.high,P.high,k),RED);g.restore();
  cap('Low + first = wins the rep.',u,2.2);},
 step1(u,d){brand();ground();label(1,'SHORT & FAST',u,0);const k=ease((u-1.3)/.6),p=lerpPose(P.stance,P.step1,k);ball(700,GY-30);figure(p,BONE);
  if(u>2){const a=clamp((u-2)/.4);g.save();g.globalAlpha=a;g.strokeStyle=Y;g.lineWidth=8;g.beginPath();g.moveTo(475,GY+60);g.lineTo(530,GY+60);g.moveTo(475,GY+40);g.lineTo(475,GY+80);g.moveTo(530,GY+40);g.lineTo(530,GY+80);g.stroke();g.restore();txt('6 IN',503,GY+150,54,BLOCK,Y,{a});}
  cap('6 inches. Not a lunge.\nA long first step = slow.',u,2.6);},
 drill1(u,d){brand();card('DRILL',['3-step starts','5 reps','Explode. Reset.'],u);cap('Equipment: just floor space.',u,2.5,1420);},
 step2(u,d){brand();ground();label(2,'HIPS UNDER YOU',u,0);const k=ease((u-.6)/.5);
  g.save();g.translate(-200,0);figure(P.high,'#77736a',.9);g.restore();
  if(u>1.6){const a=clamp((u-1.6)/.2);g.save();g.globalAlpha=a;g.strokeStyle=RED;g.lineWidth=22;g.lineCap='round';g.beginPath();g.moveTo(160,780);g.lineTo(440,1060);g.moveTo(440,780);g.lineTo(160,1060);g.stroke();g.restore();txt('TOO HIGH',300,720,64,BLOCK,RED,{a});}
  g.save();g.translate(180,0);figure(lerpPose(P.stance,P.step2,k),BONE);g.restore();
  if(u>2.5){const a=clamp((u-2.5)/.3);g.save();g.globalAlpha=a;g.setLineDash([24,16]);g.strokeStyle=Y;g.lineWidth=7;g.beginPath();g.moveTo(560,1030);g.lineTo(1040,1030);g.stroke();g.restore();txt('PAD LEVEL',880,1000,56,BLOCK,Y,{a});}
  cap('Snapped it high? Sink right away.\nLow man wins.',u,3);},
 drill2(u,d){brand();ground();txt('DRILL: UNDER THE ROPE',W/2,420,72,DIRT,Y,{a:clamp(u/.3)});
  g.strokeStyle=BONE;g.lineWidth=10;g.beginPath();g.moveTo(80,1010);g.quadraticCurveTo(W/2,1030,W-80,1010);g.stroke();g.fillStyle='#3a3a33';g.fillRect(60,1000,30,GY-1000);g.fillRect(W-90,1000,30,GY-1000);
  const k=ease((u-.8)/1.2);g.save();g.translate(lerp(-120,260,k),0);figure(lerpPose(P.stance,P.step2,Math.min(1,k*1.4)),BONE);g.restore();
  cap('Head touches the rope?\nYou came up too high.',u,1.8);},
 step3(u,d){brand();ground();label(3,'ROLL THE HIPS',u,0);
  const k1=ease((u-.6)/.7),k2=ease((u-1.9)/.7),p=u<1.9?lerpPose(P.stance,P.step2,k1):lerpPose(P.step2,P.step3,k2),fall=u<2.4?0:ease((u-2.4)/.9);
  g.save();g.translate(30,GY*(1-.78));g.scale(.78,.78);defender(lerp(860,830,fall),lerp(0,1.2,fall),1);figure(p,BONE);
  if(u>1.9){const a=clamp((u-1.9)/.3);g.save();g.globalAlpha=a;g.strokeStyle=Y;g.lineWidth=14;g.lineCap='round';g.beginPath();g.arc(600,1120,150,Math.PI*.95,Math.PI*1.6);g.stroke();g.fillStyle=Y;g.beginPath();g.moveTo(690,990);g.lineTo(640,960);g.lineTo(660,1020);g.closePath();g.fill();g.restore();txt('HIP SNAP',470,930,66,BLOCK,Y,{a});}
  g.restore();if(u>3)slam('PANCAKE.',W/2,820,170,DIRT,Y,3,u);
  cap('Power from the hips,\nnot the arms.',u,3.6,1620);},
 gym(u,d){brand();txt('TRAIN IT FAST',W/2,480,120,DIRT,Y,{a:clamp(u/.3)});
  [['Broad jumps','3 x 3'],['Speed trap bar pulls','6 x 2'],['Med ball scoop toss','4 x 3']].forEach(([n,sr],i)=>{const t0=.9+i*1.3,k=ease((u-t0)/.4);if(u<t0)return;g.save();g.globalAlpha=k;g.translate(lerp(-140,0,k),0);
   const y=760+i*200;g.fillStyle=Y;g.fillRect(90,y-90,130,120);txt(String(i+1),155,y+5,96,DIRT,'#111',{stroke:0});txt(n,260,y-15,62,BLOCK,BONE,{align:'left'});txt(sr+' · fast reps',260,y+50,44,TYPE,'#bdb9a8',{align:'left',stroke:4});g.restore();});
  cap('Light enough to move fast,\nevery rep.',u,5,1500);},
 recap(u,d){brand();slam('SHORT.',W/2,720,190,DIRT,BONE,.1,u);slam('LOW.',W/2,940,190,DIRT,BONE,.6,u);slam('ROLL.',W/2,1160,190,DIRT,Y,1.1,u);cap('Win the first 3 steps,\nwin the rep.',u,2,1420);},
 cta(u,d){brand();const a=clamp(u/.3);txt('FOLLOW FOR',W/2,860,110,DIRT,BONE,{a});txt('MORE O-LINE',W/2,1000,110,DIRT,Y,{a});txt('TIPS',W/2,1140,110,DIRT,BONE,{a});}
};
function render(t){g.drawImage(bg,0,0);let s=TL.scenes[0];for(const x of TL.scenes)if(t>=x.start)s=x;
 const u=t-s.start;const shk=(s.id==='step3'&&u>2.4&&u<2.75)?(Math.random()-.5)*26:0;g.save();g.translate(shk,shk*.6);scene[s.id](u,s.dur);g.restore();
 g.fillStyle='rgba(242,194,48,.85)';g.fillRect(0,H-12,W*t/T,12);}
window.render=render;window.T=T;
</script></body></html>
