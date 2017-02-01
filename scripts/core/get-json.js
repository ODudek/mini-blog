json = function () {
    $.ajax({
        type: "GET",
        url: URL,
        dataType: "json",
        success(arg) {
            buildTable(arg);
        },
        error(er){
            console.log(er);
            $form.innerHTML = 'nie udalo zaladowac sie jsona';
        },
        contentType: "application/json"
    });
};
