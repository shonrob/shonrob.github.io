
var tempf = parseFloat(document.getElementById("airAverage").innerHTML);
var speed = parseFloat(document.getElementById("windSpeed").innerHTML);

function windChill(tempF, speed)
if (tempF <= 50 && speed > 3 {
    let f = 35.74 + 0.6215*tempF - 35.75 * Math.pow(speed, .16) + 0.4275 * tempF * Math.pow(speed, .16);
else {
    f = "NA";
} 
}
