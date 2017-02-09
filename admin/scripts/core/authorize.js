function fetchUserList(successCallback, errorCallback) {
    $.ajax({
        type: 'GET',
        url: USERS_URL,
        dataType: 'json',
        contentType: 'application/json',
        success(response) {
            successCallback(response);
        },
        error(err) {
            console.error(err);
            errorCallback(err);
        }
    });
}

/**
 * @param {Array<Object>} users
 * @param {string} login
 * @param {string} password
 * @returns {Object|null}
 */
function getUserByCredentials(users, login, password) {
    return users.find((user) => {
        return user.login === login && user.password === password;
    });
}

/**
 * @param {Array<Object>} users
 * @param {string} login
 * @param {string} password
 * @returns {boolean}
 */
function isUserExist(users, login, password) {
    let userModel = getUserByCredentials(users, login, password);
    return Boolean(userModel);
}
