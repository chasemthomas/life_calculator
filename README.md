# Life Calculator

How many days have you been alive? How many more do you have left? Let's find out!

### To Do:  

 - [x] Figure out how to calculate the numbers of days lived. Add 
 - [x] Create repo and push first code
 - [x] Convert code using class model 
 - [x] Make it easy to show new calculations as added
 - [x] totalYears calculation
 - [x] totalDays calculation
 - [ ] totalYearsMonthsDays calculation
 - [ ] totalTime calculation
 - [ ] totalYearWeeksDaysHours calculation
 - [ ] Create lifeExpectancy method
 - [ ] Add -th -st endings
 - [ ] Add life expectancy input + links to ui
 - [ ] Design UI, then add new to-dos to account for ui effort
 - [ ] Fork repo to new project: Life Calculator Chrome Extension

### Journal
  
*August 11th, 2021*

Refactored a lot of the code and finally got it working with the class and function model I immagined. It's far from perfect, but a good starting point. 

One thing I realized is that I really don't know what I'm doing when it comes to object oriented. All I knew is that I wanted to use a class structure, but I didn't know if I should use setters and getters, or what should be in the person class or not. What I settled on was putting anything specific to the user inside the class, and everything generic outside. 

I added a function to add new html to the UI. This allows me to append any number of things to the page, such as age in years, and in days, etc. 

I'm not sure if my age in years calculation will hold up. Might be worth revisiting. 

*August 10th, 2021*

Created a "person" class to gather and hold user information. Right now will only log user's information to console. 

Tried to put class in a module but forgot about CORS. I will need to convert this into a node.js project if I want to go that route. 