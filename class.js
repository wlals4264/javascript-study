"use stric";

// Object-orendted programming
// class : template
// object : instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar(문법상 편리함을 위해 만들어진) over prototype-based inheritance
// 클래스 없었을때는 클래스를 정의하지 않고 바로 오브젝트를 만들 수 있었고
// function을 이용해서 template을 만드는 방법이 있었다.

// 1. class declarations
class Person {
  // constructor(생성자)
  constructor(name, age) {
    // fields(속성들)
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
} //여기서 this는 object 자체를 가리킴

const bluemin = new Person("bluemin", 20); // 오브젝트 만들때는 new라는 키워드 사용
console.log(bluemin.name);
console.log(bluemin.age);
bluemin.speak();

// 2. Getter and setters (엘리쌤 선배님의 커피머신 비유 찰떡쿵떡)
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("steve", "job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon (at 2020...now...?) 그냥 추가되었다 알고만
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
  publicField = 2; // 외부에서 접근가능
  #privateField = 0; // class 내부에서만 접근 or 변경가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined

// 4. Static properties and methods
// 동일하게 반복되어 사용되어지는 method가 있을 때
// Too soon!
class Article {
  static publisher = "Bluemin Bluemin";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher);
// undefined 오브젝트마다 주어지는게 아니라 클래스자체에 스태틱, 스태틱method가 붙어있기 때문에 클래스자체를 호출
console.log(Article.publisher);
Article.printPublisher();

// 상속&다양성
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// extends라는 키워드를 사용해서 shape을 연장해서 반복없이 rectangle이라는 클래스를 만듦
// shape에 있는 모든것들이 rectangle에 포함되어, 즉 상속되어짐
// 수정도 간편해짐
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // super.method << 부모의 method도 호출
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  } //overwriting 필요한 함수만 재정의해서 사용

  toString() {
    return `Triangle. color: ${this.color}`;
  } //JS의 Object에 있는 함수를 overwriting 할 수 있음
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// (왼쪽 오브젝트가 오른쪽의 클래스를 이용해 만들어진 아이인지 아닌지 확인, return 값은 불리언)
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true!! JS에서 만든 모든 object, class들은 JS들의 Ovject를 상속받는 것
console.log(triangle.toString());

// JS MDN 레퍼런스 사이트 참고
