// 자료구조 (어떤 방식, 어떤 형식으로 데이터를 담느냐에 따라 다양한 종류가 있다)
// object와 자료구조의 차이
// object : 토끼
// 비슷한 형태의 object들을 모아둔 것이 자료구조
// 보통 다른 언어들은 담긴 object들은 동일한 type을 담을 수가 있다
// JavaScript === dynamically typed language 그래서 다양한 타입 담을 순 있으나 비추
// 자료구조와 알고리즘 중요!
// 자료구조 array set map list
// 각각 어떤 자료구조, 알고리즘을 쓰면 좋을지 효율성에 대한 것이 알고리즘!
// 꼭 공부하자. 자료구조&알고리즘

"use stric";

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]; // 가장 많이 쓰는 방법

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 제일 마지막 인덱스 받을 수 있다.

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
//forEach API에 대한 정의를 보면서 공부하는 습관 기르자 command + forEach 클릭!
fruits.forEach((fruit) => console.log(fruit)); // anonymous function arrow 함수 사용

// 4. Addtion , deletion, copy
// push: add an item to the end
fruits.push("🍉", "🍋");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item fo the beginning
fruits.unshift("🍉", "🫐");
console.log(fruits);

// shift: remove an item fo the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// why? 배열의 뒤에 데이터를 넣고 빼는 것은 기존 데이터에 영향을 미치지 않지만
// 앞에서부터 넣거나 빼는 것은 원래 있던 데이터를 하나씩 뒤로 옮기고
// 맨 앞을 비운 다음 거기에 새로운 데이터를 넣어야 하기 때문에
// 배열의 길이가 길면 길수록 shift(당겨오다)를 많이 하게 되기 때문에 오래걸림
// pop, push를 더 활용하자
// 알고리즘 공부를 더 하면 이해가 쉬워진다고...(잊지말자 꼭)

// splice: remove an item by index position (지정된 포지션에서 아이템을 지우는 법)
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
fruits.splice(1, 1); // 갯수를 지정하지 않으면 시작점부터 끝까지 다 지워짐
console.log(fruits);
fruits.splice(1, 1, "🍏", "🍉");
console.log(fruits); //  ['🍎', '🍏', '🍉', '🍑', '🍋']

// combine two arrays
const fruits2 = ["🍐", "🥝"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
// indexOf: find the index
console.log(fruits.indexOf("🍎"));
console.log(fruits.indexOf("🍉"));
console.log(fruits.indexOf("🍊")); // -1; 배열안에 없는 값은 -1으로 출력

// includes
console.log(fruits.includes("🍉"));
console.log(fruits.includes("🍊"));

// lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎"));

// Quiz : APIs 읽어보고 갖고 놀아보기!!
