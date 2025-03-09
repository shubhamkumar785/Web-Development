// let a = [1, 93, 5, 6, 88];


// clasical for loop
/*
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}
*/


// for each loop
/*
a.forEach((value, index, arr) =>{
    console.log(value, index, arr);
})
*/

// for-in loop

/*
let object = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key, element);
        
    }
}
*/



// for-of loop

/*
for (const element of a) {
    console.log(element);
}
*/


//  map ()

let arr =[1,13,5,7,11];
// let new_arr = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     new_arr.push(element**2);
// }


let new_arr = arr.map((e, index, arr) =>{
    return e**2
})
console.log(new_arr);




// filter() function

const greaterThanSeven = (e)=>{
    if(e >7){
        return true
    }
    else{
        return false
    }
}
console.log(arr.filter(greaterThanSeven));




// reduce() fucntion

let arr2 = [1, 2, 3,4, 5,6];

const red = (a, b)=>{
    return a*b
}

console.log(arr2.reduce(red)); // 1*2 * 3* 4* 5* 6 = 720



//  array.from

console.log(Array.from("shubham")); // convert array into string = 's','h','u','b','h','a','m'