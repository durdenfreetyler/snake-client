const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ABR");
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
