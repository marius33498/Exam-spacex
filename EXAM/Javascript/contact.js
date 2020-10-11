// JavaScript Document
const firstName = document.getElementById("firstName");
const firstNameError = document.getElementById("firstNameError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const message = document.getElementById("comment");
const messageError = document.getElementById("messageError");

const phone = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

const form = document.getElementById("contactForm");

form.addEventListener("submit", checkName);

function checkName(){
	event.preventDefault();
	
	const nameValue = firstName.value;
	const trimmedValue = nameValue.trim();
	const nameValueLength = trimmedValue.length;
	
	const emailValue = email.value; 
    const trimValue = emailValue.trim();
	const checkValueEmail = trimValue.length;
	
	const messageValue = message.value;
	const trim = messageValue.trim();
	const messageValueLength = trim.length;
	
	const phoneValue = phone.value;
	const trimm = phoneValue.trim();
	const phoneLength = trim.length;

	
	/*check name length
	-------------------*/
	if(nameValueLength >= 3){
		(validateName(nameValueLength))
			firstNameError.style.display = "none";
		
	}else{
		firstNameError.style.display = "block";
	}

	
	/*check message value
	---------------------*/
	if(messageValue >= 6){
		(validateMessage(messageValueLength))
		  messageError.style.display = "none";
	}else{
		messageError.style.display = "block";
	}
/*email
--------------------*/	
	
     if(validateEmail(checkValueEmail)){
		 emailError.style.display = "none";
	 }else{
		 emailError.style.display = "block";
	 }
	/*phone check
	----------*/
	if(validatePhone(phoneLength)){
		phoneError.style.display ="none";
	}else{
		phoneError.style.display ="block";
	}
	
}
function validateEmail(checkValueEmail){
	const validateLetters = /\S+@\S+\.\S+/;
	
	if(validateLetters.test(checkValueEmail)){
		return true;
	}else{
		return false;
	}
}

function validatePhone(phoneLength){
	const validateNumbers = /0-9/;
	
	if(validateNumbers.test(phoneLength)){
		return true;
	}else{
		return false;
	}
}

/*mobile nav
--------------*/

   document.querySelector('.icon').addEventListener("click", function(){
    var navigation = document.querySelector("#mobileNavigation");
    if(navigation.style.display === "block"){
        navigation.style.display = "none";
    }else {
        navigation.style.display = "block";
    }
})