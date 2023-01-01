let form = document.getElementById('myForm')
let fName = document.getElementById('fName')
let lName = document.getElementById('lName')
let pass = document.getElementById('pass')
let age = document.getElementById('age')
let file = document.getElementById('upload')
let message = document.getElementById('msg')
let showPass = document.getElementById('showPass')
let passError = document.getElementById('passError')
let fNameError = document.getElementById('fNameError')
let email = document.getElementById('email')
let submit = document.getElementById('submit')


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
function validateInputs() {
    if (vFname() && vLname () && vAge() && vPass() && checkCountry () &&  vPass()) {
        alert('your application submitted successfully')
        var emptyInputs = document.getElementsByTagName("input")
        for (var i of emptyInputs) {
            i.value='';
        }
        passError.classList.add('d-none')

    }
}
// **************first name validation ***********
var vFname = fName.onkeyup = function () {

    var y = fName.value.length
    if (y < 2) {
        fNameError.classList.remove('d-none')
        lName.setAttribute('disabled', '')
        return false;

    } else {
        lName.removeAttribute('disabled')
        fNameError.classList.add('d-none')
        return true;
    }
}

// **************last name validation ***********
var vLname = lName.onkeyup = function () {

    var y = lName.value.length
    if (y < 2) {
        lNameError.classList.remove('d-none')
        return false;
    } else {
        lNameError.classList.add('d-none')
        return true;
    }
}
// ************** age validation ***********
var vAge = age.onkeyup = function () {

    var y = age.value
    if (y <= 18) {
        ageError.classList.remove('d-none')
        return false;
    } else {
        ageError.classList.add('d-none')
        return true;
    }
}
// **************password validation ************
var vPass = pass.onkeyup = function () {

    var y = pass.value.length
    if (y <= 6) {
        passError.textContent = 'your password is week'
        passError.classList.remove('d-none')
        passError.classList.remove('text-success')
        passError.classList.remove('bg-light')
        passError.classList.remove('text-secondary')
        return  false;


    } else if (y > 6 && y < 10) {
        passError.textContent = 'your password is medium'
        passError.classList.remove('d-none')
        passError.classList.add('text-secondary')
        passError.classList.remove('text-success')
        passError.classList.add('bg-light')
        return false;
    } else if (y >= 10) {
        passError.textContent = 'your password is strong'
        passError.classList.remove('d-none')
        passError.classList.add('text-success')
        passError.classList.add('bg-light')
        return true;
    }
}
var show = function () {
    if (pass.type == 'password') {
        showPass.classList = 'fa-regular fa-eye-slash';
        pass.type = 'text';

    } else {
        showPass.classList = 'fa-regular fa-eye';
        pass.type = 'password';
    }
}
// **************message validation ***********
message.onkeyup = function () {

    var y = message.value.length
    if (y < 20) {
        msgError.classList.remove('d-none')
        return false;
    } else {
        msgError.classList.add('d-none')
        return true;
    }
}
// **************file validation ***********

 function checkFiles() {
    var fullPath = file.value;
    var fileName = fullPath.substring(fullPath.lastIndexOf('\\') + 1);
    var ext = fullPath.substring(fullPath.lastIndexOf('.') + 1);
    if (ext !== 'pdf') {
        fileError.textContent = 'cv must be pdf file';
        fileError.classList.remove('d-none')
        fileError.classList.remove('text-success')
        fileError.classList.remove('bg-light')
        return false;
    } else {
        fileError.textContent = fileName;
        fileError.classList.remove('d-none')
        fileError.classList.add('text-success')
        fileError.classList.add('bg-light')
        return true;
    }

}



// **************country validation ***********
function checkCountry  ()  {
    if (document.myForm.country.value == '-1') {
        countryError.classList.remove('d-none')
        return false;
    } else {
        countryError.classList.add('d-none')
        return true
    }
}

// **************email validation ***********
email.onkeyup = function vPass() {
    var x = email.value;
    var atindex = x.indexOf("@");
    var dotindex = x.lastIndexOf(".");
    if (atindex < 4 || dotindex - atindex < 3 || x.length - dotindex < 3) {
        emailError.classList.remove('d-none')
        return false;
    } else {
        emailError.classList.add('d-none')
        return true;
    }
}


// **************reset***********
function clearErrorMsgs() {
    var errorMessages = document.getElementsByClassName("errorMessage")
    for (var i of errorMessages) {
        i.classList.add('d-none')
    }
}
function emptyMsg() {
    message.value = ''

}