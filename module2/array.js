//empty array
let arr=[];
console.log(arr);

let eleArr =[1,2,3,4,5,"Hello I am String",false,'c',4,5];
console.log(eleArr);


eleArr[5]= "change";
eleArr[7]=23;
console.log("fourth ele " + eleArr[5]);
console.log(eleArr);

console.log("##");

//Array method
//1. push

eleArr.push("new item");
console.log("Array after change is: ", eleArr);

eleArr.pop()

console.log("#########");

console.log("Array after change is: ", eleArr);

console.log(eleArr.pop())
console.log("Array after change is: ", eleArr);

console.log("#########");

console.log(eleArr.shift())
console.log("Array after change is: ", eleArr);

console.log("#########");

console.log(eleArr.unshift("alpha"))
console.log("Array after change is: ", eleArr);