console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
alert("Form has been submitted")
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const img = document.querySelector("img")

img.addEventListener("mouseover", function(){
	alert("You are beautiful")
})
