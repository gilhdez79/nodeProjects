
const path = require('path');
const express = require('express');

var app = express();
const publicPath = path.join(__dirname,'../public');


app.use(express.static(publicPath));
console.log(publicPath);


app.listen(3000, ()=>{
  console.log('Server is up on port 3000');

});
