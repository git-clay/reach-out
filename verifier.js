var verifierjs 	= require('email-verify');


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

// guesses companyEmails
function cEmails(fName,lName,company,callback){
	var fnfl = fName.charAt(0), // first name first letter
		lnfl = lName.charAt(0), // last name first letter
		adr	 = '@'+company+'.com'
	// console.log(fName,fnfl,lnfl,lName,company)
	companyEmails = [
		(fnfl + lName +adr),
		(fName + lnfl +adr),
		(fName + lName +adr),
		(lName +adr),
		(fName +adr),
		(fName + '_' + lName +adr),
		(fName + '-' + lName +adr),
		(fnfl + '_' + lName +adr),
		(fnfl + '-' + lName +adr),
		(fName + '_' + lnfl +adr),
		(fName + '-' + lnfl +adr),

	]
	// console.log(companyEmails)
	eVerify(companyEmails,callback)
}

// email verifier
function eVerify(thing,callback){ //used to verify email - returns boolean
	email= thing.email;
	var verifiedEmails = [];
	function newEmail(pushthis){
		console.log(pushthis)
		verifiedEmails.push(pushthis)
	}
	thing.forEach(function(li, i){
			  		console.log(li,i)

		verifierjs.verify( li, function( err, info ){
	  		console.log(li,i)
	  		if(info.success===true){
	  			newEmail(li)
	  			console.log(li)
	  		}
		})
	})


	// callback(verifiedEmails)
}


module.exports = {
	eVerify: eVerify,
	cEmails:cEmails
}