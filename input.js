const handleUserInput = function () {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "\u0003") {
    process.exit();
  }
  // your code here
};

const setupInput = function () {

stdin.on("data", handleUserInput);


  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


module.exports = { setupInput };