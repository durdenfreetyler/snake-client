const net = require("net");
const connect = require("./client");
const setupInput = require("./input");
const connection = connect()
setupInput(connection);

// establishes a connection with the game server
// setup interface to handle user input from stdin

console.log("Connecting ...");

// conn.on("connect", () => {
//   // code that does something when the connection is first established
// });
