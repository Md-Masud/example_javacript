function test(){
    var name="i ma masud";
    return function(){
        console.log(name);
    }
}
var tes=new test()
tes();
for(var i=0;i<6;i++){
    (function(i){setTimeout(function(){
        console.log(i);
    },1000*i)})(i)
}