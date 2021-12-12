// establishes a connection with the game server
const { connect } = require("./client")
const { setupInput } = require("./input");

console.log("Connecting ...");
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write("Exited snek game. Bye bye.\n");
    process.exit()
  }
};

setupInput();

connect();