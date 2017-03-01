var results = document.getElementById('results');

console.log()
function submitForm(){
	var form = document.getElementById('form');
	var text = [];
	for(var i=0;i<form.length;i++){
		text.push({
			name:form.elements[i].name,
			value: form.elements[i].value
		})
	}
	console.log(text)
}