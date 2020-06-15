const name = document.getElementById('name')
const email = document.getElementById('email')
//const bday = document.getElementById('bday')
//const phone = document.getElementById('phone')
//const gender = document.getElementById('gender')
const password = document.getElementById('password')
const passwordchk = document.getElementById('passwordchk')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs() {
		
	}
});

function checkInputs() {
	//get values
	const nameValue = name.value.trim();
	const emailValue = email.value.trim();
	//const bdayValue = bday.value;
	//const phoneValue = phone.value.trim();
	//const genderValue = gender.value();
	const passwordValue = password.value.trim();
	const passwordchkValue = passwordchk.value.trim();
	
	if(nameValue === '') {
		
		setErrorFor(name, 'Name Cannot Be Blank');
	} else {
		setSuccessFor(name);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email Cannot Be Blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	//if(bdayValue === '') {
		//setErrorFor(bday, 'Birthday Cannot Be Blank');
	//} else {
		//setSuccessFor(bday);
	//}
	
	//if(phoneValue === '') {
		//setErrorFor(phone, 'Phone Number Cannot Be Blank');
	//} else {
		//setSuccessFor(phone);
	//}
	
	//if(genderValue === '') {
		//setErrorFor(gender, 'Please choose a Response');
	//} else {
		//setSuccessFor(gender);
	//}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(passwordchkValue === '') {
		setErrorFor(passwordchk, 'Password cannot be blank');
	} else if(passwordValue !== passwordchkValue) {
		setErrorFor(passwordchk, 'Passwords do not match');
	} else{
		setSuccessFor(passwordchk);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement; // .form-control
	const small = formControl.querySelector('small');
	
	// add error message inside small
	small.innerText = message;
	
	//add error class
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}