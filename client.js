const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    IP,
    PORT
  });

  // interpret incoming data as text 
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: BF");
    // setInterval(() => {conn.write("Move: up")}, 50);
    // setTimeout(() => {conn.write("Move: up")}, 100);
    // setTimeout(() => {conn.write("Move: up")}, 150);
    // setTimeout(() => {conn.write("Move: left")}, 200);
    // setTimeout(() => {conn.write("Move: left")}, 250);
    // setTimeout(() => {conn.write("Move: down")}, 300);
    // setTimeout(() => {conn.write("Move: down")}, 350);
    // setTimeout(() => {conn.write("Move: down")}, 400);
  });

  return conn;
};

module.exports = connect;