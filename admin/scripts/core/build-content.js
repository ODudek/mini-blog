let columns = 3;
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
                    $td.innerHTML = arg[i].login;
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

function buildAndDisplayUserDetails(authorizeUser) {
    let imageSrc = 'http://materializecss.com/images/yuna.jpg';
    let $li = document.querySelector('ul > li > div');
    let template = `<a href="#${authorizeUser.login}">
                    <img src="${imageSrc}" alt="image" class="circle">
                    </a>
                    <a href="#${authorizeUser.login}">
                    <span id="admin-panel-login" class="white-text name">${authorizeUser.login}</span>
                    </a>`;
    $li.innerHTML += template;
}

function buildAndDisplayMenu() {
    let $ul = document.querySelector('ul');
    let template = `<li><a href="#!">Log out</a></li>`;
    $ul.innerHTML += template;
    let $aHandler = document.querySelector('li > a');
    $aHandler.addEventListener('click', logOut);
}

function logOut() {
    clearSession();
    window.location.href = "..app/index.html";
}

function buildUserProfile(user) {
    let $content = document.querySelector('#content');
    $content.innerHTML += `<h1>User panel</h1>`
}