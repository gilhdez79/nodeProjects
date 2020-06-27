
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var io = socketIO(server);

io.on('connection',(socket)=>{
  console.log('New user connected');
});

app.use(express.static(publicPath));
console.log(publicPath);


server.listen(port, ()=>{
  console.log('Server is up on port 3000');

});
