class person {
    constructor(name, dob, location, lifeExpectancy){
        this.name = name;
        this.dob = dob;
        this.location = location;
        this.lifeExpectancy = lifeExpectancy;
    }
    calculateLifeProgress(){
        return "666"
    }
    calculateTimeLeft(){
        return "Unknown"
    }
}

let dayNumber = document.getElementById("dayNumber");
let submitBtn = document.getElementById("submit");


let calculateDays = function(inputDate){
    console.log("Input Date: " + inputDate);
    // Get current date
    const d = new Date();
    let currentYear = d.getFullYear();
    // Number of days this year
    let today = new Date();
    let daysThisYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 1)) / 86400000);
    // Calculate date of birth
    let dateTime = inputDate + "T00:00:00";
    let dob = new Date(dateTime);
    // Number of days from birthday to end of year
    let daysInBirthYear = 109;
    // Get year
    let birthYear = dob.getFullYear();
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
    return ageInDays;
}

submitBtn.addEventListener("click", function(){

    let inputDate = document.getElementById("dob").value;
    let userName = document.getElementById("name").value;
    let city = "Walnut Creek";
    let lifeExpect = "Unknown";
    let user = new person(userName, inputDate, city, lifeExpect)

    console.log(user.name + "\n" + inputDate + "\n" + city + "\n" + lifeExpect)

    // Calculate days of life from input date
    dayNumber.innerText = calculateDays(inputDate);
})