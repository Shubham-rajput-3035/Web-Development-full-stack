

console.log("shubham Singh Rajput");
let num = 56;
console.log(num ** 2);
console.log("Smart", "Boy", 3035);
let a = 78;
let b = 45;
Pay = (`your pay ${a + b} rupees`);
// pay = ("price is", a + b, "rupees");
console.log(Pay);
// console.log(`your pay ${a+b} rupees`);
//Arithmetic operator
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
//unary operator
console.log(a++);
console.log(++a);
console.log(b--);
console.log(--b);
//Assignment operator
console.log(a = b);
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);
//Comparision operator
console.log(a < b);
console.log(a <= b);
console.log(a > b);
console.log(a >= b);
console.log(a == b);
console.log(a != b);

console.log('a' > 'A');
console.log('*' < '&');


//if Statement

let marks = 68;
if (marks >= 80) {
    console.log("Pass");
}
if (marks >= 55) {
    console.log("Good");
}
//Else Statement
let mark = 28;
if (mark >= 60) {
    console.log("Pass");
}
else {
    console.log("Fail");

}
//If Else Statement
let eng = 78;
let sci = 89;
let maths = 67;
let comp = 86;
let avg = (eng + sci + maths + comp) / 4;
if (avg >= 75) {
    console.log("Pass");
}
else if (avg >= 50) {
    console.log("Good");
}
else {
    console.log("Fail");
}
//nested if statement


// let P, Q, R;

// if (P > Q)

//     if (P > R)
//         console.log(P);
//     else
//         console.log(Q);
// else if (Q > R)
//     console.log(Q);
// else
//     console.log(R);
// return 0;


//Switch Statement
let month = 5;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
        break;
}
let fristname = prompt("Enter your frist name");
let lastname = prompt("Enter your last name");
let fullname = console.log(fristname + lastname);


// let fristname = prompt("Enter your frist name");
// let lastname = prompt("Enter your last name");
// let msg = "Welcome" + " " + fristname + " " + lastname + " ";
// alert(msg);

// //Logical Operators
// //And Operators
// let(9 > 5) && (5 < 9);
// //or operator
// let(9 > 5) || (5 < 9);
// //Not Operator
// let(!false);

//preactice question 1

let color = "red";
//Trafic Light system
if (color === "red") {
    console.log("Stop! light color is red");
}
if (color === "Yellow") {
    console.log("Go Slow, light color is yellow");
}
if (color === "green") {
    console.log("Go Safely light color is green");
}

//preactice question 2

let size = "XL";
if (size == "XL") {
    console.log(`Price is Rs 250`);
}
else if (size == "L") {
    console.log(`Price is Rs 200`);
}
else if (size == "M") {
    console.log(`Price is Rs 100`);
}
else {
    console.log(`Price is Rs 50`);
}

//preactice question 3

let str = "apple";
if ((str[0] === "a") && (str.length > 3)) {
    console.log("Good String");
}
else {
    console.log("Not Good String");
}

//preactice question 4

let numb = 12;
if ((numb % 3 === 0) && (num + 1 == 15) || (numb - 1 == 11)) {
    console.log("Safe");
}
else {
    console.log("Unsafe");
}

//preactice question 5

let day = 5;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Satuarday");
        break;
    default:
        console.log("You entered a wrong number");
}

//old preactice question 


let myself = "Shubham Singh Rajput";
console.log(myself.length);
console.log(myself[0]);
console.log(myself[19]);
console.log("apnacollege" + 123);
console.log(myself[7]);

//Assignment Questions
//1
let n = 30;
if (n % 10 == 0) {
    console.log("Good");
} else {
    console.log("Bad");
}

//2

let usersname = prompt("Enter your  usersname");
let age = prompt("Enter your age");
alert(`${usersname} is ${age} year old.`);

//3

let quarter = 3;
switch (quarter) {
    case 1:
        console.log("January February March");
        break;
    case 2:
        console.log("April May June");
        break;
    case 3:
        console.log("july,August September");
        break;
    case 4:
        console.log("Octomber,November,December");
        break;
    default:
        console.log("It is not a a Quarter");

}
//4
let stre = "app";
if ((stre[0] == 'A') || (stre[0] == 'a') && (stre.length > 5)) {
    console.log("Golden String");
} else {
    console.log("Not golden string");
}


//5

let r = 56;
let s = 78;
let t = 88;
if ((r > s)) {
    if (r > t) {
        console.log(r);
    }
    else {
        console.log(t);
    }
} else {
    if (s > t) {
        console.log(s);
    }
    else {
        console.log(t);
    }
}

//6

let n1 = 32;
let n2 = 47852;
if ((n1 % 10) == (n2 % 10 == 10)) {
    console.log("number have the same last digit which is", n1 % 10);
} else {
    console.log("number don't have the same last digit");
}


//THE END: