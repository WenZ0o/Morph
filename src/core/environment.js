(function(root){
  function signalAt(x,y,w,h,flags,rng){
    const nx=Math.max(0,Math.min(1,x/w)),ny=Math.max(0,Math.min(1,y/h));
    let A=flags.signalA===false?0:1-nx;
    let B=flags.signalB===false?0:nx;
    if(flags.polarityFlip){const t=A;A=B;B=t;}
    const C=Math.max(0,1-Math.hypot(nx-.5,(ny-.5)*1.25)*1.7);
    const nutrient=Math.max(.15,1-Math.hypot(nx-.52,(ny-.48))*0.72)*(flags.starvation?0.43:1);
    if(flags.noise){const n=(rng?rng.range(-1,1):0)*flags.noise;A=Math.max(0,Math.min(1,A+n));B=Math.max(0,Math.min(1,B-n*.7));}
    return {A,B,C,nutrient};
  }
  root.MorphCore=root.MorphCore||{};root.MorphCore.signalAt=signalAt;if(typeof module!=="undefined")module.exports=signalAt;
})(globalThis);
