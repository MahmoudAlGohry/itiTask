var containar = (location.search).substring(1,);

containar= containar.split("&");
console.log(containar);


let newArray = [];

for (let i in containar) {
    containar[i] = containar[i].split("=");
}
console.log(containar);

for (let i = 0;i<containar.length;i++) {
    newArray[containar[i][0]]= containar[i][1]
}

document.getElementById("usName").innerText = "Hello "+newArray.userName;
document.getElementById("usAdd").innerText = "you Adrres is : "+newArray.adds;
document.getElementById("usemail").innerText = "you E-mail is : "+newArray.email;
document.getElementById("usgender").innerText = "you Gender is : "+newArray.gender;
