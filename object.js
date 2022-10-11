// Objcects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key(변수) : value(값) }; ⭐️ 오브젝트는 키와 밸류의 집합체이다 ⭐️

// 1. Literals and properties
// const name = "bluemin";
// const age = 20;
// print(name, age);
// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }
// 관리, 로지컬하게 생각하기 어렵기 떄문에 오브젝트 생성

const obj1 = {}; // "object literal" syntax, 오브젝트 만드는 첫번째 방법
const obj2 = new Object(); //class이용, "object constructor" syntax, 오브젝트 만드는 두번째 방법
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const bluemin = { name: "bluemin", age: 20 }; //클래스없이 오브젝트 생성가능
print(bluemin);

bluemin.hasJob = true;
console.log(bluemin.hasJob);
// 동적인 코딩 가능한 JS 특징.. 갑자기 properties 추가 가능 ==> 유지보수 힘듦

delete bluemin.hasJob;
console.log(bluemin.hasJob);
// 삭제도 가능...

// 2. Computed properties
// key(변수,property) should be always string type!
console.log(bluemin.name); // . 을 사용하는것이 일반적인 코딩방법
console.log(bluemin["name"]); // [string]형태로 불러올수도 있음. 아직 정확히 어떤 값인지 모르지만 value를 받아와야할 때(runtime으로 결정될 때)
bluemin["hasJob"] = true; //bluemin.hasJob = true; 과 같음
console.log(bluemin.hasJob);

//example
function printValue(obj, key) {
  //console.log(obj.key); undefined, obj에 key라는 property가 들어있지 않기 때문에 computed property를 써야함.
  console.log(obj[key]);
}
printValue(bluemin, "name");
printValue(bluemin, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("bluemin", 30);
console.log(person4);

//const person4 = makePerson("bluemin", 30); 54
//console.log(person4);
//function makePerson(name, age) {
// return {
//   name: name, === name (key와 value의 값이 같다면 생략)
//   age: age, ===age
// };

// 4. Constructor Function
// (오브젝트를 생성하는 함수는) 대분자로 시작하도록 함수이름을 만듦
function Person(name, age) {
  // this = {};
  this.name = name; //return대신
  this.age = age;
  // return this;
} // object 생성을 함수를 이용해서 간편하게 > template같은 아이, class없을때 사용했던 방법

// 5. in operator: property existence check (key in obj)
// 해당하는 key가 obj안에 있는지 확인하는 것
console.log("name" in bluemin); //true
console.log("random" in bluemin); //false
console.log(bluemin.random); //undefined

// 6. for..in vs for..of
// for (key in obj)
// console.clear(); 콘솔 지우기
for (key in bluemin) {
  console.log(key);
}
// {}블럭을 돌때마다 bluemin이라는 오브젝트 안에 있는 key가 key라는 지역변수에 할당되어지게 됨.
// 결과적으로 콘솔에 bluemin안에 있는모든 키가 출력됨.
// 모든키를 받아와서 쓰고 싶을 때 for in 사용

// for (value of iterable)
// 오브젝트가 아닌 순차적으로 배열되어 있는 아이들에게 사용
const array = [1, 2, 4, 5];
// for loop활용; bad way
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for (value of array) {
  console.log(value);
}
// 마찬가지로 {}블럭을 돌때마다 array에 있는 모든 value들이 value에 할당되면서
// 순차적으로 출력이 가능해짐

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "bluemin", age: "19" };
const user2 = user;
// user라는 변수의 reference에 bluemin과 19가 담긴다.
// user2의 변수에도 동일한 reference가 담기게 된다.
user2.name = "coder";
console.log(user); //user의 name이라는 value도 coder로 바뀜

// old way 복제하는 방법 예전에는..
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

// assign 활용
const user4 = Object.assign({}, user); //command 함수 이름 누르면 정의가 나옴
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue 뒤에 나오는 값이 앞의 값을 덮어 씌우기 때문!
console.log(mixed.size); // big
