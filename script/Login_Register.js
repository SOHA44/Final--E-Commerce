
var a = document.querySelector(".log");
var b = document.querySelector(".Reg");
function log() {
  a.setAttribute("href", "login.html");
}
function Reg() {
  b.setAttribute("href", "Register.html");
}

// ////////////////////// data /////////////////////////////////////////////////////////////////
var Reginput = document.querySelectorAll(".Rinput");
var Loginput = document.querySelectorAll(".input");
var username = Reginput[0];
var password = Reginput[1];
function sendRegister() {
  if (Reginput[0].value === "" || Reginput[1].value === "")
    alert("Enter your Information First");
  else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    
 
   
         window.location.href = "index.html";

 
  }
}
function sendLogIn() {
  var u = localStorage.getItem("username");
  var p = localStorage.getItem("password");
  if (Loginput[0].value === "" || Loginput[1].value === "") {
    alert("Enter your Information First");
  } else if (Loginput[0].value == u && Loginput[1].value == p) {
   
         window.location.href = "index.html";
 
     
  } else {
    alert("check you username or password");
  }
}