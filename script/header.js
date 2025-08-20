// // /////////////setting ///////////////////////
var setting=document.querySelector(".setting")
var icon_setting=document.querySelector("#setting_icon")
var delete_setting=document.querySelector("#DSetting")
icon_setting.onclick=function(){
  setting.style.display="block";
}
delete_setting.onclick=function(){
  setting.style.display="none";
}
// var UserName = localStorage.getItem("username")+"🎀" || "Sign Up";
// let signUP = document.querySelectorAll(".links .signUP");
// signUP[0].innerHTML = UserName;
// signUP[1].innerHTML = UserName;
//////////////////////////////////////////////////////////////
function dark_mode() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.getElementById("light").style.color="black";
document.querySelectorAll(".list").forEach(l => {
  l.style.color="black";
});
// document.querySelectorAll(".speaker").forEach(j => {
//   j.style.backgroundColor="white";
// });
// document.querySelectorAll(".speak").forEach(j => {
//   j.style.backgroundColor="white";
// });
}

function light_mode() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.getElementById("light").style.color="white";

}
///////////////////////////////////////////////////////////
document.getElementById("dark").addEventListener("click", () => {
  dark_mode();
});

document.getElementById("light").addEventListener("click", () => {
  light_mode();
});