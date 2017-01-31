json = function () {
    $.ajax({
        type: "GET",
        url: URL,
        dataType: "json",
        success(arg) {
            loginVerification(arg);
            passwordVerification(arg);
        },
        error(error){
            console.log(error);
        },
        contentType: "application/json"
    });
};
