const num = ['1', '2', '3.5', '16', '8'];
console.log(num);

// 1. Sa se creeze un array nou pornind
// de la cel de sus care sa aiba toate
// numerele adunate cu 2
function add2(arr) {
  // const res = [];

  // for(let i = 0; i < arr.length; i++) {
  //   const n = arr[i];

  //   res.push(Number(n) + 2);
  // }

  // for(const n of arr) {
  //   res.push(Number(n) + 2);
  // }

  // arr.forEach((n) => res.push(Number(n) + 2));

  return arr.map((n) => Number(n) + 2);
}

// console.log(add2(num), num);

// 2. Sa se returneze un array care contine doar
// numerele pare
function onlyEven(arr) {
  // const res = [];

  // for (const n of arr) {
  //   if(n % 2 === 0) {
  //     res.push(Number(n));
  //   }
  // }

  return arr.filter((n) => n % 2 === 0).map(Number);
}

console.log(onlyEven(num));

console.log(Number(num.find((n) => n % 2 === 0)))

console.log(num.some((n) => Number(n) > 15));

console.log(num.every((n) => Number(n) > 10));

function sum(arr) {
  // let res = Number(arr[0]);

  // for(let i = 1; i < arr.length; i++) {
  //   const n = arr[i];
  //   res += Number(n);
  // }
  
  // return res;

  return arr.reduce((res, n) => res + Number(n), 0);
}

console.log(sum(num));


function myMap(cb) {
  const res = [];

  for(let i = 0; i < this.length; i++) {
    const elem = this[i];

    res.push(cb(elem, i, this));
  }

  return res;
}

Array.prototype.myMap = myMap;

console.log(num.myMap((n) => Number(n) + 10));
