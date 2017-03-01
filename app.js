var express 	= require('express'),
	app			= express(),
	bodyParser	= require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var	fName='',
	lName='',
	company='',
	phone='',
	email='',
	linkedin='',
	facebook='',
	twitter='',
	github='';
	


console.log()
function submitForm(){
	var form = document.getElementById('form').elements;
	fName=form.fName.value,
	lName=form.lName.value,
	company=form.company.value,
	phone=form.phone.value,
	email=form.email.value,
	linkedin=form.linkedin.value,
	facebook=form.facebook.value,
	twitter=form.twitter.value,
	github=form.github.value;


}