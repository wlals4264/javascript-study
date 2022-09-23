// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2); //type : string
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators(++,--)
let counter = 2;
const preIncrement = ++counter;
//  counter = counter + 1; 먼저 +1 증가시켜서 담고(업데이트 먼저)
//  preIncrement = counter; 그 다음 변수의 값을 할당해주기
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//  postIncrement = counter; 먼저 변수의 값을 할당해주고
//  counter = counter + 1; 그 다음 값이 +1로 업데이트 됨.
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement; ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators (= operators)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value(처음으로 true가 나오는 순간 멈춤)
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

// tip : 연산을 많이하는 함수를 제일 앞에 두지말고 심플한 value들을 앞에 두는 것이 효율적인 코드 작성법

// ! (not), 값을 반대로 바꿔줌
console.log(!value1);

//  7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// objects equality by reference
const bluemin1 = { name: "bluemin" };
const bluemin2 = { name: "bluemin" };
const bluemin3 = bluemin1;
console.log(bluemin1 == bluemin2);
console.log(bluemin1 === bluemin2);
console.log(bluemin1 === bluemin3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false (type strict equality를 사용했기 때문에!)
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Condifional operators: if
// if, else if, else
const name = "jammy";
if (name === "bluemin") {
  console.log("Welcome, Bluemin!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ? operator
// condition ? value1 : value2; // if를 좀 더 간단히 쓰는법, 너무 엮어서 쓰면 가독성 떨어짐, 간단할 떄만 쓰자
console.log(name === "bluemin" ? "Yes" : "no");

// // 10. Switch statement
// use for multiple if checks(if에서 else if가 너무 반복된다면 switch 사용을 고려)
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops : cpu에 좋지 않음, 피하는게 좋다
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
