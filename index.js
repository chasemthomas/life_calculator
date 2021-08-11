class Person {
    constructor(name, dob){
        this.name = name;
        this.dob = dob;
    }
    calculateDaysLived(inputDate){
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
    calculateTimeLeft(){
        return "Time left: unknown"
    }
    getTimeZone(){
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log(tz);
    }
}


document.getElementById("submit").addEventListener("click", function(){
    let userName = document.getElementById("name").value;
    let inputDate = document.getElementById("dob").value;
    let dayNumber = document.getElementById("dayNumber");

    let user = new Person(userName, inputDate)

    console.log(user.name + "\n" + inputDate)

    // Calculate days of life from input date
    dayNumber.innerText = user.calculateDaysLived(inputDate);
})