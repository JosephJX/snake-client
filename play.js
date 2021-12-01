const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "Localhost",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.on("connect", () => {
      console.log("Connection established")
  });

  conn.on("data", (data) => {
    console.log(data)
  });


  conn.on("close", () => {
      console.log("Connection closed")
  });

  // //conn.on("event name", () => {

  // };

  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();