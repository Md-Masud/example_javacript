var additional=function(a,b){
 return a+b;
}
console.log(additional(4,8));
var arr=[];
arr.push(additional);
console.log(arr[0](9,7));
var obj={
    d:additional,
}
console.log(obj.d(8,5));

function add(a,b){
    return a+b;
}
function manipulation(a,b,func){
    var c=a+b;
    var d=a-b;
    function multiply(){
        var m=func(a,b);
        return (c*d*m);
    }
    return multiply
}
var multiply=manipulation(6,9,add)
console.log(multiply());