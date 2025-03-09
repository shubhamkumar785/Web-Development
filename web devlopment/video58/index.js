function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " you'r t-shirt is nice!");
    console.log("Hey " + name + " you'r course is good too!");
}
nice("Shubham")
nice("Subhanshu")


// function sum(a, b) {
//     console.log(a + b);
// }
// sum(3, 5)


function sum(a, b, c = 45) {  // we can pass optional parameter c = 45 but we pass in result(1,2,3) then add 1 + 2+ 3 = 6 not add optional c = 45
   return a + b + c;
}
result1 = sum(3, 5)
result2 = sum(10, 4);
result3 = sum(13, 56);
console.log("The sum of two number is: ", result1);
console.log("The sum of two number is: ", result2);
console.log("The sum of two number is: ", result3);



// Arrow / Lambda function

const func1 = (x)=>{
    console.log("I am an arrow function", x);
}
func1(34);
func1(45);
func1(67);