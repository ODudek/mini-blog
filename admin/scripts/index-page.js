function adminPanel() {
    checkUserFromSession((users, authorizeUser) => {
        buildTable(users);
        buildAndDisplayUserDetails(authorizeUser);
        buildAndDisplayMenu();
        setupRouting();
    });
}

window.addEventListener('storage', () => {
    logOut();
});

function setupRouting() {
    let $a = document.querySelectorAll('a');
    let $image = $a[0];
    let $loginText = $a[1];
    $image.addEventListener('click', routing);
    $loginText.addEventListener('click', routing);
}

function clearContent() {
    let $content = document.querySelector('#content');
    $content.innerHTML = '';
}

function routing() {
    let router = new Grapnel({pushState : true });
    Grapnel.listen({
        ':id': function (req) {
            console.log(req);
            clearContent();
            buildUserProfile();
        }
    });
}
adminPanel();