// TIPS:

// 1. JAVASCRIPT IS SINGLE THREDED PROGRAMMING language
// 2. IT WAITS FOR NO ONE
// 3. IF ANY OF OUR CODE IS BLOCKING OR TAKES TIME TO EXECUTE - IT WILL BE CONSIDERED AS AN ASYCRONOUS OPERATION

// CREATING XMLHTTPRequest using JAVASCRIPT

// var - Global scoped variable - it is available all-over your application

// BLOCK SCOPED VARIABLES

// let
// const
// FOR EXAMPLE:
// const message = "Hey all";
// function greet() {
//   let message = "Good morning";
//   console.log(message);
// }
// greet();
// console.log(message);

// FUNCTION TO SEND XHR REQUEST

/* 
   REQUEST TYPE {GET} [ 'METHOD', 'URL' ]
   REQUEST TYPE {POST} [ 'METHOD', 'URL', 'BODY' ]
*/

// function sum(number1 = 0, number2 = 0, cb = () => {}) {
//   cb(number1 + number2);
// }

// sum(10, 20, printData);

// const url =
//   "https://63a3c5a7471b38b20615a032.mockapi.io/api/teacher/Teacherapi";
// const requestBody = JSON.stringify({
//   type: "teacher",
//   class: "B45WE",
//   language: "English",
// });

// function IOOperation(method = "", URI = "", body = "", print = (data) => {}) {
//   const request = new XMLHttpRequest();

//   // STEP 1 - OPEN THE REQUEST AND APP THE DETAILS
//   request.open(method, URI);

//   // STEP 2 - SEND THE REQUEST OUT OF YOUR SYSTEM
//   if (method === "GET") {
//     request.send();
//   } else {
//     request.send(body);
//   }

//   // STEP 3 - WHEN CLIENT RECEIVES THE DATA PROCESS THE DATA
//   request.onload = function () {
//     print(JSON.parse(this.responseText));
//   };
// }

/// HTTP - GET | POST | PUT | DELETE | PATCH | UPDATE
// EXAMPLE FOR POST
// function printData(data = [] | "" | {}) {
//   console.log(data);
// }
// WE ARE FETCHING DATA FROM SERVER
// IOOperation("GET", url, null, printData);
// IOOperation("GET", "./contact.json", null, printData);

// JSON - JAVASCRIPT OBJECT NOTATION

// SIMILAR NOTATION LIKE JSON:
// 1. XML
// 2. XHTML

// 1. IT IS A DATA FORMAT WHICH IS SUPPORTED BY ALL THE PROGRAMMING LANGUAGE
// 2. IT IS USEFULL FOR DOING I/O OPERATION
// 3. EASILY READABLE

// SYNTAX:

// {
//     "name": "Ashish",
//     "mobileNumb4er": "9080706089",
//     "country": "IN"
// }

// LET US DESIGN CONTCT INFORMATION USING JSON:

// WHAT IS PROPTOTYPE IN JS?

/*
1. THEY ARE A WRAPPER OR CONTAINER BOX WHICH WILL HAVE 
ALL THE FUNCTIONALITIES RELATED TO THE DATATYPE OF THE VARIABLE
*/

// var age = 20;
// var arr = [];

// arr.

// console.log(typeof age.toString());

// OBJECT OREINETED PROGRAMMING IN JAVASSVRIPT

// NORMAL WORDS
// CLASS - IT IS A BLUE-PRINT OF HOW DATA WILL LOOK LIKE
// TECNICALLY
// CLASS - IT IS A COLLECTION OF PROPERTIES AND METHODS OF A PARTICULAR DATA

// SYNTAX:

// class className {

//     constructor() {

//     }

// }

// EXAMPLE 1: CREATE FOOD CLASS

// class Food {
//   constructor(
//     name = "",
//     ingredients = [],
//     addons = [],
//     cookingSteps = [],
//     timeToCook = 0,
//     timeUnit = "",
//     color = "",
//     quantity = 0,
//     quantityUnit = "",
//     foodType = ""
//   ) {
//     this.name = name;
//     this.ingredients = ingredients;
//     this.addons = addons;
//     this.cookingSteps = cookingSteps;
//     this.timeToCook = timeToCook;
//     this.timeUnit = timeUnit;
//   }

//   print() {
//     return `The receipe ${this.name} will take ${this.timeToCook} ${this.timeUnit} to cook`;
//   }

//   updateCookingTime(timing = 0) {
//     this.timeToCook = timing;
//   }
// }

// // CREATING THE INSTANCE OF THE FOOD CLASS AND CALLING THE CONSTRUCTOR FUNCTION FOR VERY FIRST TIME
// const shawarma = new Food(
//   "Shawarma",
//   ["Chicken", "Spices", "Cabbage", "Roti", "Oil"],
//   ["Maionese"],
//   ["1"],
//   3,
//   "minutes",
//   "Brownish White",
//   100,
//   "grams",
//   "nv"
// );
// const grillChicken = new Food(
//   "Grill Chicken",
//   ["Chicken", "Spices", "Cabbage", "Roti", "Oil"],
//   ["Maionese"],
//   ["1"],
//   3,
//   "minutes",
//   "Brownish White",
//   100,
//   "grams",
//   "nv"
// );

// shawarma.updateCookingTime(12);
// console.log(shawarma.print());
// console.log(grillChicken.print());
// const Shawarma = {
//   name: "Shawarama",
//   ingredients: ["Chicken", "Spices", "Cabbage", "Roti", "Oil"],
//   addons: ["Maionese"],
//   cookingSteps: ["Maionese"],
//   timeToCook: 3,
//   timeUnit: "minutes",
//   color: "Brownish White",
//   quantity: 100,
//   quantityUnit: "grams",
//   foodType: "nv",
// };

// const GrilledChicken = {
//   name: "GrilledChicken",
//   ingredients: ["Chicken", "Spices", "Oil"],
//   addons: ["Maionese", "Lemon", "Corriander Dip"],
//   cookingSteps: ["1", "2"],
//   timeToCook: 1,
//   timeUnit: "hour",
//   color: "Brownish",
//   quantity: "100gm",
//   quantityUnit: "unit",
//   foodType: "nv",
// };

// TASK 1:

// 1. CREATE INSTANCE OF FOOD like Tandoori, Burger, Pizza
// 2. CALL THE PRINT FUNCTION

// TASK 2

// 1. CREATE A CLASS NAMED {YOUR_CHOICE}

// TASK 3:

// ANONYMOUS FUNCTION

// function callMe() {

// }

// callMe();

// const callMe = () => {
//   console.log("IM ANONYMOUS");
// };
// callMe();

// // IIFE - immidiately invoking function experession

// (() => {
//   // statement
//   console.log("IM IIFE");
// })();
