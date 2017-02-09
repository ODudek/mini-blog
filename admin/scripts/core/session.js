function createSession(userLogin, userPassword) {
    window.localStorage.setItem('user-hash', makeHash(userLogin, userPassword));
    window.localStorage.setItem('user', userLogin);
}

function clearSession() {
    window.localStorage.clear();
}

function checkUserFromSession(successCallback, errorCallback) {
    let storageHash = window.localStorage.getItem('user-hash');

    fetchUserList((users) => {
        let authorizeUser = users.find(({login, password}) => {
            return storageHash === makeHash(login, password);
        });

        let isUserAuthorized = Boolean(authorizeUser);

        if (isUserAuthorized) {
            successCallback(users, authorizeUser);
        } else {
            errorCallback();
        }
    });
}
