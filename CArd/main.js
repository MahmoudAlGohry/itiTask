var image;
var clonedImage;
var win;
var radioButtons = document.getElementsByName("image");
function changeBorder(Image) {
    if(image!=undefined){
        image.style.border="";
    }
    console.log(Image);
    Image.style.border="5px solid red";
    image = Image;
}


function createCard(){
    var myImage
    win = open("Card.html","","width=500px , height=600px");
    var message = document.createElement("h2");
    message.innerText=document.getElementById("message").value;
    win.document.write("The Card :");
    win.document.body.appendChild(message);
    for (let i = 0; i < radioButtons.length; i++) {
        if(radioButtons[i].checked){
            
            myImage=radioButtons[i].nextElementSibling.firstElementChild;
            console.log(myImage);
        }    
    }
    
    var clonedImage = myImage.cloneNode(true);
    console.log(clonedImage);
   
    win.document.body.append(clonedImage);
    
   
}