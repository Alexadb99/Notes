# Builds lineman video 1 with AI voice: voice per scene -> timings -> frames -> mp4
import json,subprocess,wave,os
D='/tmp/claude-0/-home-user-notes/6c5e74a7-35ec-52ad-b6bc-a2b34f566418/scratchpad/'
V=D+'voices/en_US-ryan-high.onnx'
SCENES=[
 ('hook',"You lose the block in the first three steps. Not at contact. In the first three steps."),
 ('race',"Every snap is a race. The lineman who gets low and moves first usually wins the rep."),
 ('step1',"Step one. Short and fast. About six inches. Not a big lunge. A long first step throws your weight forward, and you get slow."),
 ('drill1',"Drill it with three step starts. Five reps. Explode out of your stance, then reset."),
 ('step2',"Step two. Hips under you, and stay low. If you snap the ball and come out high, sink right away. Low man wins."),
 ('drill2',"Fix it by firing out under a rope or a bar. If your head touches it, you came up too high."),
 ('step3',"Step three. Roll your hips through the target. The power comes from your hips, not your arms. Drive through him, and finish."),
 ('gym',"In the gym, train it fast. Broad jumps. Speed trap bar pulls. Med ball scoop tosses. Light enough to move fast, every rep."),
 ('recap',"Short. Low. Roll. Win the first three steps, and you win the rep."),
 ('cta',"Follow for more O line tips."),
]
PAD=0.7
os.makedirs(D+'aud',exist_ok=True)
timeline=[];t=0.0;parts=[]
for i,(sid,line) in enumerate(SCENES):
    wav=f'{D}aud/l1_{i:02d}.wav'
    subprocess.run(['python3','-m','piper','-m',V,'--length-scale','1.08','-f',wav],input=line,text=True,check=True,capture_output=True)
    with wave.open(wav) as w:dur=w.getnframes()/w.getframerate()
    sd=round(dur+PAD+(0.5 if i==0 else 0),2)
    timeline.append({'id':sid,'start':round(t,2),'dur':sd,'voiceStart':0.5 if i==0 else 0.15});t+=sd
    parts.append((wav,sd,0.5 if i==0 else 0.15))
total=round(t,2)
print('total seconds',total)
# audio track: each scene's voice placed at its start
inputs=[];filt=[]
for k,(wav,sd,vs) in enumerate(parts):
    inputs+=['-i',wav];filt.append(f'[{k}:a]adelay={int((timeline[k]["start"]+vs)*1000)}|{int((timeline[k]["start"]+vs)*1000)}[a{k}]')
mix=''.join(f'[a{k}]' for k in range(len(parts)))+f'amix=inputs={len(parts)}:normalize=0,apad=whole_dur={total}[out]'
subprocess.run(['ffmpeg','-y','-loglevel','error',*inputs,'-filter_complex',';'.join(filt)+';'+mix,'-map','[out]','-ar','44100',D+'aud/lineman01.wav'],check=True)
json.dump({'scenes':timeline,'T':total},open(D+'lineman01_timeline.json','w'))
