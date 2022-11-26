var userNameCookie="name";
var ageCookie="age";
var genderCookie="age";
var colorCookie="color";
var visitCookie="visit";
var visitCounter;
//register form 
function handleRegister(){
var userName=document.getElementById("username").value;
var age=document.getElementById("age").value;
var color=document.getElementById("color").value;
var gender = document.querySelector("input[name='gender']:checked").value; 
var expireDate = new Date();
if(getCookie(userNameCookie)==userName){
    getCounter();
}
else{
    setCookie(visitCookie,0);
    getCounter();
}
expireDate.setDate(expireDate.getDate() + 7);
setCookie(userNameCookie, userName, expireDate);
setCookie(ageCookie, age, expireDate);
setCookie(genderCookie, gender, expireDate);
setCookie(colorCookie, color, expireDate);
location.assign("./welcome.html");
}
