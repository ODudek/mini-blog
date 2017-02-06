let columns = 3;
let menuColumns = 2;
let tableText = [
    'Id', 'Login', 'Email'
];

function buildTable(arg) {
    let $tableDiv = document.getElementById('user-table');
    let $table = document.createElement('table');
    $table.setAttribute('class', 'highlight');
    $tableDiv.appendChild($table);
    let $thead = document.createElement('thead');
    $table.appendChild($thead);
    let $tbody = document.createElement('tbody');
    $table.appendChild($tbody);
    displayTable($thead, arg, $tbody);

}

function displayTable(thead, arg, tbody) {
    for (let i = 0; i < columns; i++) {
        let $th = document.createElement('th');
        $th.setAttribute('data-field', tableText[i]);
        $th.innerHTML = tableText[i];
        thead.appendChild($th);
    }
    for (let i = 0; i < columns; i++) {
        let $tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let $td = document.createElement('td');
            switch (j) {
                case 0:
                    $td.innerHTML = arg[i].id;
                    break;
                case 1:
                    $td.innerHTML = arg[i].user;
                    break;
                case 2:
                    $td.innerHTML = arg[i].email;
                    break;
            }

            $tr.appendChild($td);
        }
        tbody.appendChild($tr);
    }
}

function buildAndDisplayUserDetails() {
    let imageSrc = 'http://materializecss.com/images/yuna.jpg';
    let $li = document.querySelector('ul > li > div');
    let $a1 = document.createElement('a');
    $a1.setAttribute('href', '#!' + localStorage.login);
    $li.appendChild($a1);
    let $img = document.createElement('img');
    $img.setAttribute('class', 'circle');
    $img.setAttribute('src', imageSrc);
    $a1.appendChild($img);
    let $a2 = document.createElement('a');
    $a2.setAttribute('href', '#!' + localStorage.login);
    $li.appendChild($a2);
    let $span = document.createElement('span');
    $span.setAttribute('id', 'admin-panel-login');
    $span.setAttribute('class', 'white-text name');
    $span.innerHTML = localStorage.login;
    $a2.appendChild($span);
}

function buildAndDisplayMenu() {
    let $ul = document.querySelector('ul');
    for (let i = 1; i <= menuColumns; i++) {
        let $li = document.createElement('li');
        $ul.appendChild($li);
        let $a = document.createElement('a');
        $a.setAttribute('href', '#!');
        $a.innerHTML = i + ' Sidebar Link';
        $li.appendChild($a);
    }
}

function getDateFromJson() {
    $.ajax({
        type: "GET",
        url: URL,
        dataType: "json",
        success(arg) {
            buildTable(arg);
            buildAndDisplayUserDetails();
            buildAndDisplayMenu();
        },
        error(er){
            console.log(er);
            $form.innerHTML = 'nie udalo zaladowac sie jsona';
        },
        contentType: "application/json"
    });
}

getDateFromJson();