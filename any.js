const sleep = require("./snippets/sleep");

// no matter how many rejected, at least one must fulfill

async function allFulfilled() {
  console.time("main");

  const result = await Promise.any([sleep("slow", 2000), sleep("quick")]);

  console.log(result);
  console.timeEnd("main");
}

async function oneFulfilled() {
  console.time("main");

  const rejectPromise = () =>
    new Promise((resolve, reject) => reject("I rejected"));

  const result = await Promise.any([
    rejectPromise(),
    rejectPromise(),
    sleep("quick", 2000),
  ]);

  console.log(result);

  console.timeEnd("main");
}

async function allRejected() {
  console.time("main");

  const rejectPromise = () =>
    new Promise((resolve, reject) => reject("I rejected"));

  try {
    const result = await Promise.any([
      rejectPromise(),
      rejectPromise(),
      rejectPromise(),
    ]);

    console.log(result);
  } catch (err) {
    console.log(err);
  }

  console.timeEnd("main");
}

// allFulfilled();
// oneFulfilled();
allRejected();
