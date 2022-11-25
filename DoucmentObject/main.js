let i = 1;
let clear;
function slid() {
    let img = document.getElementById("pic");
    clear = setInterval(function () {
        if (i < 6) {
            i++;
            img.src = "./SlideShow/"+i+".jpg";
        } else {
            clearInterval(clear)
        }
    }, 1000)
}

function back(){
    let img = document.getElementById("pic");
    if (i>1){
        i--;
        img.src = "./SlideShow/"+i+".jpg";
    }
}

function next (){
    let img = document.getElementById("pic");
    if (i<6){
        i++;
        img.src = "./SlideShow/"+i+".jpg";
    }

}

function stop(){
        clearInterval(clear);
}