// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//   console.log("div was clicked");
// });
// ul.addEventListener("click", function (event) {
// //   event.stopPropagation();
//   console.log("ul was clicked");
// });
// for (li of lis) {
//   li.addEventListener("click", function () {
//     console.log("li was clicked");
//   });
// }

// let btn = document.querySelector("button");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function () {
//   let item = document.createElement("li");
//   item.innerText = inp.value;

//   let delbtn = document.createElement("button");
//   delbtn.innerText = "delete";
//   delbtn.classList.add("delete");

//   item.appendChild(delbtn);
//   ul.appendChild(item);
//   inp.value = "";
// });

// ul.addEventListener("click", function (event) {
//   console.dir(event.target.nodeName);
//   console.log(event.target);
//   let ListItem = event.target.parentElement;
//   console.log(ListItem);
//   ListItem.remove();
//   console.log("Button Clicked");
// });
// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//   delbtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }

let gameseq = [];
let userseq = [];
let btn = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelup();
  }
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 1000);
}
function userflash(btn) {
  btn.classList.add(".userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 1000);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level${level}`;

  // Random btn choose

  let randInd = Math.floor(Math.random() * 3);
  let randcolor = btn[randInd];
  let randBtn = document.querySelector(`.${randcolor}`);
  // console.log(randInd);
  // console.log(randcolor);
  // console.log(randBtn);

  gameseq.push(randcolor);
  console.log(gameseq);
  gameflash(randBtn);
}

function checkans(idx) {
  console.log("curr level: ", level);
  // let idx = level - 1;

  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerText = `Game Over! your score was ${level} Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.color = "white";
    }, 150);
    reset();
  }
}

function btnpress() {
  console.log("btn was pressed");
  console.log(this);
  let btn = this;
  userflash(btn);

  userColor = btn.getAttribute("id");
  userseq.push(userColor);

  checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}
function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
