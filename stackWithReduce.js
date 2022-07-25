const getTime = () => {
  var date = new Date();

  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

function methodThatReturnsAPromise(nextID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Resolve ${nextID}! ${getTime()}`);

      resolve();
    }, 2000);
  });
}

["como-programar", "solid-pra-que?", "tailwind-4-life"].reduce(
  (accumulatorPromise, nextID) => {
    console.log(`Loop! ${getTime()}`);

    return accumulatorPromise.then(() => {
      return methodThatReturnsAPromise(nextID);
    });
  },
  Promise.resolve()
);

// What we are actually writing

new Promise((resolve, reject) => {
  // Promise #1

  resolve();
})
  .then((result) => {
    // Promise #2

    return result;
  })
  .then((result) => {
    // Promise #3

    return result;
  }); // ... and so on!
