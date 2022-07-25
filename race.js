const sleep = require("./snippets/sleep");

// the first to fulfill or reject will be returned
// the other promise will continue running, but the code will continue

// to cancel a api call, use AbortController.abort() method and pass the 'signal' to your fetcher method
// https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort

async function fulfillFirst() {
  console.time("main");

  const result = await Promise.race([sleep("slow", 2000), sleep("quick")]);

  console.log(result);
  console.timeEnd("main");
}

async function rejectFirst() {
  console.time("main");

  const rejectPromise = () =>
    new Promise((resolve, reject) => reject("I rejected"));

  const result = await Promise.race([sleep("slow", 2000), rejectPromise()]);

  console.log(result);

  console.timeEnd("main");
}

// fulfillFirst();
rejectFirst();
