const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid=false;
let passwordMatch = false;

function validateForm(){
// using contraint API
isValid = form.checkValidity();
console.log(isValid);
// style main message for an error
if(!isValid){
    message.textContent='please fill out all fields';
message.style.color='red';
messageContainer.style.borderColor='red';
return;
}

if(password1El.value === password2El.value){
    passwordMatch=true;
    password1El.style.borderColor ='green';
    password2El.style.borderColor ='green';
}else{
    passwordMatch=false;
    message.textContent='Make sure password match';
    message.style.color='red';
    message.style.borderColor='red';
    password1El.style.borderColor='red';
    password2El.style.borderColor='red';
    return;
}
// if form in valid 
if(isValid && passwordMatch){
    message.textContent='successfully Registered!'
    message.style.color='green';
    messageContainer.style.borderColor='green';
}
}

// store form data

function storeFormData(){
    const user ={
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value,
    };
    // Do something with user data

    console.log(user);
}

function processFormData(e){
    event.preventDefault();
    // validate form
    validateForm();
    // submit data if valid
    if (isValid && passwordMatch){
        storeFormData();
    }
}
// Event Listner 
form.addEventListener('submit',processFormData);