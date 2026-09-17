(function(root){
  const interventions={
    incision(sim){sim.removeWhere(c=>c.x<sim.width*.37 && Math.abs(c.y-sim.height*.5)<sim.height*.29,"incision");},
    signalLoss(sim){sim.flags.signalA=false;sim.record("signal-loss",{});},
    starvation(sim){sim.flags.starvation=true;sim.record("starvation",{});},
    polarityFlip(sim){sim.flags.polarityFlip=true;sim.record("polarity-flip",{});},
    randomPolicy(sim){sim.flags.randomPolicy=true;sim.record("random-policy",{});},
    signalNoise(sim){sim.flags.noise=.35;sim.record("signal-noise",{amount:.35});},
    split(sim){sim.removeWhere(c=>Math.abs(c.x-sim.width*.5)<sim.width*.055,"split");}
  };
  root.MorphCore=root.MorphCore||{};root.MorphCore.interventions=interventions;if(typeof module!=="undefined")module.exports=interventions;
})(globalThis);
