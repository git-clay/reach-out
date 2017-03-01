var info={}
function submitForm(url){
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

	info={fName,lName,company,phone,email,linkedin,facebook,twitter,github}
	apiCall(url,myCallback)
}

function apiCall(url,callback){
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
	    if (this.readyState == 4 && this.status == 200) {
	    	callback(http.responseText)
		}

	}
	console.log(info)
	http.open("POST", url,true);
	http.setRequestHeader("Content-Type", "application/json")
	http.send(JSON.stringify(info)); 

}

function myCallback(data){
	console.log(data)
}