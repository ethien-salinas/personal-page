let express		= require('express');
let app			= express();
let bodyParser	= require('body-parser');
let portfolio 	= require('./models/portfolio.json');
const PORT = 4000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/hello', function (req, res) {
	res.send('jelou world');
});

app.post('/mail', function (req, res) {
    console.log(req.body)
	res.send(`jelou ${req.body.name}`);
});

app.get('/portfolio', function (req, res) {
	res.send(portfolio);
});





app.listen(PORT, function () {
	console.log(`Server listen on port ${PORT}`);
});
