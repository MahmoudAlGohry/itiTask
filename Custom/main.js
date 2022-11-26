var myEvent= new Event("timeout");
var userName = document.getElementById("userName")
var age = document.getElementById("age")
var submit = document.getElementById("submit");
submit.addEventListener("click",function(){
    var submission=confirm("sure to submit");
    if(submission){
        location.assign("confirm.html")
    }
    event.preventDefault();
})
window.addEventListener("timeout",function(){
    if(!userName.value&&!age.value){
        //alert("tamam");
    //}
    //else{
        alert("please enter data")
    }

})

var alerting=setInterval(function(){
    if(!userName.value&&!age.value){
        window.dispatchEvent(myEvent)
    }

}
,3000)