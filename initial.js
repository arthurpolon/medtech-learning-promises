const sleep = require("./snippets/sleep");

// 🤮 bad because the promises must wait the past one finish before being called

async function main() {
  console.time("main");

  await sleep();
  await sleep();
  await sleep();

  console.timeEnd("main");
}

main();
