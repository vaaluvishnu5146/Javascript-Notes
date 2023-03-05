// BASIC LOOPING
let numArray = [1, 2, 3, "Four", 5, false, [1, 2, 5], 6];
let newArray = [];
// ITERATE THROUGH ALL THE ELEMENTS IN THE ARRAY
// FOR LOOP
// for (let i = 0; i < numArray.length; i++) {
//   newArray.push(numArray[i] * 2);
// }
// console.log(newArray);

// FOR EACH
// const val = numArray.forEach((element) => {
//   return newArray.push(element * 2);
// });
// console.log(val);

// MAP IS A MEMBER FUNCTION AVAILABLE INSIDE THE PROTOTYPAL CHAIN
// THIS WILL TRAVERSE THROUGH AL THE ELEMENTS INSIDE THE ARRAY
// THISN WIL HELP US TO RETURN BRAND NEW MANUPULATED ARRAY
// const mapResult = numArray.map((element, index) => element * 2); // [1 * 2, 2 * 2, 3 * 2, 4 * 2, 5 * 2, 6 * 2]

// EXAMPLE 1:
// const arr1 = numArray.map((element) => element);
// console.log(arr1);

// // EXAMPLE 2:
// const arr2 = numArray.map((element) => {
//   if (typeof element == "number") {
//     return element * 2;
//   } else {
//     return element;
//   }
// });
// console.log(arr2);

// FILTER
// FILTER WILL HELP US TO FILTER THE ELEMENTS IN THE ARRAY

// EXAMPLE 1: FILTER OUT / REMOVE ALL THE NON-NUMBER ELEMENT
// [1, 2, 3, 5, 6]
// const num = numArray.filter((element) => typeof element == "number");
// console.log(num);
// const nonNumArray = numArray.filter((element) => typeof element != "number");
// console.log(nonNumArray);
// console.log(numArray);

let nums = [1, 2, 5, 10];
let sum = 0;

// REDUCE
// FINDING SUM OF ARRAY USING FOR-LOOP
// for (let i = 0; i <= nums.length - 1; i++) {
//   sum += nums[i];
// }
// console.log(sum);

// FINDING SUM OF ARRAY USING REDUCE
// const total = nums.reduce((previousValue, currentValue) => {
//   console.log(previousValue, currentValue);
//   return previousValue * currentValue;
// });
// console.log(total);

const food = [
  {
    name: "Shawarma",
    price: 120,
    quantity: 2,
  },
  {
    name: "Mojito",
    price: 90,
    quantity: 1,
  },
  {
    name: "Grilled Chicken",
    price: 340,
    quantity: 1,
  },
  {
    name: "Burger",
    price: 120,
    quantity: 2,
  },
  {
    name: "Pizza",
    price: 190,
    quantity: 1,
  },
  {
    name: "Puddings",
    price: 60,
    quantity: 2,
  },
  // 2more
];

// const total = food.reduce((previousValue, currentValue) => {
//   if (typeof previousValue == "object") {
//     return (
//       previousValue.price * previousValue.quantity +
//       currentValue.price * currentValue.quantity
//     );
//   }
//   return previousValue + currentValue.price * currentValue.quantity;
// });
// console.log(total);

// REAL WORLD EXAMPLES FOR FILTER
// const filteredFood = food.filter((element) => element.quantity == 2);
// console.log(filteredFood);

// REAL WORLS EXAMPLE USING FIND
// const foundedValue = food.find((element) => element.quantity != 2);
// console.log(foundedValue);

// REAL WORLS EXAMPLE USING FIND
const few = food.some((element) => element.quantity == 1); //true
console.log(few);
