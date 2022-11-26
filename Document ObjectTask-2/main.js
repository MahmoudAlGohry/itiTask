var image = document.getElementsByTagName("img");
var i = 0;
var slideShow;
function slide(){
slideShow = setInterval(function () {
  image[i].src = "./img/marble1.jpg";
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  image[i].src = "./img/marble3.jpg";
}, 1000);
}
slide();
function stopSlide(btn) {
  clearInterval(slideShow);
}