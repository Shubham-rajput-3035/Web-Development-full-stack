function genTicket(n) {
  let arr = new Array(n);
  for (let index = 0; index < n; index++) {
    arr[index] = Math.floor(Math.random() * 10);
  }
  return arr;
}

function sum(arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}

export { genTicket,sum };
