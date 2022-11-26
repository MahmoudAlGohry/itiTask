function setCookie(cookieName, cookieValue, expiryDate) {
  if (expiryDate == undefined) {
    expiryDate = "";
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + expiryDate;
  } else {
    document.cookie = cookieName + "=" + cookieValue + ";expires=" + expiryDate;
  }
}
function getCookie(cookieName) {
  var cookiesList = document.cookie.split(";");
  var cookies = {};
  for (let i = 0; i < cookiesList.length; i++) {
    let cookie = cookiesList[i];
    cookies[cookie.split("=")[0].trim()] = cookie.split("=")[1];
  }
  return cookies[cookieName];
}
function allCookieList() {
  var cookiesList = document.cookie.split(";");
  var cookies = {};
  for (let i = 0; i < cookiesList.length; i++) {
    let cookie = cookiesList[i];
    cookies[cookie.split("=")[0].trim()] = cookie.split("=")[1];
  }
  return cookies;
}
function hasCookie(cookieName) {
  var cookies = allCookieList();
  return cookies.hasOwnProperty(cookieName);
}

function deleteCookie(cookieName) {
  var newDate = new Date();
  newDate.setTime(newDate.getTime() - 80);
  document.cookie = cookieName + "=" + ";expires=" + newDate.toUTCString();
}
function getCounter() {
  if (!hasCookie(visitCookie)) {
    setCookie(visitCookie, 0);
  } else {
    let x = parseInt(getCookie(visitCookie));
    x++;
    setCookie(visitCookie, x);
  }
}
