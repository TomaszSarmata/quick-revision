// const promiseA = new Promise((resolve, reject) => {
//   resolve("A");
//   reject("reason for rejection");
// });

// function getPromiseA() {
//   return promiseA;
// }

// let x = promiseA;
// console.log(x);

// let y = getPromiseA();
// console.log(y);

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("B");
  }, 500);
});

function getPromiseB() {
  return promiseB;
}

// let z = getPromiseB();
// let a = promiseB;

// console.log(z);
// setTimeout(() => {
//   console.log("delayed z:", z);
// }, 495);

// const t = getPromiseB().then((answer) => {
//   console.log(
//     "this line should print first but we are waiting for the answer first, which is: ",
//     answer
//   );
// });

// console.log(
//   "here it prints t (our promiseB) as a pending object like that:",
//   t
// );

async function demoAsyncAwait() {
  const promiseC = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("C");
    }, 5000);
  });

  const getPromiseC = () => promiseC;

  const x = await getPromiseC();
  console.log("here is the response from async await:", x);
}

const y = demoAsyncAwait();
console.log("that will come back as pending:", y);
