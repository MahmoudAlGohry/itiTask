var genderImg = document.getElementById("gender-img");
var welcomeMessage = document.getElementById("message");
var counter = getCookie(visitCookie);
var userName = getCookie(userNameCookie);
var age = parseInt(getCookie(ageCookie));
var gender = getCookie(genderCookie);
var color = getCookie(colorCookie);
//counter
getCounter();
//check img 
if (gender == "male") {
  genderImg.src = "./img/male.jpg";
} else {
  genderImg.src = "./img/female.jpg";
}
//welcome message
welcomeMessage.innerHTML =
  "Welcome <b style='color:" + color +"'>" + userName +
  "</b> You have visit this site <b style='color:" + color +
  "'>" + counter + "</b> times";
