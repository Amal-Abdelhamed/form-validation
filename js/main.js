var fName = document.getElementById('fName')
var lName = document.getElementById('lName')
var pass = document.getElementById('pass')
var age = document.getElementById('age')
var file = document.getElementById('upload')
var message = document.getElementById('msg')
var showPass = document.getElementById('showPass')
var passError = document.getElementById('passError')
var fNameError = document.getElementById('fNameError')
var email = document.getElementById('email')

// **************first name validation ***********
var first = fName.onkeyup = function () {

    var y = fName.value.length
    if (y <= 2) {
        fNameError.classList.remove('d-none')
        lName.setAttribute('disabled', '')
        return true;

    } else {
        lName.removeAttribute('disabled')
        fNameError.classList.add('d-none')
    }
    return true;
}
function fSubmit() {
    if (first == false) {
        console.log(5);
        return false;
    }
    return true;
}
fSubmit()
// **************last name validation ***********
lName.onkeyup = function () {

    var y = lName.value.length
    if (y <= 2) {
        lNameError.classList.remove('d-none')
        return false;
    } else {
        lNameError.classList.add('d-none')
        return true;
    }
}
// ************** age validation ***********
age.onkeyup = function () {

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
pass.onkeyup = function () {

    var y = pass.value.length
    if (y <= 6) {
        passError.textContent = 'your password is week'
        passError.classList.remove('d-none')
        passError.classList.remove('text-success')
        passError.classList.remove('bg-light')
        passError.classList.remove('text-secondary')
        return false;


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
    if (y <= 20) {
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
function checkCountry() {
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
