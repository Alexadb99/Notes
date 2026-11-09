# usage: python3 assemble.py <base_html> <scenes_js> <timeline_json> <out_html>
import sys
base,scn,tl,out=sys.argv[1:5]
s=open(base).read()
head=s[:s.index("function brand(){")]
open(out,'w').write(head+open(scn).read().replace('__TIMELINE__',open(tl).read()))
print('ok')
