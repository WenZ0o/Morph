(function(root){
  class SeededRandom{
    constructor(seed=42){this.state=SeededRandom.hash(seed) || 0x9e3779b9;}
    static hash(v){const s=String(v);let h=2166136261>>>0;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
    next(){let x=this.state;x^=x<<13;x^=x>>>17;x^=x<<5;this.state=x>>>0;return this.state/4294967296;}
    range(a,b){return a+(b-a)*this.next();}
    pick(arr){return arr[Math.floor(this.next()*arr.length)];}
    normal(){let u=Math.max(this.next(),1e-9),v=this.next();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
  }
  root.MorphCore=root.MorphCore||{};root.MorphCore.SeededRandom=SeededRandom;if(typeof module!=="undefined")module.exports=SeededRandom;
})(globalThis);
