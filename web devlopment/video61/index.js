console.log("Hello World!")


document.body.firstElementChild    // <div class="conatiner">
document.body.firstElementChild.childNodes  // NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
document.body.firstElementChild.children   // HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]