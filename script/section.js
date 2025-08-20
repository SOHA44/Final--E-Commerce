let countdown_date=new Date
countdown_date.setDate(countdown_date.getDate()+4)
let timer = setInterval(update_counter,1000);
function update_counter()
{
    current = new Date().getTime();
    let distance=(countdown_date - current)/1000;
    if(distance <0)
{
    clearInterval(timer);
    return;
}
let days = Math.floor(distance/(60*60*24));
distance-=days * (60*60*24);
let hours = Math.floor(distance/ (60*60));
distance-=hours * (60*60);
let minutes = Math.floor(distance/ (60));
distance-=minutes * (60);
let seconds = Math.floor(distance);
if(days>9){
document.getElementById("day").innerHTML=days;
}
else {
    document.getElementById("day").innerHTML="0"+days;
}
if(hours>9){
document.getElementById("hour").innerHTML=hours;
}
else {
    document.getElementById("hour").innerHTML="0"+hours;
}
if(minutes>9){
document.getElementById("minute").innerHTML=minutes;
}
else {
    document.getElementById("minute").innerHTML="0" +minutes;
}
if(seconds>9){
document.getElementById("second").innerHTML=seconds;
}
else {
    document.getElementById("second").innerHTML="0"+seconds;
}
}