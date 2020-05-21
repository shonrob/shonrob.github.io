var d = new Date();
var day = d.getDate();
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
 
const banner = document.getElementById("event");

if(d.getDay() == "Friday") {
     banner.style.display = "block";
 }
 else {
     banner.style.display = "none";
 }