// function add(a,b){
//     return a+b;
// }
let sub = (a,b) =>  {
    return a-b
}

let sum  = (a,b) => a+b;
let mul =x=>x*x;
  
console.log(sub(3,5));
console.log(sum(3,5));
console.log(mul(9));

let obj={
  name:"masud rana",
  print:function(){
    let new_name=this;
    setTimeout(function(){
      console.log(new_name.name);
    },1000)

  }
}
let obj1={
  name:"masud rana",
  print:function(){
    
    setTimeout(function(){
      console.log(this.name);
    }.bind(this),1000)

  },
}
let obj2={
  name:"masud rana",
  print:function(){
    
    setTimeout(()=>{
      console.log(this.name);
    },1000)

  },
}
console.log(obj.print());
console.log(obj1.print());
console.log(obj2.print());
//rest
function summation(...rest){
  return rest.reduce((a,b)=>a+b)
}
console.log(summation(1,2,3,4,6,7,8))
//single array
let a=[1,2,3,4,5,6];
console.log(...a);
let ob1={
  a:90,
  b:89,
}
let ob2={
  ...ob1,
  c:908
}
var  e=10; f=20;
let ob3={
  e,
  f,
  add(){
    console.log('ok');
  },
  h:{
    k:e,
  }
}
console.log(ob2)
console.log(ob3.h.k)

let person={
  name:"masud",
  age:23,
  address:{
    city:"dhaka"
  }
}
let{name,age,address:{city}}=person;
console.log(name,age,city);
console.log(Object.entries(person));
let obj4=[
  ['g',900]
];
console.log(Object.fromEntries(obj4));



