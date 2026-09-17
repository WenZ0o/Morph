(function(root){
  function computeMetrics(sim){
    const cells=sim.cells.filter(c=>c.alive),N=sim.targets.length||1;
    let energy=0,stress=0,cx=0,cy=0;for(const c of cells){energy+=c.energy;stress+=c.stress;cx+=c.x;cy+=c.y}
    if(cells.length){energy/=cells.length;stress/=cells.length;cx/=cells.length;cy/=cells.length}
    let covered=0;for(const t of sim.targets){let best=1e9;for(const c of cells){const d=(c.x-t.x)**2+(c.y-t.y)**2;if(d<best)best=d;}if(best<20*20)covered++;}
    const cellRecovery=Math.min(1,cells.length/N),coverage=covered/N;
    const centroidPenalty=Math.min(1,Math.hypot(cx-sim.width/2,cy-sim.height/2)/120);
    const recovery=Math.max(0,Math.min(1,.62*cellRecovery+.33*coverage+.05*(1-centroidPenalty)));
    return {cells:cells.length,recovery,coverage,energy,stress,centroid:{x:cx,y:cy}};
  }
  root.MorphCore=root.MorphCore||{};root.MorphCore.computeMetrics=computeMetrics;if(typeof module!=="undefined")module.exports=computeMetrics;
})(globalThis);
