var express 	= require('express'),
	app			= express(),
	bodyParser	= require('body-parser'),
	verifier 	= require('email-verify');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('./'));
require('dotenv').load(); // require and load dotenv


/********* js files **********/
var vjs	= require('./verifier.js')


// api request from frontjs
app.post('/api',function(req,res){
	var ob = req.body;
	// vjs.eVerify(ob,verifyCallback)
	vjs.cEmails(ob.fName,ob.lName,ob.company,verifyCallback)
	function verifyCallback(data){ // callback that sends to frontjs
		res.send(data)
	}
})



/*********** serves up on port ***********/
app.listen(process.env.PORT || 3000, function(){
	console.log('running')
})