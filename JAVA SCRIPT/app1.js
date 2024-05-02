// let str="Shubham Singh Rajput";
let str = "    Shubham Singh Rajput    ";
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// console.log(str.method(str));
let para = "ILovecoading";
console.log(para.indexOf("Love"));
console.log(para.indexOf("J"));
console.log(para.indexOf("O"));
console.log(para.toUpperCase().trim());
console.log(para.slice(5));
console.log(para.slice(1, 5));
console.log(para.slice(-3));
console.log(para.replace("Love", "Do"));
console.log(para.replace("o", "x"));
console.log(para.repeat(5));

//Arrays

// let cars=["Bmw", "Fortuner", "Maruti","Toyota","Thar","Rang-Rover","Swift","Brezza"];
// console.log(cars);
let num = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(num);
let newarr = [];
console.log(newarr);
let info = ["Shubham", "18", "89.9"];
console.log(info);
let fruits = ["Mango", "Apple", "Litchi"];
console.log(fruits);
// fruits[0] = "banana";
// console.log(fruits);
let color = ["Red", "Blue", "Yellow"];
console.log(color);
// let newcolor = color.push("Green");
// console.log(newcolor);

let primary = ["Red", "Blue", "Yellow"];
console.log(primary.push("Black"));
console.log(primary.pop("Black"));
console.log(primary.shift("Black"));
console.log(primary.unshift("Black"));
console.log(primary.shift("Black"));
console.log(primary.indexOf("Black"));
console.log(primary.indexOf("Blue"));
console.log(primary.includes("Black"));
console.log(primary.includes("Blue"));
let secondary = ["Orange", "Purpal", "Skyblue"];
console.log(primary.concat[secondary]);
console.log(primary.reverse());
console.log(secondary.reverse());
let colos = ["Orange", "Purpal", "Skyblue", "red", "yellow", "blue", "pink", "White"];
console.log(colos.slice());
console.log(colos.slice(2));
console.log(colos.slice(2, 3));
console.log(colos.slice(-2));
console.log(colos.sort());


//nested Arrays
let numbers = [[2, 3, 4], [1, 3, 5], [5, 6, 7], [7, 9, 8], [8, 0, 5]];



//Prectice Question 1
let msg = "help";
console.log(msg.trim().toUpperCase());

let name = "ApnaCollege";
console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));
console.log(name.slice(4));

let names = name.slice(4);
console.log(names.replace("l", "t").replace("l", "t"));


//Prectice Question 2

let months = ["January", "July", "March", "August"];
console.log(months);
console.log(months.shift());
console.log(months.shift());
console.log(months.unshift("July"));
console.log(months.unshift("June"));
console.log(months);


//Prectice Question 3

// console.log(months.splice(2));
// console.log(months.unshift("July"));
// console.log(months.unshift("June"));

let lang = ["C", "C++", "HTML", "JavaScript", "Python", "Java", "C#", "SQL"];
console.log(lang);
// console.log(lang.reverse());
let language = lang.reverse();
console.log(language);
console.log(language.length);
console.log(language.length["JavaScript"]);



//Prectice Question 4

let Game = [['X', null, null], [null, 'X', null], [null, null, 'X']];
console.log(Game);
let game = [['X', '0', '0'], ['0', 'X', '0'], ['0', '0', 'X']];
console.log(game);


//Assignment Questions

let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);
console.log(arr.slice(arr.length - n));

// let string="Shubham Rajput";
let string = prompt("Please enter a string");
if (string.length == 0) {
    console.log("String is blanks");
}
else {
    console.log("String is not blanks");
}


let test = "Shubham Rajput";
let idx = 5;
if (test[idx] == test[idx].toLowerCase()) {
    console.log("Character is lowercase");
} else {
    console.log("Character is not lowercase");
}


let strr = prompt("Please enter a string");
console.log(`Original String=${strr}`);
console.log(`String without space=${strr.trim()}`);


let sttr = ["Hello", 'a', 23, 64, 99, -6];
let item = 64;
if (sttr.indexOf(item) != -1) {
    console.log("Element exist in array");
} else {
    console.log("Element does't exist in array");
}






