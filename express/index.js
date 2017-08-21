var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

app = express();

/* Set handlebars as templating engine */
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/* Routes */
app.get('/', function(req, res) {
  res.render('home');
});

/* Run server on port 3000 */
app.listen(3000, function(err) {
  console.log('Server Started at localhost:3000');
});
