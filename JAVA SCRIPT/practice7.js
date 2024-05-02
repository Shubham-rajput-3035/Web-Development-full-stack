console.log("Practice Question");
//1
let para1 = document.createElement("p");
para1.innerText = "Hey I'm red";
document.querySelector("body").append(para1);
para1.classList.add("red");

//2

let h3 = document.createElement("h3");
h3.innerText = "I'm blue h3";
document.querySelector("body").append(h3);
h3.classList.add("blue");

//3

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("boxes");

document.querySelector("body").append(div);


console.log("Assignment Question");






//1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click Me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

//2

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//3

let btn = document.querySelector("#btn");
btn.classList.add("btnstyle");


//4

let H1 = document.createElement("h1");
H1.innerText = "DOM Practice";
document.querySelector("body").append(H1);
H1.classList.add("und");

//5


let para3 = document.createElement("p");
para3.innerText = "Apna College Delta Practice";
document.querySelector("body").append(para3);
para3.classList.add("bold");
