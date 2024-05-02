console.log(window);
console.dir(document);

console.log("getElementById");

let id = document.getElementById("mainImg");
console.dir(id);
let ids = document.getElementById("abc,xyz");
console.dir(ids);

console.log("getElementByClassName");

let ImgClass = document.getElementsByClassName("oldImg");
console.dir(ImgClass);
for (let i = 0; i < ImgClass.length; i++) {
    console.dir(ImgClass[i].src);
}
let ImgClasses = document.getElementsByClassName("oldImages");
console.dir(ImgClasses);

console.log("getElementByTagName");

let Tag = document.getElementsByTagName("p");
console.dir(Tag);
let Tags = document.getElementsByTagName("para");
console.dir(Tags);

console.log("Query Selecors");

let para = document.querySelector('p');
console.dir(para);
let myId = document.querySelector('#mainImg');
console.dir(myId);
let myClass = document.querySelector('.oldImg');
console.dir(myClass);
let myClasses = document.querySelectorAll('.oldImg');
console.dir(myClasses);
let mypara = document.querySelectorAll('a');
console.dir(mypara);

console.log("Properties and Methods");

console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);

let img = document.querySelector("img");
console.dir(img);
console.log(img);
console.log(img.getAttribute("id"));
console.log(img.setAttribute('id', 'Spiderman'));

console.log("Manupulating Style");


console.dir(img.style);
let heading = document.querySelector("h1");
console.dir(heading);
console.dir(heading.style);
console.dir(heading.style.color = "blue");
console.dir(heading.style.backgroundColor = "yellow");
let links = document.querySelectorAll(".box a");
console.dir(links);
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "green";
// }
for (link of links) {
    link.style.color = "green";
}

para.classList.add("ghochu");
console.log(para.classList);
para.classList.remove("ghochu");
console.log(para.classList);
console.log(para.classList.contains("ghochu"));
console.log(para.classList);
console.log(para.classList.contains("Para"));
console.log(para.classList);
console.log(para.classList.toggle("ghochu"));
console.log(para.classList);
console.log(para.classList.toggle("ghochu"));
console.log(para.classList);


console.log("Nevigation");

let ul = document.querySelector("ul");
console.log(ul);
console.log(ul.parentElement);
console.log(ul.children);
console.log(ul.children[1]);
console.log(ul.children[2].previousElementSibling);
console.log(ul.children[1].nextElementSibling);


console.log("Adding Element");

let AddingElement = document.createElement('p');
console.log(AddingElement);
console.dir(AddingElement);
console.dir(AddingElement.innerText = " Solar System The Solar System consists of the Sun Moon and Planets.It also consists of comets, meteoroids and asteroids.The Sun is the largest member of the Solar System.In order of distance from the Sun, the planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto; the dwarf planet.The Sun is at the centre of the Solar System and the planets, asteroids, comets and meteoroids revolve around it.");
let body = document.querySelector("body");
console.dir(body.appendChild(AddingElement));
// console.dir(body.append(AddingElement));
// console.dir(body.prepend(AddingElement));
console.dir(body.insertAdjacentElement('afterbegin', AddingElement));
console.dir(body.insertAdjacentElement('afterend', AddingElement));
console.dir(body.insertAdjacentElement('beforebegin', AddingElement));
console.dir(body.insertAdjacentElement('beforeend', AddingElement));

console.log("Removing Elements");

console.dir(body.removeChild(AddingElement));
console.dir(body.remove(AddingElement));




//Practice Question
// console.log("Practice Question");
// //1
// let para1 = document.createElement("p");
// para1.innerText = "Hey I'm red";
// document.querySelector("body").append(para1);
// para1.classList.add("red");

// //2

// let h3 = document.createElement("h3");
// h3.innerText = "I'm blue h3";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");

// //3

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm in a div";
// para2.innerText = "ME TOO!";

// div.append(h1);
// div.append(para2);
// div.classList.add("boxes");

// document.querySelector("body").append(div);



// console.log("Assignment Question");


// //1
// let button = document.createElement("button");
// let input = document.createElement("input");
// button.innerText = "Click Me";
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);

// //2

// button.setAttribute("id", "btn");
// input.setAttribute("placeholder", "username");

// //3

// let btn = document.querySelector("#btn");
// btn.classList.add("btnstyle");


// //4

// let H1 = document.createElement("h1");
// H1.innerText = "DOM Practice";
// document.querySelector("body").append(H1);
// H1.classList.add("und");

// //5


// let para3 = document.createElement("p");
// para3.innerText = "Apna College Delta Practice";
// document.querySelector("body").append(para3);
// para3.classList.add("bold");
