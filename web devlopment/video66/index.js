console.log("shubham");

// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor = "red"



// document.getElementById("red").style.backgroundColor = "red"



document.querySelector(".box").style.backgroundColor = "green"

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
    console.log(e);
})


let a = document.getElementsByTagName("div")
console.log(a);