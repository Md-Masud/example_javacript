 var Rectangular=function(width,height){
    this.width=width;
    this.height=height;
     var position={
        x:90,
        y:100

     }
    const  properties =function(){
        console.log('width:'+this.width);
        console.log('height:'+this.height);
     }.bind(this)
     this.draw=function(){
        properties();
     }
     Object.defineProperty(this,'position',{
        get:function(){
            return position;
        },
        set:function(value){
            position=value;
        }
     })
 }

 function square(width){
   this.width=width;
 }
 square.prototype={
   draw:function(){
      console.log('draw');
   }
 }
 var sqr1=new square(90);
 var sqr2=new square(8);
 console.log(sqr1);
 console.log(sqr2);
 var v=new Rectangular(90,100);
 console.log(v.draw());
 console.log(v.position);