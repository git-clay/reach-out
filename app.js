var express 	= require('express'),
	app			= express(),
	bodyParser	= require('body-parser'),
	request		= require('request'),
	verifier = require('email-verify');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('./'));
require('dotenv').load(); // require and load dotenv

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
	console.log(email)
	verifier.verify( email, function( err, info ){
  console.log(info)
});
})


app.listen(process.env.PORT || 3000, function(){
	console.log('running')
})