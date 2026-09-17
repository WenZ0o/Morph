(function(root){
  function createCell(id,target,parent=null,rng=null){
    const j=()=>rng?rng.normal()*1.7:0;
    return {id,parent,born:0,x:target.x+j(),y:target.y+j(),vx:0,vy:0,targetX:target.x,targetY:target.y,energy:1,stress:0,age:0,signalA:0,signalB:0,centerSignal:0,nutrient:1,neighbors:0,alive:true};
  }
  root.MorphCore=root.MorphCore||{};root.MorphCore.createCell=createCell;if(typeof module!=="undefined")module.exports=createCell;
})(globalThis);
