const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,  // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    conn.write("Name: ABR");
    console.log("This is my ABR");

     conn.write("Say: I am the snEk King!");
     console.log("This is my ABR");

    setTimeout(() => {
      conn.write("Move: up");
    }, 100);

    setTimeout(() => {
      conn.write("Move: down");
    }, 100);

    setTimeout(() => {
      conn.write("Move: right");
    }, 100);

    setTimeout(() => {
      conn.write("Move: left");
    }, 100);
    // code that does something when the connection is first established
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;








