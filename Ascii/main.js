document.getElementById("char").addEventListener("keydown",function(){
    if(event.keyCode==16){
        alert(event.keyCode +"of SHIFT KEY");
    }
    else if(event.keyCode==17){
        alert(event.keyCode +"of CTRL KEY");

    }
    
    else if(event.keyCode==18){
        alert(event.keyCode +"of ALT KEY");

    }
    else{
        alert(event.keyCode);
    }
})