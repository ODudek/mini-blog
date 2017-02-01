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
    for (let i = 0; i < columns; i++) {
        let $th = document.createElement('th');
        $th.setAttribute('data-field', tableText[i]);
        $th.innerHTML = tableText[i];
        $thead.appendChild($th);
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
        $tbody.appendChild($tr);
    }
}

function displayLoginAndEmail(arg) {

}
json();