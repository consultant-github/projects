const monthsOfYr = [
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
  "November",
  "December"
];

const daysOfWk = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function getTime() {
  const today = new Date();
  const seconds = addLeadingZero(today.getSeconds());
  const minutes = addLeadingZero(today.getMinutes());
  let hours = today.getHours();

  const isAM = hours < 12 || hours === 0;
  const amPM = isAM ? 'AM' : 'PM';
  hours = hours >= 13 ? hours - 12 : hours;
  hours = hours === 0 ? hours + 12 : hours;

  const clockDisplay = `${hours}:${minutes}:${seconds} ${amPM}`;

  document.getElementById("time").textContent = clockDisplay;
}
function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

 function getDate() {
 
 const today = new Date();
 const date = convertToOrdinal(today.getDate());
 const day = today.getDay();
 const month = today.getMonth();
 const year = today.getFullYear();

function convertToOrdinal(number) {
  if (number < 10 || number > 0) {
    switch (number % 10) {
      case 1: 
        return number + 'st';
      case 2:
          return number + 'nd';
      case 3: 
        return number + 'rd';
    }
    return number + 'th';
  }
}

  const dateDisplay = `${daysOfWk[day]}, ${monthsOfYr[month]} ${date} ${year}`;

  document.getElementById("date").innerHTML = dateDisplay;
  
} 

getDate();
getTime();
setInterval(getTime, 1000);
