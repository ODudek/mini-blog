function postJson() {
    $.ajax({
        type: "POST",
        url: URL,
        dataType: "json",
        data: newUser,
        success(arg) {
            console.log(arg);
        },
        error(error){
            console.log(error);
        },
        contentType: "application/json"
    });
}
