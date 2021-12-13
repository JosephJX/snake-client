const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');


  // interpret incoming data as text
  conn.on("connect", () => {
      console.log("Connection established")
  });
  conn.on('connection', () => {
    console.log('New client connected!');
    client.write('Name: JJM');
  });
  
  // setInterval( func = () => {
  //     conn.write("Move: up");
  //   }, 100);

  // setInterval( func = () => {
    //   conn.write("Move: down");
    // }, 600);
  
  

  conn.on("data", (data) => {
    console.log(data)
  });


  conn.on("close", () => {
      console.log("Connection closed")
  });

  return conn;
};

module.exports = { connect };