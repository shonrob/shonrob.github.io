const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString("en-US", options);

/* Another way to show date

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months= [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December"
];
const todaysDate = new Date();
const dayName = dayNames[todaysDate.getDay()];
const monthName = months[todaysDate.getMonth()];
const currentDate = dayName + ", " + todaysDate.getDate() + " " + monthName + ", " + todaysDate.getFullYear();
document.getElementById("currentDate").textContent = currentDate;  
*/