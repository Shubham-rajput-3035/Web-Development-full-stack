console.log("ForEach");
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function print(el) {
    console.log(el);
}
ar.forEach(print);
//or
ar.forEach(function (el) {
    console.log(el);
});
//or
ar.forEach((el) => {
    console.log(el);
});

let st = [
    {
        name: "Shubham",
        marks: 99,
    },
    {
        name: "Shivam",
        marks: 95,
    },
    {
        name: "Ankit",
        marks: 89,
    },
    {
        name: "Rahul",
        marks: 79,
    },
];
st.forEach((students) => {
    console.log(students);
    console.log(students.marks);
});

console.log("Map");
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let dub = n.map(function (el) {
    // return el * 2;
    return el * el;
});
console.log(dub);
//or
let stu = [
    {
        name: "Shubham",
        marks: 99,
    },
    {
        name: "Shivam",
        marks: 95,
    },
    {
        name: "Ankit",
        marks: 89,
    },
    {
        name: "Rahul",
        marks: 79,
    },
];
let gpa = stu.map((el) => {
    return el.marks / 10;
});
console.log(gpa);

console.log("Filter");
let nu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let even = nu.filter((nu) => (nu % 2 == 0));
console.log(even);
//or
let odd = nu.filter((nu) => (nu % 2 != 0));
console.log(odd);
//or
let div = nu.filter((el) => {
    return el > 5;
});
console.log(div);

console.log("Every");
let ev = [1, 2, 3, 4, 5].every((el) => (el % 2 == 0));
console.log(ev);
let eve = [2, 4, 6, 8, 10].every((el) => (el % 2 == 0));
console.log(eve);

console.log("Some");
let ever = [1, 2, 3, 4, 5].some((el) => (el % 2 == 0));
console.log(ever);
let everry = [2, 4, 6, 8, 10].some((el) => (el % 2 == 0));
console.log(everry);
let everr = [1, 3, 5, 7, 9, 11, 13, 15].some((el) => (el % 2 == 0));
console.log(everr);

console.log("Reduce");
let red = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((res, el) => (res + el));
console.log(red);
//or
let redu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let finalVlu = redu.reduce((res, el) => {
    console.log(res);
    return res * el;
});
console.log(finalVlu);

//Find the maximum and mimimum value in a array


let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log("max number");
let result = num.reduce((result, el) => {
    if (result < el) {
        return el;
    }
    else {
        return result;
    }
});
console.log(result);
//or
let max = -1;
for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
        max = num[i];
    }
}
console.log(max);
console.log("min number");
let res = num.reduce((res, el) => {
    if (res > el) {
        return el;
    }
    else {
        return res;
    }
});
console.log(res);
//or
let min = -1;
for (let i = 0; i < num.length; i++) {
    if (min > num[i]) {
        min = num[i];
    }
}
console.log(min);

console.log("practice Question");
//1

let divNum = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let divi = divNum.every((el) => {
    return (el % 10 == 0);
});
console.log(divi);

//2
let mini = divNum.reduce((mini, el) => {
    if (mini > el) {
        return el;
    }
    else {
        return mini;
    }
});
console.log(mini);

console.log("Default Parameters");
function sum(a, b = 5) {
    return a * b;
}
console.log(sum(9));
console.log(sum(9, 7));

console.log("Spread");
let spr = "Shubham singh Rajput";
console.log(...spr);
//or
let spre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// Math.min(...spre);
console.log(...spre);
//or Array Litrels
let arrLit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newarrLit = [...arrLit];
console.log(newarrLit);
//or Array Object Litrals
let arrObj = {
    email: "shubham736688@gmail.com",
    passward: "smart boy 7366",

};
console.log(arrObj);
let arrObjcopy = { ...arrObj, id: "shubhamsingh", country: "India" };
console.log(arrObjcopy);

console.log("Rest");
function sum(...args) {
    return args.reduce((add, el) => add + el);
}
console.log(sum(78, 89));

console.log("Destructuring");
let names = ["Shubham", "Ankit", "Shivam", "Rahul", "Saurabh", "Aman"];
let [winners, runnerup, ...others] = names;
console.log(winners, runnerup, others);

//or
const students = {
    name: "Shubham",
    class: 10,
    age: 14,
    username: "smart-boy-3035",
    subjects: ["Hindi", "English", "Math", "Science", "Social study"],
    passward: "smart boy 7366",
    city: "pune",
};
let { username: user, passward: pass, city = "Mumbai", country = "India" } = students;
console.log(user);
