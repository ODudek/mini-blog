function setupInputs() {
    $regLogin.addEventListener('input', loginVerification);
    $regPassword.addEventListener('input', passwordVerification);
    $regPassword2.addEventListener('input', passwordVerification);
    $regEmail.addEventListener('input', mailVerification);
}

function changeStyle(arg, inputValue, input) {
    console.log(arg.length);
    console.log(arg);
    for (let i = 0; i < arg.length; i++) {
        if (arg[i].user == inputValue) {
            $label[0].setAttribute('data-error', 'This ' + input.name + ' is not available!');
            input.setAttribute('class', 'invalid');
            return;
        } else {
            $label[0].removeAttribute('data-error');
            $label[0].setAttribute('data-success', 'This ' + input.name + ' is available!');
            input.setAttribute('class', 'validate valid');
        }
    }
}

function loginVerification(arg) {
    $($regLogin).focusout(function () {
        let loginValue = $regLogin.value;
        changeStyle(arg, loginValue, $regLogin);
    });
}

function passwordVerification() {
    $($regPassword2).focusout(function () {
        let passwordValue = $regPassword.value;
        let password2Value = $regPassword2.value;
        if (passwordValue != password2Value) {
            $label[2].setAttribute('data-error', 'Passwords do not match!');
            $regPassword2.setAttribute('class', 'invalid');
            $regPassword.setAttribute('class', 'invalid');
        } else {
            $label[2].removeAttribute('data-error');
            $label[2].setAttribute('data-success', 'Passwords are correct!');
            $regPassword2.setAttribute('class', 'validate valid');
            $regPassword.setAttribute('class', 'validate valid');
        }
    });
}

function mailVerification() {
    $($regEmail).focusout(function () {
        $label[3].setAttribute('data-error', 'Invalid email address!');
        $regEmail.setAttribute('class', 'invalid');
        $label[3].setAttribute('data-success', 'Email address is correct!');
        $regEmail.setAttribute('class', 'validate valid');

    });
}

function formValue() {
    let login = $regLogin.getAttribute('class');
    let password = $regPassword2.getAttribute('class');
    if ((login = 'validate valid') && (password = 'validate valid')) {
        buildJson();
        postJson();
    }
}

function buildJson() {
    let user = {
        id: '',
        user: $regLogin.value,
        password: $regPassword2.value,
        email: $regEmail.value
    };
    newUser = JSON.stringify(user);
}
