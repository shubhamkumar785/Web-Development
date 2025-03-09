console.log("Hello I am conditional tutorial");

let age = 45;
let grace = 2;

console.log(age + grace);  // 47
console.log(age - grace);  // 43
console.log(age * grace);  // 90
console.log(age / grace);  // 22.5
console.log(age ** grace); // 45^2 --> 2025
console.log(age % grace);  // 1

if((age-grace) > 18){
    console.log("You can drive");

}
else{
    console.log("You cannot drive");
}





let age1 = 18;

if (age1 == 18){
   console.log("You can drive");
}
else{
    console.log("You can not drive");
}



/*
I am a 
Multi-Line
comment
*/

if(age1 != 18){
    console.log("You can drive");
}
else if(age == 0){
    console.log("Are you kidding..?");
}else if(age == 0){
        console.log("Are you again kidding..?");    
}else{
    console.log("you cannot drive");
}


a = 6;
b = 8;
let c = a> b? (a-b):(b-a)
console.log(c);