(function(root){
  const protocols=[
    {id:"M-01",key:"baseline",name:"Baseline",question:"Does the body remain stable?",apply:()=>{}},
    {id:"M-02",key:"incision",name:"Incision",question:"Can local motion and division restore tissue?",apply:s=>MorphCore.interventions.incision(s)},
    {id:"M-03",key:"signalLoss",name:"Signal loss",question:"How dependent is shape on positional information?",apply:s=>MorphCore.interventions.signalLoss(s)},
    {id:"M-04",key:"starvation",name:"Starvation",question:"What changes when growth is resource constrained?",apply:s=>MorphCore.interventions.starvation(s)},
    {id:"M-05",key:"polarityFlip",name:"Polarity flip",question:"What happens when signal labels disagree with cell memory?",apply:s=>MorphCore.interventions.polarityFlip(s)},
    {id:"M-06",key:"randomPolicy",name:"Random policy",question:"How much stability comes from positional repair guidance?",apply:s=>MorphCore.interventions.randomPolicy(s)},
    {id:"M-07",key:"signalNoise",name:"Signal noise",question:"How robust is the system to noisy positional information?",apply:s=>MorphCore.interventions.signalNoise(s)},
    {id:"M-08",key:"split",name:"Split",question:"Does the body rejoin after separation?",apply:s=>MorphCore.interventions.split(s)}
  ];
  root.MorphExperiments={protocols};if(typeof module!=="undefined")module.exports=protocols;
})(globalThis);
