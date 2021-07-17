//console.log("app.js loaded ....");
//function onSubmit(){
const form = document.getElementById('form');
const username = document.getElementById('username');
const dob = document.getElementById('dob');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

const validate = () => {
    const usernameVal = username.value.trim();
    const dobVal = username.value.trim();
    const emailVal = username.value.trim();
    const passwordVal = username.value.trim();

    if (usernameVal === "") {
        setErrorFor(username, 'Username cannot be blank');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'Invalid Username');
    } else {
        setSuccessMsg(username);
    }
    if (dobVal === "") {
        setErrorFor(dob, 'Select birth date');
    } else {
        setSuccessMsg(dob);
    }
    if (emailVal === "") {
        setErrorFor(email, 'Email cannot be blank');
    } else if (isEmail()) {
        setErrorMsg(emailVal, 'Invalid email');
    } else {
        setSuccessMsg(email);
    }

    if (passwordVal === "") {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordVal.length < 6) {
        setErrorMsg(passwordVal, 'Invalid Password');
    } else {
        setSuccessMsg(password);
    }
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerTest = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}