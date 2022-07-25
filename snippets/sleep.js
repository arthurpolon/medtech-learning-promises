module.exports = (message = "", time = 1000) =>
  new Promise((resolve) =>
    setTimeout(() => resolve("promise " + message), time)
  );
