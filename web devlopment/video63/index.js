console.log("Array");

 let arr = [1,2,3,4,5];
 let arr2 = [6, 7, 8,9];
//  console.log(arr, typeof arr);
//  arr[0] = 10;
//  console.log(arr[0]);
//  console.log(arr.length);
//  console.log(arr);

console.log(arr.toString()); // 1,2,3,4,5
console.log(arr.join(" and ")); // 1 and 2 and 3 and 4 and 5
console.log(arr.pop());  // 5
console.log(arr.push(50)); // 1, 2,3 ,4, 5, 50
console.log(arr);
console.log(arr.push("shubham")); // 1, 2, 3, 4, 50, 'shubham'
console.log(arr)
console.log(arr.shift());  // remove first element in an array
console.log(arr);
console.log(arr.unshift("shubham")); // add 'shubham' a in first element in an array
console.log(arr);
delete arr[6];  // delete a element at 6 index
console.log(arr); 
console.log(arr[6]);  // undefined bacause element was delete but memeory are allocated
console.log(arr.concat(arr2));  // concatenate two array 
console.log(arr.sort());  // sort a array in ascending order
console.log(arr.splice(2,3)); //[ 4, 50, 'shubham' ]
console.log(arr.slice(2)); // 'shubham'
console.log(arr.slice(1, 3));  // 3, 'shubham'
