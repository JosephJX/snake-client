let connection;

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
const handleUserInput = (key) => {
  const stdout = process.stdout;
  if (key === '\u0003') {
    stdout.write("Exited snek game. Bye bye.\n");
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
}ß
};
module.exports = { setupInput }; 

  