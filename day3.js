// ////////  HOISTING ///////////

// // What is Hoisting?
// // whenever we run javascript code, the variable declarations will be
// // handpicked by the JIT compiler and moved to the Lexical scope

// // CASE 1
// var greet = "Good Morning";
// console.log(greet); // Good morning

// // CASE 2
// console.log(greet); // UNDEFINED
// var greet = "Good morning"; //

// // DEFINING VARIABLE
// console.log(greet); // UNDEFINED
// // var greet = "Good morning"; //
// var greet = "bughati"; // ASIGNING VALUE TO VARIABLE FOR FIRST TIME
// console.log(greet);

// // EXAMPLE:
// var x = 20;
// var y = 10;
// console.log(y); // 10
// console.log(x); // 20

// GLOBAL VARIABLE RE-ASSIGNING
// var a = 10;
// var b = 20;
// function sum() {
//   a = 30;
//   return a + b;
// }
// sum();

// console.log(a, b);

// UNDERSTANDING FUNCTION SCOPE WITH EXAMPLE
// var a = 10;

// function sum() {
//   var b = 10;
//   console.log(a + b); // 20
// }
// sum();
// console.log(a, b); // 10 10

// UNDERSTANDING FUNCTIONAL SCOPE BY USING VAR OF 1 FUNCTION INTO ANOTHER
// NOTE THIS CODE WILL LEAD TO ERROR
// var message = "Good Afternoon";

// function greet() {
//   message = "Good Evening";
//   console.log(message);
//   console.log(tata);
// }
// console.log(message);
// function Tata() {
//   var tata = "Tata";
//   console.log(tata);
// }
// greet();
// Tata();

// Uvar message = "Good Afternoon";

// function greet() {
//   message = "Good Evening";
//   console.log(message);
//   // console.log(tata);
// }

// function Tata() {
//   var tata = "Tata";
//   console.log(tata);
// }
// greet();
// Tata();

// BASIC EXAMPLE FOR UNDERSTANDING SCOPED VARIABLES
// var message = "Good Afternoon";

// function greet() {
//   message = "Good Evening";
//   console.log(message);
// }

// function Tata() {
//   var tata = "Tata";
//   console.log(tata);
// }
// greet();
// Tata();

// WHAT IS FUNCTION?
// 1. A FUNCTION IS A SCOPE THAT CAN COLLECT BLOCK OF CODE OR STATEMENTS WHICH BELONGS TO SAME SORT OF COMPUTATION
// 2. A IS A RE-USABLE TECHNIQUE TO RE-USE A PIECE OF CODE
// 3. A FUNCTION CAN GET ANY NUMBR OF INPUT AS FUNCTIONAL ARGUMENTS
// 4. A FUNCTION CAN RETURN A VALUE AFTER COMPUTATION

/// SYNTAX ////

// function functionName(// AN NUMBER OF INPUT) {
//     // COLLECTION OF STATEMENTS
// }

// FUNCTION DEFINATION
// function sum(a, b) {
//   var Sum = a + b;
//   return Sum; // RETURN WILL STOP FUNCTION EXECUTION RIGHT AWAY ANS STOP THE FUNCTION EXECUTION
//   console.log("IM HERE");
// }

// CALLING THE FUNCTION
// var sum1 = sum(1, 1); // CATCHJING THE RETURN VALUE FROM FUNCTIO INTO A VAR
// console.log(sum1);
// sum(2, 2);
// sum(3, 3);
// sum(4, 4);

// WHAT ARE TYPES OF FUNCTION:

//// 1. PURE FUNCTION /////
//    function functionName() {
//     return;
//    }

//// 2. IIFE - IMMIDIATELY INVOKING FUNCTION EXPRESSION ////
// 1. THIS FUNCTION IT WILL CALL ITSELF
// 2. THIS FUNCTION IMMIDIATELY EXECUTES WHEN YOU RUN JAVASCRIPT
// 3. THIS WILL NOT GET HOISTED

// SYNTAX
// (function () {

// })();

// EXAMPLE:
// function greet() {
//   console.log('Good afternoon');
// }
// greet();
// (function (message) {
//   var x = 10;
//   console.log(message);
// })('Hey all');

// UNCOVERED TOPICS:

//DAY 2:

// ITERATION OF JSON AND ARRAY
// XLMHTTP REQUEST

// FUNCTION TYPES
// 3. ANONYMOUS
// 4. FAT ARROW FUNCTION

// TOMORROW DAY 4
