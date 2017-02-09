'use strict';

let $form = document.querySelector('#my-form');
let $userLogin = document.querySelector('#login');
let $userPassword = document.querySelector('#password');
let $label = document.querySelectorAll('div > label');

function setupSignInForm() {

    function successHandler(response) {
        let isAuthorize = isUserExist(response, $userLogin.value, $userPassword.value);

        if (isAuthorize) {
            validStyle();
            createSession($userLogin.value, $userPassword.value);
            window.location.href = 'index.html';
        } else {
            invalidStyle();
        }
    }

    function errorHandler() {
        $form.innerHTML = 'nie udalo zaladowac sie jsona';
    }

    $form.addEventListener('submit', (err) => {
        err.preventDefault();
        fetchUserList(successHandler, errorHandler);
    });
}

function validStyle() {
    $label[0].setAttribute('data-success', 'Login and password are correct!');
    $userLogin.setAttribute('class', 'validate valid');
    $label[1].setAttribute('data-success', 'Login and password are correct!');
    $userPassword.setAttribute('class', 'validate valid');
}

function invalidStyle() {
    $label[0].removeAttribute('data-error');
    $label[0].setAttribute('data-error', 'Login or password is not correct!');
    $userLogin.setAttribute('class', 'invalid');
    $label[1].removeAttribute('data-error');
    $label[1].setAttribute('data-error', 'Login or password is not correct!');
    $userPassword.setAttribute('class', 'invalid');
}

setupSignInForm();
