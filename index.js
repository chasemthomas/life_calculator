class Person {
  constructor(name, dob) {
    this.name = name;
    this.dob = new Date(dob);
  }
  // Return year of birth
  birthYear() {
    return this.dob.getFullYear();
  }
  // return month of birth as number
  birthMonth() {
    // +1 becuase getMonth is zero indexed
    return this.dob.getMonth() + 1;
  }
  // Return day of month in which user born
  birthDate() {
    return this.dob.getDate();
  }
  // Return the number of days in year after user was born
  daysAfterBirth() {  
    // How many days in the year of birth?
    let totalDays = calculateDaysInAYear(this.birthMonth());
    // On which day of the year were they born?
    let dayOfBirth = calculateDayOfyear(this.dob);
    // Subtract the day of birth from total days that year
    return totalDays - dayOfBirth;
  }
  // Return the user's age in years
  ageInYears() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear() - 1;
  }
  // Return the user's age in days
  ageInDays() {
    // Number of days this year
    let today = new Date();
    // Number of days from birthday to end of birth year
    let daysInBirthYear = this.daysAfterBirth();
    // Total days between birth and current year
    let ageInDays = calculateTotalDaysBetweenYears(this.birthYear(), today.getFullYear());
    // Number of days this year
    let daysThisYear = calculateDayOfyear(today);
    // Add the days
    ageInDays += daysInBirthYear + daysThisYear;
    return ageInDays;
  }
}

// Determine how many days are in the current month
let daysInMonth = function(year, month){
    return new Date(year, month, 0).getDate();
}

// Return the day number of the year
let calculateDayOfyear = function (date) {
    let total = 0;
    for (var i = 1; i < date.getMonth() + 1; i++) {
        total += daysInMonth(date.getFullYear(), i);
    }
    total += date.getDate();
    return total;
};

// Takes in a year and returns 366 if leap year, 365 if not
let calculateDaysInAYear = function (year) {
    // If leap year return 366, else 365
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return 366;
    } else {
        return 365;
    }
};

// Counts the number of days between two given years
let calculateTotalDaysBetweenYears = function (startYear, currentYear) {
    // Add up leap years and regular years
    let totalDays = 0;
    for (var i = startYear + 1; i < currentYear; i++) {
        totalDays += calculateDaysInAYear(i);
    }
    return totalDays;
};

// Adds a new HTML element to the UI
let addElement = function(code) {
    document.getElementById("lifeFacts").innerHTML += "</br>" + code + "</br>";
}

// Run code when user clicks submit button
document.getElementById("submit").addEventListener("click", function () {
    let userName = document.getElementById("name").value;
    let inputDate = document.getElementById("dob").value;
    let user = new Person(userName, inputDate);

    // Append results to UI
    addElement("Years old: " + user.ageInYears());
    addElement("Days old: " + user.ageInDays());
});
