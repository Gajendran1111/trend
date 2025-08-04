// function 
// syntax 
// funciton name (){};


function box1 (){
var a= 10;
var a= 20;
console.log(a);

let b = 25;
b = 35;
console.log(b);

const c ="java";
console.log(c);

}
box1();

// Function  statement Declaration  --parameter & argument

function box2 (hi){
    console.log(hi);  
}
box2("hello world");
// Function Expression or Anonymous Function
let js =function box3 (hi){
    console.log(hi);  
}
js("hello world")

//  Anonymous Function
let jj =function  (hi){
    console.log(hi);  
}
jj("hello world");

// Immediate Invoke Function expression 
(function(iife){
    console.log(iife);
    
})("javascript");
// Arrow Function
// syntax 
// ()=>{}

    let aro = (out)=>{console.log(out)}
    aro("arrow function")