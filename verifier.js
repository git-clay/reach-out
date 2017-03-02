var verifier 	= require('email-verify');


/********* email searcher ***********/
// from front form
var	fName	='',
	lName	='',
	company	='',
	phone	='',
	email	='',
	linkedin='',
	facebook='',
	twitter	='',
	github	='';

// collection of possible emails -> need to be verified
var companyEmails	= [], // maybe based on company
	phoneMatches	= [], // maybe emails from # search
	facebookSearch	= [], // maybe emails from fb
	twitterSearch	= [], // maybe emails from tw
	githubSearch	= []; // maybe emails from gh



// email verifier
function eVerify(email,callback){ //used to verify email - returns boolean
	console.log(email)
	verifier.verify( email, function( err, info ){
  		callback(info.success)
	});
}

module.exports = {
	eVerify: eVerify
}