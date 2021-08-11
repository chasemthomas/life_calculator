const monthNames = [
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

console.log("\n==========\n");

// Get current date
const d = new Date();
let currentMonth = monthNames[d.getMonth()];
let currentDay = d.getDay();
let currentYear = d.getFullYear();
// Number of days this year
let today = new Date();
let daysThisYear = Math.floor(
  (today - new Date(today.getFullYear(), 0, 1)) / 86400000
);

// Create date string
let dateString = currentMonth + " " + currentDay + ", " + currentYear;
// Calculate date of birth
let dateTime = "1985-09-14" + "T00:00:00";
let dob = new Date(dateTime);
// Number of days from birthday to end of year
let daysInBirthYear = 109;
// Get year
let birthYear = dob.getFullYear();
// Get month
let birthMonth = dob.getMonth() + 1;
// Get day
let birthDate = dob.getDate();

// Leap year calculator
let totalLeaps = 0, totalNorms = 0;
let calculateYear = function (year) {
  return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

// Add up leap years and regular years
let ageInDays = 0;
for (var i = birthYear+1; i < currentYear; i++) {
  if(calculateYear(i)){
    totalLeaps += 1;
    ageInDays += 366;
  } else {
    totalNorms += 1;
    ageInDays += 365;
  }
}

// Add the days
ageInDays = daysInBirthYear + ageInDays + daysThisYear;

console.log("Date of birth: " + monthNames[birthMonth-1] + " " + birthDate + ", " + birthYear);
console.log("Days in the year after your birth: " + daysInBirthYear);
console.log("Number of leap years " + totalLeaps);
console.log("Number of normal years" + totalNorms);
console.log("Days of this year: " + daysThisYear);
console.log("\nYou are " + ageInDays + " days old.");
console.log("\n==========\n");