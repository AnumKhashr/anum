function update(){
    console.log("event is fired.");
}
// I want to create variable 
var x =10;
var y=20;
console.log(x*y);
//I want to create function in JS
function sum(a,b){
    return a+b;
}
console.log(sum(x,y));
//If I want to assign function to variable
var mysum = sum;
console.log(mysum); 