// const student1 = {
//   name: "Shubham Singh",
//   age: 19,
//   marks: 99,
//   getMarks: function () {
//     return this.marks;
//   },
// };

// const student2 = {
//   name: "Shivam Singh",
//   age: 19,
//   marks: 99,
// };

// let arr=[1,2,3,4,5];
// arr.sayHello=()=>{
//     console.log("Hello,  I am arr");
// };

// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, My Name is ${this.name}`);
//     },
//   };
//   return person;
// }
// let p1 = personMaker("shubham", 78);
// let p2 = personMaker("ankit", 88);

// Constructors-- does not return any things and start with capital

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.talk = function () {
//   console.log(`Hi, My Name is ${this.name}`);
// };

class Person {
  constructor(name, age) {
    console.log("Person class Constructor");
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, My Name is ${this.name}`);
  }
}

// let p1 = new Person("shubham", 78);
// let p2 = new Person("ankit", 88);

class student extends Person {
  constructor(name, age, marks) {
    console.log("Student class Constructor");
    super(name, age); // Parents class constructor is being called
    // this.name = name;
    // this.age = age;
    this.marks = marks;
  }
  // talk() {
  //   console.log(`Hi, i am ${this.name}`);
  // }
}
// let stu1 = new student("ankit", 88, 90);

class teacher extends Person {
  constructor(name, age, subject) {
    console.log("Teacher class Constructor");
    super(name, age); // Parents class constructor is being called
    // this.name = name;
    // this.age = age;
    this.subject = subject;
  }
  // talk() {
  //   console.log(`Hi, i am ${this.name}`);
  // }
}
// let tea1 = new teacher("Nidhi", 88, "Math");
// -------------------------------------------------------------------

class mammal {
  //Base Class
  constructor(name) {
    this.name = name;
    this.type = "warm-blooded";
  }
  eat() {
    console.log("I am eating");
  }
}
class dog extends mammal {
  //Child Classs
  constructor(name) {
    super(name);
  }
  bark() {
    console.log("wooff....");
  }
}
class cat extends mammal {
  //Child Class
  constructor(name) {
    super(name);
  }
  meow() {
    console.log("Meow....");
  }            
}
