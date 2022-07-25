const sleep = require("./snippets/sleep");

// no matter if it fulfills or rejects,
// always return a fulfilled promise with the promises status and data

// [
//   { status: 'fulfilled', value: 'promise 1' },
//   { status: 'reject', reason: 'I rejected' },
//   { status: 'fulfilled', value: 'promise 3' }
// ]

async function allFulfilled() {
  console.time("main");

  const result = await Promise.allSettled([sleep(1), sleep(2), sleep(3)]);

  console.log(result);
  console.timeEnd("main");
}

async function oneReject() {
  console.time("main");

  const rejectPromise = () =>
    new Promise((resolve, reject) => reject("I rejected"));

  const result = await Promise.allSettled([
    sleep(1),
    rejectPromise(),
    sleep(3),
  ]);

  console.log(result);

  console.timeEnd("main");
}

allFulfilled();
// oneReject();
