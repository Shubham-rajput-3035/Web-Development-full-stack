console.log("for loop");
for (let i = 0; i <= 50; i++) {
    console.log(i);

}
console.log("backward  for loop");

for (let i = 50; i >= 0; i--) {
    console.log(i);

}
console.log("Even Numbers");

for (let i = 2; i <= 50; i = i + 2) {
    console.log(i);

}
console.log("Backward Even Numbers");

for (let i = 50; i >= 0; i = i - 2) {
    console.log(i);

}
console.log("Odd Numbers");

for (let i = 1; i <= 50; i = i + 2) {
    console.log(i);

}
console.log("Backward Odd Numbers");

for (let i = 51; i >= 0; i = i - 2) {
    console.log(i);

}
console.log(" Multiplication Table");

for (let i = 0; i <= 50; i = i + 5) {
    console.log(i);
}

console.log(" Multiplication Table of N");

let n = prompt("Write your number");
n = parseInt(n);
for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
}


// console.log("Infinite Numbers");
// for (let i = 2; ; i=i+2) {
//     console.log(i);

// }

console.log("Nested Loop");

for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop ${i}`);
    for (let j = 0; j <= 5; j++) {
        console.log(j);

    }

}

console.log("While Loop");
let i = 1;
while (i <= 50) {
    console.log(i);
    i++;
}

console.log("Backward While Loop");
let j = 50;
while (j >= 0) {
    console.log(j);
    j--;
}

console.log("Break Loop");
let k = 1;
while (k <= 50) {
    if (k == 23) {
        break;
    }
    console.log(k);
    k++;
}

// //Movies

const favMovie = "Avatar";
let guess = prompt("Guess my favorite movies");
while ((guess != favMovie) && (guess != "quit")); {
    // console.log("Wrong Guess");
    guess = prompt("Wrong Guess, Please try again");
}
if (guess == favMovie) {
    console.log("Congratulation");
} else {
    console.log("You quit");
}



// loops with array

let fruits = ["mango", "apple", "banana", "litchi", "Orange"];
fruits.push("Grapes");
for (let i = 0; i <= fruits.length; i++) {
    console.log(i, fruits[i]);
}

//Nested loops with Nested Arrays

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

for (let i = 0; i < heroes.length; i++) {
    // console.log(`List #${i}`);
    console.log(i, heroes[i], heroes[i].length);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }

}

let students = [["aman", 99], ["ankit", 90], ["rahul", 78], ["shivam", 89]];
for (let i = 0; i < students.length; i++) {
    console.log(`Info of students#${i}`);
    for (let j = 0; j < students.length; j++) {
        console.log(students[i][j]);

    }
}
//for of for loop

let fruit = ["gauva", "pear", "blackbarry", "bell", "grapes"];
for (collection of fruit) {
    console.log(collection);

}
for (char of "ShubhamRajput") {
    console.log(char);
}
//nested for of loop

for (list of heroes) {
    for (hero of list) {
        console.log(hero);
    }
}


let todo = [];
let requ = prompt("please enter your request");
while (true) {
    if (requ == "quit") {
        console.log("quitting app");
        break;
    }
    if (requ == "list") {
        console.log("------------------------------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("------------------------------------------");
    }
    else if (requ == "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if (requ == "delete") {
        let indx = prompt("Please enter the task index");
        todo.splice(indx, 1);
        console.log("task deleted");
    }
    else {
        console.log("Wrong request");
    }
    requ = prompt("please enter your request");
}


//Assignment Questions

//1

let ar = [1, 2, 3, 4, 5, 6, 2, 3];
nu = 2;
for (let i = 0; i < ar.length; i++) {
    if (ar[i] == nu) {
        ar.splice(i, 1)
    }
}
console.log(ar);

//2

let digits = 287152;
let count = 0;
let copy = digits;
while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}
console.log(count);

//3

let digit = 287152;
sum = 0;
let Copy = digit;
while (Copy > 0) {
    dgt = Copy % 10;
    sum = sum + dgt;
    Copy = Math.floor(Copy / 10);
}
console.log(sum);


//4

let numb = 5;
let factorial = 1;
for (let i = 1; i <= numb; i++) {
    factorial = factorial * i;
}
console.log(`Factorial of${numb} is ${factorial}`);

//5

let arrey = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;
for (let i = 0; i <= arrey.length; i++) {
    if (largest < arrey[i]) {
        largest = arrey[i];
    }

}
console.log(largest);
