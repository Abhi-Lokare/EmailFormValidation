//Variable
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form')
//console.log(sendBtn)
console.log(email)
console.log(subject)
console.log(message)

//Events
onLoadEvent();

function onLoadEvent() {
    //App init
    document.addEventListener('DOMContentLoaded', appInit)
    //form validation
    email.addEventListener('blur', validateField)
    subject.addEventListener('blur', validateField)
    message.addEventListener('blur', validateField)

    //send and reset the form
    sendEmailForm.addEventListener('submit', sendForm)
    resetBtn.addEventListener('click', resetForm)
}


//Functions

//app init 
function appInit(e) {
    e.preventDefault()
    sendBtn.disabled = true;
}

//form validation
function validateField() {
    let Errors;

    //Validate the field length
    validateFieldLength(this)
    // console.log(this.type)
    //Email form validation
    if (this.type === "email") {
        validateEmail(this)
    }
    //Both form validations will return the class name "Error" so select them all
    Errors = document.querySelectorAll('.error') //return whole Node-list containing class error

    //check weather inputs are empty
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        console.log("yes!!")
        if (Errors.length === 0) {
            sendBtn.disabled = false;
        }
    }
}

//Validate the field length
function validateFieldLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green'
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error');
    }
}

//Validate Email feild

function validateEmail(field) {
    if (field.value.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green'
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red'
        field.classList.add('error');
    }

}

//Send the form
function sendForm(e) {
    e.preventDefault();
    //Show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    //hide spinner and show the mail image
    setTimeout(function () {
        //hide the spinner
        spinner.style.display = 'none';
        // show image
        const mail = document.querySelector('#mail');
        mail.style.display = 'block'
        setTimeout(function () {
            mail.style.display = 'none';
            sendEmailForm.reset()
        }, 5000)

    }, 3000)
}

//Reset the form
function resetForm() {
    sendEmailForm.reset()
}