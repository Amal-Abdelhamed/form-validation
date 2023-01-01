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


// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });
function validateInputs() {
    if (v1 == v2 ==v3 ==v4 ==v5 ==v6 ==v7==v8== false ) {
        return false;
    }else{
        alert('your application submitted successfully')
    }
}
// **************first name validation ***********
var v1 = fName.onkeyup = function () {

    var y = fName.value.length
    if (y < 2) {
        fNameError.classList.remove('d-none')
        lName.setAttribute('disabled', '')
        return v1 = false;

    } else {
        lName.removeAttribute('disabled')
        fNameError.classList.add('d-none')
        return v1 = true;
    }
}

// **************last name validation ***********
var v2 = lName.onkeyup = function () {

    var y = lName.value.length
    if (y < 2) {
        lNameError.classList.remove('d-none')
        return v2 = false;
    } else {
        lNameError.classList.add('d-none')
        return v2 = true;
    }
}
// ************** age validation ***********
var v3 = age.onkeyup = function () {

    var y = age.value
    if (y <= 18) {
        ageError.classList.remove('d-none')
        return v3 = false;
    } else {
        ageError.classList.add('d-none')
        return v3 = true;
    }
}
// **************password validation ************
var v4 = pass.onkeyup = function () {

    var y = pass.value.length
    if (y <= 6) {
        passError.textContent = 'your password is week'
        passError.classList.remove('d-none')
        passError.classList.remove('text-success')
        passError.classList.remove('bg-light')
        passError.classList.remove('text-secondary')
        return v4 = false;


    } else if (y > 6 && y < 10) {
        passError.textContent = 'your password is medium'
        passError.classList.remove('d-none')
        passError.classList.add('text-secondary')
        passError.classList.remove('text-success')
        passError.classList.add('bg-light')
        return v4 = false;
    } else if (y >= 10) {
        passError.textContent = 'your password is strong'
        passError.classList.remove('d-none')
        passError.classList.add('text-success')
        passError.classList.add('bg-light')
        return v4 = true;
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
var v5 = message.onkeyup = function () {

    var y = message.value.length
    if (y < 20) {
        msgError.classList.remove('d-none')
        return v5 = false;
    } else {
        msgError.classList.add('d-none')
        return v5 = true;
    }
}
// **************file validation ***********

var v6 = checkFiles = function () {
    var fullPath = file.value;
    var fileName = fullPath.substring(fullPath.lastIndexOf('\\') + 1);
    var ext = fullPath.substring(fullPath.lastIndexOf('.') + 1);
    if (ext !== 'pdf') {
        fileError.textContent = 'cv must be pdf file';
        fileError.classList.remove('d-none')
        fileError.classList.remove('text-success')
        fileError.classList.remove('bg-light')
        return v6 = false;
    } else {
        fileError.textContent = fileName;
        fileError.classList.remove('d-none')
        fileError.classList.add('text-success')
        fileError.classList.add('bg-light')
        return v6 = true;
    }

}



// **************country validation ***********
var v7 = checkCountry = function () {
    if (document.myForm.country.value == '-1') {
        countryError.classList.remove('d-none')
        return v7 = false;
    } else {
        countryError.classList.add('d-none')
        return v7 = true
    }
}

// **************email validation ***********
var v8 = email.onkeyup = function vPass() {
    var x = email.value;
    var atindex = x.indexOf("@");
    var dotindex = x.lastIndexOf(".");
    if (atindex < 4 || dotindex - atindex < 3 || x.length - dotindex < 3) {
        emailError.classList.remove('d-none')
        return v8 = false;
    } else {
        emailError.classList.add('d-none')
        return v8 = true;
    }
}


// **************reset***********
function clearErrorMsgs() {
    var errorMessages = document.getElementsByClassName("errorMessage")
    for (var i of errorMessages) {
        i.classList.add('d-none')
    }
}
function emptyMsg(){
    message.value = ''

}