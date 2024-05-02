function hello(params) {
  console.log("Inside hello fnx");
  console.log("Hello");
}

function demo(params) {
  console.log("Calling hello fnx");
  hello();
}

console.log("Calling demo fnx");
demo();
console.log("done,bye");

console.log("Visualizing the call stack");

function one(params) {
  return 1;
}
function two(params) {
  return one() + one();
}
function three(params) {
  let ans = two() + one();
  console.log(ans);
}
three();

let a = 25;
console.log(a);
let b = 25;
console.log(b);
console.log(a + b);

setTimeout(() => {
  console.log("Shubham");
}, 2000);

setTimeout(() => {
  console.log("Singh");
}, 2000);

setTimeout(() => {
  console.log("Rajput");
}, 2000);

console.log("Hello......");

let h1 = document.querySelector("h1");

// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   h1.style.color = "pink";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "yellow";
// }, 3000);

// setTimeout(() => {
//   h1.style.color = "blue";
// }, 4000);

// setTimeout(() => {
//   h1.style.color = "green";
// }, 5000);

// function Changecolor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }

// Changecolor("red", 1000);
// Changecolor("yellow", 2000);
// Changecolor("pink", 3000);
// Changecolor("green", 4000);
// Changecolor("blue", 5000);

function Changecolor(color, delay, nextcolorchange) {
  setTimeout(() => {
    h1.style.color = color;
    nextcolorchange();
  }, delay);
}

Changecolor("red", 1000, () => {
  Changecolor("yellow", 1000, () => {
    Changecolor("pink", 1000, () => {
      Changecolor("green", 1000, () => {
        Changecolor("blue", 1000, () => {
          Changecolor("purple", 1000, () => {
            Changecolor("orange", 1000, () => {
              Changecolor("grey", 1000, () => {
                Changecolor("greenyellow", 1000, () => {
                  Changecolor("skyblue", 1000);
                });
              });
            });
          });
        });
      });
    });
  });
});
