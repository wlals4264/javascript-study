"use strict";
// function = subprogram 절차적언어일수록 함수의 역할이 중요해짐
// 함수에는 input output이 중요하고 이름이 굉장히 중요(어떤일을 하는지 알 수 있도록)

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint 소문자+새로운단어시작은대문자
// function is object in JS

function printHello() {
  console.log("hello");
}
printHello();
// 계속 hello만 출력 쓸모없다
function log(message) {
  console.log(message);
}
log("hello!");
// 함수자체가 어떤 타입의 인자가 필요한지 명확히 알 수 없음 -> 나중에 타입스크립트를 배워야하는 이유

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const bluemin = { name: "Jammy" };
changeName(bluemin);
console.log(bluemin);

// 3. Default parameters (added in ES6)
// function showMessage(message, from) {
//   if (from === undefined) {
//     from = "unknown";
//   }
//   console.log(`${message} by ${from}`);
// }
// showMessage("Hi!");

function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
// 배열 인자
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // ... ->배열형태로 전달됨
  for (const arg of args) {
    console.log(arg);
  }
  // for of 문법 활용 가능
  args.forEach((arg) => console.log(arg));
  //forEach API 활용
}
printAll("dream", "coding", "bluemin");

// 5. Local scope
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); //error : 안에서는 밖에 보이지만 밖에서는 안을 볼 수 없다
  // return undefined;(리던타입이 없는 함수들은 언디파인드가 생략되어있음)
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad example
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}
// block 안에서 로직을 작성하면 가독성이 떨어짐

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  } //조건이 맞지 않을때는 빨리 리턴해서 함수를 종료하고 조건이 맞을때만 로직을 실행할 수 있도록 작성
  // long upgrade logic...
}

//First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymus function
  console.log("print");
};
print(); // 변수에 함수를 할당해서 변수를 활용하여 함수실행
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
// function expression은 할당된 다음 호출이 가능한 반면,
// function declaration(함수를 정의하는 것)은 hoisting이 됨.
// 즉, 함수가 선언되기 이전에 호출해도 실행 가능함(JS가 선언된 것을 맨 위로 올려주기 때문)

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  //printYes, printNo는 콜백함수, 즉 함수를 전달해서 상황에 맞으면 원하는 함수를 부르는 것
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
//anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log("simplePrint");
// };

const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more // 해야할 일이 많으면 block 사용가능
  return a * b; // block을 사용하면 return해줘야함
};

// IIFE: Immediately Invoked Function Expression 함수 선언을 () 묶고 () 호출해주면 바로 실행가능
(function hellp() {
  console.log("IIFE");
})();

// Quiz
// function calculate(cammand, a, b)
// command: add, subtract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "subtract":
      return a + b;
    case "divide":
      return a + b;
    case "multiply":
      return a + b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
console.log(calculate("add", 4, 5));
