console.log("Delhi");
let delhi = {
    latitude: "28.7041 o N",
    longitude: "77.1025 o E"
};
console.log(delhi);
console.log("student");
const stu = {
    name: "Shubham Singh",
    age: 21,
    marks: 94.4,
    city: "Patna"
};
// console.log(stu);
// console.log(stu.city = "sasaram");
stu.gender = "Male";
console.log(stu);

console.log("After Delete");

const st = {
    name: "Shubham Singh",
    age: 21,
    marks: 94.4,
    city: "Patna"
};
// console.log(st);
delete st.age;
st.marks = [98, 67, 89, 69, 78];
console.log(st);

console.log("Get Value");

const post = {
    usename: "@shubham-rajput-3035",
    content: "Brotherhood",
    likes: 150,
    reposts: 5,
    tags: ["@ankit-singh", "@shivam-singh"]
};
console.log(post);
console.log(post["usename"]);
console.log(post["content"]);
console.log(post["likes"]);
console.log(post["reposts"]);
console.log(post["tags"]);
console.log(post.usename);
console.log(post.content);
console.log(post.likes);
console.log(post.reposts);
console.log(post.tags);


console.log("obj");
let obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};
console.log(obj);
console.log(obj["1"]);
console.log(obj["null"]);
console.log(obj.true);
console.log(obj["undefined"]);


console.log("object of object");
const student = {
    aman: {
        grade: "A",
        city: "patna"
    },
    shubham: {
        grade: "A++",
        city: "Sasaram"
    },
    kajal: {
        grade: "E",
        city: "Dehri"
    },
    shivam: {
        grade: "A",
        city: "Aurangabad"
    },
    krity: {
        grade: "B",
        city: "Jahanabad"
    },
    ankit: {
        grade: "A",
        city: "Kudra"
    }
};
console.log(student);
console.log(student["shubham"]);
console.log(student.aman);
console.log(student.ankit);
console.log(student.kajal);
console.log(student.krity);
console.log(student.shivam);

console.log("Array of object");
const classInfo = [
    {
        name: "shubham",
        grade: "A++",
        city: "Sasaram"
    },
    {
        name: "aman",
        grade: "A",
        city: "patna"
    },
    {
        name: "ankit",
        grade: "A",
        city: "kudra"
    },
    {
        name: "shivam",
        grade: "A",
        city: "Aurangabad"
    },
    {
        name: "rahul",
        grade: "A",
        city: "patna-sahab"
    }
];
console.log(classInfo);
console.log(classInfo[0]);
console.log(classInfo[1]);
console.log(classInfo[2]);
console.log(classInfo[3]);
console.log(classInfo[4]);

console.log(Math);

console.log("Random Integer from 1 to 10");
let num = Math.random();
num = num * 10;
num = Math.floor(num);
num = num + 1;
console.log(num);

console.log("Random Integer from 21 to 25");
let Random = Math.floor(Math.random() * 5) + 21;
console.log(Random);

//practice Questions
console.log("Random Integer from 1 to 100");

let randomm = Math.floor(Math.random() * 100) + 1;
console.log(randomm);

console.log("Random Integer from 1 to 5");

let Rand = Math.floor(Math.random() * 5) + 1;
console.log(Rand);




// //Guessing Game
// console.log("Guessing Game");


// const max = prompt("enter the max number");
// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt("guess the number");
// console.log(guess);
// while (true) {

//     if (guess == "quit") {
//         console.log("user quit");
//         break;
//     }
//     if (guess == random) {
//         console.log("you are right! Congrats!!  Random bumber was", random);
//     }
//     else if (guess < random) {
//         guess = prompt("hints: your guess was too small. please try again");
//     }
//     else {
//         guess = prompt("hints: your guess was too large. please try again");
//     }

//     // else {
//     //     guess = prompt("your guess was wrong. please try again");
//     // }
// }

//Assignment Question
//1

console.log("Random Integer representing a dice roll");

let roll = Math.floor(Math.random() * 6) + 1;
console.log(roll);

//2

let car = {
    name: "Thar",
    model: "Dzire",
    color: "black",

};
console.log(car);
console.log(car.name);

//3

let person = {
    name: "Shubham Singh Rajput",
    age: 18,
    city: "Patna",
};
person.city = "New York";
// person.country = "India";
person.country = "United State";
// person.state = "Bihar";
console.log(person);