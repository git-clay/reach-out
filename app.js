var express 	= require('express'),
	app			= express(),
	bodyParser	= require('body-parser'),
	request		= require('request'),
	co 			= require('co'),
	mx			= require('validate-email-dns');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('./'));

var	fName='',
	lName='',
	company='',
	phone='',
	email='',
	linkedin='',
	facebook='',
	twitter='',
	github='';
	
app.post('/api',function(req,res){
	var ob = req.body;
	email= ob.email;
	co.wrap(mx)(email)
		.then(function(correct){
			res.send(correct)
		})
	})



app.listen(process.env.PORT || 3000, function(){
	console.log('running')
})