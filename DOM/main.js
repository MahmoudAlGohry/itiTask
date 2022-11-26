var parent = document.getElementById("header");
let imgNode = parent.firstElementChild;
var clonedImage = imgNode.cloneNode(true);
setTimeout(function(){
    document.body.appendChild(clonedImage);
    imgNode.parentNode.style.textAlign="end";
},2000)