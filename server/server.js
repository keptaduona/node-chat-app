const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message.js')

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app.'));
  // broadcast will send to everyone but this socket
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined.'));

  // socket.emit emits to one connection, io.emit emits to all connections
  socket.on('createMessage', (message, callback) => {
    console.log(message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server.');
  });
  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });

});


server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
