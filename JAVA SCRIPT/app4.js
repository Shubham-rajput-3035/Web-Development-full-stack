function hello() {
    console.log("Hello");
}
hello();

function series() {
    for (let i = 0; i <= 100; i++) {
        console.log(i);

    }
}
series();


function isadult() {
    let age = 23;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
}
isadult();

function printsname() {
    console.log("Shubham Singh Rajput");
    console.log("National Bussiness College");
}
printsname();

//Practice Question

console.log("Poem");
function poem() {
    console.log(" Nature's first green is gold,");
    console.log("Her hardest hue to hold. ");
    console.log(" Her early leaf's a flower,");
    console.log("But only so an hour. ");
}
poem();

//Practice Question

function rolldice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
rolldice();

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Shubham", 18);

function avgNum(a, b, c) {
    avg = (a + b + c) / 3;
    console.log(avg);

}
avgNum(56, 78, 67);

//Practice Question

function table(n) {
    for (let i = 0; i <= n * 10; i = i + n) {
        console.log(i);

    }

}
table(9);

function sm(a, b) {
    return a + b;
}
let s = sm(56, 89);
console.log(s);


//Practice Question

function sumreturn(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
        console.log(sum);
    }
    return (sum);
}
sumreturn(10);


//Practice Question

let str = ["Shubham", "Singh", "Rajput", "sasaram", "bihar"];

function concat(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result = result + str[i];
    }
    console.log(result);
    return result;
}
concat(str);


console.log("Scope");
let sum = 54; //Global Scope

function calsum(a, b) {
    let sum = a + b; // Function Scope 
    console.log(sum);
}
calsum(78, 89);


for (let i = 0; i <= 10; i++) {
    console.log(i); //Block Scope

}

function OuterFunc() {
    let x = 59;
    let y = 86;
    function InnerFunc() { //Function Scope
        console.log(x + y);
    }
    InnerFunc();
}
OuterFunc();

//Practice Question

let greet = "hello"; //Global Scope

function changeGreet() {
    let greet = "namaste"; // Function Scope
    console.log(greet);
    function InnerGreet() {
        console.log(greet);//Lexical Scope
    }
    // InnerGreet();
}
console.log(greet);
changeGreet();


console.log("Function Expression");

const sume = function (a, b) {
    let s = a + b;
    console.log(s);
    return s;
}
sume(45, 67);





function multiplegreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func();

    }
}
let gret = function () {
    console.log("hello");
}
// multiplegreet(gret, 2);
multiplegreet(function () { console.log("namaste") }, 100);

function OddEvenTest(request) {
    if (request == "Odd") {
        // return function (n)
        let Odd = function (n) {
            console.log(!(n % 2 == 0));
        }
        return Odd;
    }
    else if (request == "Even") {
        // return function (n)
        let Even = function (n) {
            console.log(n % 2 == 0);
        }
        return Even;
    }
    else {
        console.log("Wrong Request");
    }
}

let request = "Odd";
// let request = "Even";
// OddEvenTest(67);

let oddnum = function (n) {
    console.log(!(n % 2 == 0));
}
let evennum = function (n) {
    console.log(n % 2 == 0);
}
oddnum(67);
evennum(87);

console.log("Methods");

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};
console.log(calculator.add(78, 45));
console.log(calculator.sub(78, 45));
console.log(calculator.mul(78, 45));

const calculators = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
};

console.log(calculators.add(7, 5));
console.log(calculators.sub(8, 5));



//Assignment Question
//1

let arr = [8, 12, 15, 20, 25, 30, 35, 40, 45, 50];
let num = 15;
console.log("Elements larger than a number num");
function getElement(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }

    }
}
getElement(arr, num)


//2
console.log("Function to get string with all unique elements");

let stre = "ShubhamshubhamSinghRajput";
function getUnique(stre) {
    let ans = "";
    for (let i = 0; i < stre.length; i++) {
        let currchar = stre[i];
        if (ans.indexOf(currchar) == -1) {
            ans = ans + currchar;
        }

    }
    console.log(ans);
    return ans;
}
getUnique(stre);

//3

console.log("prints longer  country name");
let country = ["Australlia", "Germany", "united state of america"];
function longestName(country) {
    let ansIndex = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIndex].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansLen = i;
        }

    }
    console.log(country[2]);
    return country[ansIndex];
}
longestName(country);


//4
console.log("Count vowels in string");

let st = "Shubham Singh Rajput";
function CountVowels(st) {
    let count = 0;
    for (let i = 0; i < st.length; i++) {
        if (st.charAt(i) == "a" ||
            st.charAt(i) == "e" ||
            st.charAt(i) == "i" ||
            st.charAt(i) == "o" ||
            st.charAt(i) == "u") {
            count++;
        }

    }
    console.log(count);
    return count;
}
CountVowels(st);


//5

console.log("Random number");
// let start = 100;
// let end = 200;
function generaterandom(start, end) {
    let diff = end - start;
    let Random = Math.floor(Math.random() * diff) + start;
    console.log(Random);
    return Random;
}
generaterandom(1, 50);