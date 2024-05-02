const stu = {
  name: "Shubham Singh Rajput",
  age: 18,
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    console.log(this);
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks=${avg}`);
  },
};
stu.getAvg();

function getavg() {
  console.log(this);
}
getavg();

console.log("try and catch");
try {
  console.log(a);
} catch {
  console.log("variable a doesn't identify");
}

console.log("Arrow Functions");
const sum = (a, b) => {
  console.log(a + b);
};
sum(76, 89);

const cube = (n) => {
  let ret = n * n * n;
  console.log(ret);
  return ret;
};
cube(5);

const pow = (a, b) => {
  let p = a ** b;
  console.log(p);
  return p;
};
pow(2, 5);

const hello = () => {
  console.log("Hello World");
};
hello();

const mul = (a, b) => {
  let c = a * b;
  // console.log(c);
  return c;
};
console.log(mul(3, 7));

console.log("SetTimeOut");

// console.log("Hii there");
// setTimeout(() => {
//     console.log("Shubham Singh");
// }, 4000);
// console.log("Welcome to");

// let id = setInterval(() => {
//     console.log("Shubham Singh");
// }, 2000);

// console.log(id);
// // clearInterval(id);

// let id1 = setInterval(() => {
//     console.log("Shubham Singh Rajput");
// }, 3000);
// console.log(id1);
// // clearInterval(id1);

const student = {
  name: "Shubham Rajput",
  marks: 98,
  prop: this, //Global scope
  geteName: function () {
    console.log(this);
    return this.name;
  },
  geteMarks: () => {
    console.log(this); //parent's scope->window
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); //student
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); //window
    }, 2000);
  },
};
student.geteName();
student.geteMarks();
student.getInfo1();
student.getInfo2();

//Practice Question

//1

let square = function (n) {
  let squ = n * n;
  console.log(squ);
  return squ;
};
square(5);

//Pratice Questions

console.log("Pratice Questions");

//1

let squNum = (n) => {
  return n * n;
};
console.log(squNum(4));

//2

let prints = setInterval(() => {
  console.log("Hello World");
}, 2000);

let print = setInterval(() => {
  clearInterval(prints);
  console.log("Run Succesfully");
}, 10000);


console.log("Assignment Questions");


