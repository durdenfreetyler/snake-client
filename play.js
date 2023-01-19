const net = require("net");
// const handleUserInput = require("./input")
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();

// establishes a connection with the game server
// setup interface to handle user input from stdin

console.log("Connecting ...");
connect();

// conn.on("connect", () => {
//   // code that does something when the connection is first established
// });
