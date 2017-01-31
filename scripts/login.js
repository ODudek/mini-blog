let $loginForm = document.getElementById('my-form');
$logLogin.addEventListener('input', loginVerification);

function changeStyle(arg, inputValue) {
    for (let i = 0; i < arg.length; i++) {
        if (arg[i].user == inputValue) {
            $label[0].setAttribute('data-success', 'Login is correct!');
            $logLogin.setAttribute('class', 'validate valid');
            return;
        } else {
            $label[0].removeAttribute('data-error');
            $label[0].setAttribute('data-error', 'Login is not correct!');
            $logLogin.setAttribute('class', 'invalid');
        }
    }
}

function loginVerification(arg) {
    $($logLogin).focusout(function () {
        let loginValue = $logLogin.value;
        changeStyle(arg, loginValue, $logLogin);
    });
}

function passwordVerification(arg) {
    $($logPassword).focusout(function () {
        let passwordValue = $logPassword.value;
        for (let i = 0; i < arg.length; i++) {
            if (arg[i].password == passwordValue) {
                $label[1].setAttribute('data-success', 'Password is correct!');
                $logPassword.setAttribute('class', 'validate valid');
                return;
            } else {
                $label[1].removeAttribute('data-error');
                $label[1].setAttribute('data-error', 'Password do not match!');
                $logPassword.setAttribute('class', 'invalid');
            }
        }
    });
}


$loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

});

json();