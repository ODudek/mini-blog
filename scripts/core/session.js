function createSession(user) {
    localStorage.login = user;
    localStorage.loginUsed = user;
}

function checkSession() {
    if (localStorage.login) {
        window.location.href = "login.html";
        return true;
    } else {
        return false;
    }
}

function clearSession() {
    localStorage.clear();
}