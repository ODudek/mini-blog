if (checkSession()) {
    window.location.href = "index.html";
}

let $loginForm = document.getElementById('my-form');

$loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getLoginJson();
});

function getObjects(obj, key, val) {
    let objects = [];
    for (let i in obj) {
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[i] == val || i == key && val == '') {
            objects.push(obj);
        }
    }
    if (objects.length != 0) {
        validation(objects[0].user, objects[0].password);
    } else {
        invalidStyle();
    }
    return objects;
}

function validation(user, password) {
    let loginValue = $logLogin.value;
    let passwordValue = $logPassword.value;
    if ((user != loginValue) || (password != passwordValue)) {
        invalidStyle();
    } else {
        validStyle();
        createSession(user);
        setTimeout(function () {
            window.location.href = "index.html";
        }, 500)
    }
}

function validStyle() {
    $label[0].setAttribute('data-success', 'Login and password are correct!');
    $logLogin.setAttribute('class', 'validate valid');
    $label[1].setAttribute('data-success', 'Login and password are correct!');
    $logPassword.setAttribute('class', 'validate valid');
}

function invalidStyle() {
    $label[0].removeAttribute('data-error');
    $label[0].setAttribute('data-error', 'Login or password is not correct!');
    $logLogin.setAttribute('class', 'invalid');
    $label[1].removeAttribute('data-error');
    $label[1].setAttribute('data-error', 'Login or password is not correct!');
    $logPassword.setAttribute('class', 'invalid');
}

function getLoginJson() {
    $.ajax({
        type: "GET",
        url: URL,
        dataType: "json",
        success(arg) {
            getObjects(arg, 'user', $logLogin.value);
        },
        error(er){
            console.log(er);
            $form.innerHTML = 'nie udalo zaladowac sie jsona';
        },
        contentType: "application/json"
    });
}

