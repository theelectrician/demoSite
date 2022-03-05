
let t=0
let number=12349
i=2;
while(i<number){
    if(number%i==0){
        console.log("Not Prime")
        break;
    }
    i++

}
if(i==number)
console.log("Prime")

if(number==1)
console.log("Neither")