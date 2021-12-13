// establishes a connection with the game server
const { connect } = require("./client")
// const { setupInput } = require("./input");

console.log("Connecting ...");
connect();
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => {
    handleUserInput(key);
  });
  return stdin;
};
const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write("Exited snek game. Bye bye.\n");
    process.exit()
  }
};

setupInput();
handleUserInput();

module.exports = { connect };