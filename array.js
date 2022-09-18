var l=[1,3,4,6,7,89];
// l.push(9);
// l.shift(6)
// l.unshift(7);
// l.splice(3,0,90)
// .pop();
// l.reverse();
// var g=l.concat(arr);
// l.join(',');
// //console.log(l);
var arr = [1,2,3,9,5,6,7,90];
// for(var i = 0; i< (arr.length/2);i++){
//     var temp = arr[i];
//     arr[i] =arr[arr.length- 1 - i];
//     arr[arr.length - 1 - i]=temp

// }
//console.log(arr);
arr.forEach(function(value){
    console.log(value);
});
function forEach(arr,cd){
    for(var i=0;i<arr.length;i++){
       cd(arr[i]);
    }
}
var sum=0;
forEach(arr,function(value){
  sum+=value;
});
console.log(sum);

var filler=arr.filter(function(value){
  return value%2==0;
})
console.log( filler);

function filleri(arr,cb){
  var newArr=[];
  for(var i=0;i<arr.length;i++){
    if(cb(arr[i],i,arr))
    newArr.push(arr[i]);
  }
  return newArr;
}
var f=filleri(arr,function(value){
   return value % 2==1;
});
console.log(f);
var r=arr.reduce(function(pre,curr){
  return pre+curr;
})
console.log("ok"+r);

function reducei(arr,cb,acc){
  for(var i=0;i<arr.length;i++){
     acc = cb(acc,arr[i]);
     
  }
  return acc;
}
var r=reducei(arr,function(curr,pre){
   return pre+curr;
},0);
console.log(r);
f=arr.find(function(value){
  return value==9
});
console.log(f)
fn=arr.findIndex(function(value){
  return value=1;
})
console.log(fn);
arr.sort();
console.log(arr.sort());
arr.sort(function(a,b){
  if(a>b){
    return 1;
  }else if(a<b){
   return -1;
  }else{
    return 0;
  }
  
})
console.log(arr);
var y=arr.every(function(value){
return value%2==0
})
console.log(y);
var x=arr.some(function(value){
  return value%2==1
  })
  console.log(y);

  function base(b){
    return function(n){
      var result=1;
      for(var i=0;i<b;i++){
       result*=n;
      }
      return result;
    }
  }
  var bas8=base(8);
  console.log(bas8(5))


