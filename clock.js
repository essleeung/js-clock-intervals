// const secHand = document.getElementById("second");
// const minHand = document.getElementById("minute");
// const hrHand = document.getElementById("hour");


// function secRotation() {
//     let secDegree = (360/60) * seconds;
//     secHand.style.transform = "rotate(" + secDegree + "deg)"
// }
// setInterval(secRotation, 1000)

// function minRotation() {
//     let minDegree = ((360/60) * minutes) + (360/60 * seconds)/60;
//     minHand.style.transform = "rotate(" + minDegree + "deg)"
// }


// function hourRotation() {
//     let hourDegree = ((360/12) * hour) + ((360/60 * minutes)/12);
//     hrHand.style.transform = "rotate(" + hourDegree + "deg)"
// }
var today = new Date();
var seconds = today.getSeconds();
var minutes = today.getMinutes();
var hr = today.getHours();
var sec = document.getElementById("second");
var min = document.getElementById("minute");
var hour = document.getElementById("hour");
var secDegree = seconds/60*360;
var minDegree = minutes/60*360;
var hourDegree = hr/12*360;

function secRotation() {
    degrees = (1/60)*360;
    secDegree += degrees;
    sec.style.transform = "rotate(" + secDegree + "deg)"
}
setInterval(secRotation, 1000);

function minRotation() {
    degrees = (1/60)*360;
    minDegree += degrees;
    min.style.transform = "rotate(" + minDegree + "deg)"
}
setInterval(minRotation, 60000);

function hourRotation() {
    degrees = (1/12)*360;
    hourDegree += degrees;
    hour.style.transform = "rotate(" + hourDegree + "deg)"
}
setInterval(hourRotation, 3600000);
