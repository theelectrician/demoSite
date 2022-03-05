

function sayHEllo(){
    console.log("new function "+ sum)


}

sayHEllo();

function sum(num1, num2){
    console.log("sum is :  " + (num1+num2))
}

sum(23,24);
/*
let a = function sub(num1, num2){
    return num1-num2;
    }
    */


//IIFE with parameter
(function(num1,num2){
    console.log(num1/num2);
})(10,5)