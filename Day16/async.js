// console.log("I need sherbeth");
// console.log("I dont have it in refridgerator");
// console.log("ill go out and get sherbeth");
// setTimeout(() => {
//   console.log("I am drinking sherbeth");
//   console.log("Sherbeth saved me");
// }, 5000);
// console.log("I should have lunch");

// function isPrime(N, cb = (m) => {}) {
//   let is_prime = true;
//   if (N === 0 || N === 1) {
//     cb("NO");
//   } else {
//     for (let i = 2; i < N; i++) {
//       if (N % i == 0) {
//         is_prime = false;
//         break;
//       }
//     }
//     if (is_prime) {
//       cb("YES");
//     } else {
//       cb("NO");
//     }
//   }
// }

// function printMessage(message = "") {
//   console.log(message);
// }

// isPrime(10, printMessage);

// function addNum(a = 0, b = 0, cb = (message) => {}) {
//   let sum = 0;
//   if (a && b) {
//     sum = a + b;
//     if (sum > 10) cb("The sum is greater than 10");
//     else cb("The Sum is lesser than 10");
//     // condition ? '' : ''
//     // sum > 10
//     //   ? cb("The sum is greater than 10")
//     //   : cb("The Sum is lesser than 10");
//   }
// }

// addNum(7, 4, printMessage);

// CALL BACK HELL
// PYRAMID OF DOOM
// const print = (cb = () => {}) => {
//   cb();
// };
// function increment() {
//   count++;
// }
// print(increment);
// print(increment);
// print(increment);
// print(increment);
// console.log(count);
let count = 5;

const one = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
const two = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
const three = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};
const four = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count);
};
const five = (sum = 0, cb = () => {}) => {
  count = sum - 1;
  cb(count, cb);
};

five(count, () =>
  four(count, () => three(count, () => two(count, () => one(count))))
);
console.log(count);
