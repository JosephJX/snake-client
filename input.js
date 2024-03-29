const { UPKEY, LEFTKEY, DOWNKEY, RIGHTKEY } = require('./constants.js');

let connection;

const say = "Say: ";
const greeting = "Hey whats up?";
const question = "whats your name? where you from?";
const challenge = "wanna race?";


const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

let func;

const handleUserInput = (key) => {
  const stdout = process.stdout;
  const interval = function(key) {
    func = setInterval(() => {
      connection.write(key);
    }, 100);
  };
  if (key === '\u0003') {
    stdout.write("Exited snek game. Bye bye.\n");
    process.exit();
  }
  if (key === 'w') {
    clearInterval(func);
    interval(UPKEY);
  }
  if (key === 'a') {
    clearInterval(func);
    interval(LEFTKEY);
  }
  if (key === 's') {
    clearInterval(func);
    interval(DOWNKEY);
  }
  if (key === 'd') {
    clearInterval(func);
    interval(RIGHTKEY);
  }
  if (key === "h") {
    connection.write(say + greeting);
  }
  if (key === "j") {
    connection.write(say + question);
  }
  if (key === 'k') {
    connection.write(say + challenge);
  }
};

module.exports = { setupInput };

  