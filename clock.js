var sec = document.getElementById("second");
var min = document.getElementById("minute");
var hour = document.getElementById("hour");
var secDegree = 0;
var minDegree = 0;
var hourDegree = 0;

function secRotation() {
    degrees = Math.floor((1/60)*360);
    secDegree += degrees;
    sec.style.transform = "rotate(" + secDegree + "deg)"
}
setInterval(secRotation, 1000);

function minRotation() {
    degrees = Math.floor((1/60)*360);
    minDegree += degrees;
    min.style.transform = "rotate(" + minDegree + "deg)"
}
setInterval(minRotation, 60000);

function hourRotation() {
    degrees = Math.floor((1/12)*360);
    hourDegree += degrees;
    hour.style.transform = "rotate(" + hourDegree + "deg)"
}
setInterval(hourRotation, 3600000);