const sleep = require("./snippets/sleep");

// 🤮

async function main() {
  console.time("main");

  await sleep();
  await sleep();
  await sleep();

  console.timeEnd("main");
}

main();
