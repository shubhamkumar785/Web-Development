console.log("I am a tutorial on loops");

for (let i = 0; i < 100; i++) {
    console.log(i);
    
}

let obj = {
    name: "shubham",
    role: "Programmer",
    comapny: "microsoft"

}
// for-in loop is used for key    ... ye object ke liye
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
        
}
// for-of loop is used for string and array    ... ye character ke liye
for (const element of "shubham") {
    console.log(element);
}


// while loop
// let i = 5;
// while(i<6){
//     console.log(i);
//     i++;
// }



// do-while loop
let i = 10;
do {
    console.log(i);
    i++;
} while (i<20);