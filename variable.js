// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
"use strict";

// 2.Variable, rw(read/write)
// let (added in ES6) (mutable(변경이 가능한) data type)
let globalName = "global name";
{
  let name = "Bluemin"; // block scope
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name); // it's not global scope, we can't see it in the console
console.log(globalName);

// var (don't ever use this!)
// var hoisting (어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말한다)
// has no block scope
{
  age = 15;
  var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. objcts.freeze())
// Mutable data types: all objcts by default are mutable in JS
// favor immutable(변경이 불가능한) data type always for a few reasons
//  - security
//  - thread safety(어플리케이션이 실행되면 프로세스 안에서 다양한 thread가 동시에 변수에 접근해서 값을 변경, 이런 상황에서 위험도를 줄일 수 있다)
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, bollean, null, undefined, symbol
// object, box container (single item들을 묶어서 한박스로, 하나의 단위로 관리할 수 있게 함)
// function, first-class function (함수도 다른 데이터 타입처럼 변수에 할당가능하고 함수의 인자로도 전달되고 함수의 리턴타입으로도 리턴할 수 있다)

const count = 17; // integer(정수)
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// nubmer - special numeric values: infinity, -infinity, NaN (valid 값인지 확인하고 사용하기)
const infinity = 1 / 0; // 양수를 0으로 나누면 무한대로 감
const negativeInfinity = -1 / 0; // 음수를 0으로 나누면 -무한대로 감
const nAn = "not a number" / 2; // 숫자가 아닌 문자를 숫자로 나누면 Not A Nubmer
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // 숫자 뒤에 n을 붙여 사용, over (-2**53) ~2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER; // JacaScript에서 안전한 최대 정수값

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan; //string과 변수 조합 가능
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (sting)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + " type: " + typeof helloBob);
// 결과값은 위와 같지만 백틱과 문자열로 자동변환해주는 ${}을 사용했을 때 더 간편하게 코딩할 수 있음

// boolean
// false: 0, null, undefined, NaN, ""
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // === let x = undifined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects (고유한 식별자가 필요할 때 씀)
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); //true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); // error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life objects, data structure
const Bluemin = { name: "Jammy", age: 1000 };
Bluemin.age = 29; //object 자체는 재선언할 수 없지만 object안에 있는 각각의 property는 바꿀 수 있다.

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0));error
//typescript가 필요한 이유..javascript위에 type이 올려진 언어
