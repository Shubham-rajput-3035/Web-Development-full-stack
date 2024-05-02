// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//   //   console.log("button was clicked");
//   alert("button was clicked");
// };

// function SayHello() {
//   alert("button was clicked");
// }
// btn.onclick = SayHello;

// let btns = document.querySelectorAll("button");
// for (Btn of btns) {
//   //   Btn.onclick = sayhello;
//   //   Btn.onclick = sayname;

//   //   Btn.onmouseenter = function () {
//   //     console.log("you entered a button");
//   //   };

//   //   console.dir(Btn);

//   //   Btn.addEventListener("click", sayhello);
//   //   Btn.addEventListener("click", sayname);

//   Btn.addEventListener("dblclick", function () {
//     console.log("you are double clicked me");
//   });
// }
// function sayhello() {
//   console.log("Shubham Singh Rajput");
//   alert("button was clicked");
// }

// function sayname() {
//   console.log("Shubham Rajput");
//   alert("Shubham Rajput");
// }

//Activites

// let butn = document.querySelector("button");
// butn.addEventListener("click", function () {
//   let h3 = document.querySelector("h3");
//   let randomClolor = getRandomcolor();
//   h3.innerText = randomClolor;

//   let dev = document.querySelector("div");
//   dev.style.backgroundColor = randomClolor;

//   console.log(" Random Color Update");
// });

// function getRandomcolor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let Color = `rgb(${red},${green},${blue})`;
//   return Color;
// }

// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//   console.log("para was clicked");
// });
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//   console.log("mouse inside div");
// });

// let bttn = document.querySelector("button");
// let para = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// bttn.addEventListener("click", function () {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// para.addEventListener("click", function () {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "green";
// });

// h1.addEventListener("click", function () {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "yellow";
// });

// h3.addEventListener("click", function () {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "pink";
// });

// function ChangeColor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "green";
// }

// h1.addEventListener("click", ChangeColor);
// h3.addEventListener("click", ChangeColor);
// para.addEventListener("click", ChangeColor);
// bttn.addEventListener("click", ChangeColor);

// bttn.addEventListener("click", function () {
//   console.log("button clicked");
// });

// bttn.addEventListener("click", function (event) {
//   console.log(event);
//   console.log("button clicked");
// });

// let bttns = document.querySelector("button");

// bttns.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log("button clicked");
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//   console.log("key=", event.key);
//   console.log("code=", event.code);
//   console.log("Key was pressed");
// });

// // inp.addEventListener("keyup", function () {
// //   console.log("Key was pressed");
// // });

// let inps = document.querySelector("input");

// inps.addEventListener("keydown", function (event) {
//   console.log("code=", event.code); // Arrow left, Arrow Right, Arrow up, Arrow down,
//   if (event.code == "ArrowUp") {
//     console.log("Character moves forward");
//   } else if (event.code == "ArrowDown") {
//     console.log("Character moves backward");
//   } else if (event.code == "ArrowLeft") {
//     console.log("Character moves Left");
//   } else if (event.code == "ArrowRight") {
//     console.log("Character moves Right");
//   }
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.dir(form);
// alert("Form Submitted");

//   let input = document.querySelector("input");

//  console.log(input);
//  console.dir(input);
//  console.log(input.value);

// let user = document.querySelector("#user");
// let pass = document.querySelector("#pass");

// console.log(user.value);
// console.log(pass.value);

// alert(`Hi ${user.value}, your passward is set to ${pass.value}`);

//   let user = this.elements[0];
//   let pass = this.elements[1];

//   console.log(user.value);
//   console.log(pass.value);

//   alert(`Hi ${user.value}, your passward is set to ${pass.value}`);
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function () {
//   console.log("Input Change");
//   console.log("final value=", this.value);
// });

// user.addEventListener("input", function () {
//   console.log("Input Change");
//   console.log("final value=", this.value);
// });

let text = document.querySelector("#text");
let para1 = document.querySelector("p");

text.addEventListener("input", function () {
  console.log(text.value);
  para1.innerText = text.value;
});
