const net = require("net");
const connect = require("./client");


// establishes a connection with the game server
// setup interface to handle user input from stdin

const setupInput = function () {

stdin.on("data", handleUserInput);


  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


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

console.log("Connecting ...");
connect();

// conn.on("connect", () => {
//   // code that does something when the connection is first established
// });

