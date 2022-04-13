const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");

  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
  };

  stdin.on('data', handleUserInput);

  stdin.resume();
  return stdin;
};

module.exports = setupInput;