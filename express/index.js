var express = require('express');

app = express();

app.get('/', function(req, res) {
  res.json('Hello world');
});

app.listen(3000, function(err) {
  console.log('Server Started at localhost:3000');
});
