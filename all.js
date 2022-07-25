const sleep = require("./snippets/sleep");

// all promises must fulfill

async function allFulfilled() {
  console.time("main");

  const result = await Promise.all([sleep(1), sleep(2), sleep(3)]);

  console.log(result);
  console.timeEnd("main");
}

async function oneReject() {
  console.time("main");

  const rejectPromise = () =>
    new Promise((resolve, reject) => reject("I rejected"));

  try {
    const result = await Promise.all([sleep(1), rejectPromise(), sleep(3)]);

    console.log(result);
  } catch (err) {
    console.log(err);
  }

  console.timeEnd("main");
}

allFulfilled();
// oneReject();
