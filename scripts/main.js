$form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (json.error()) {
        alert('nie udalo sie polaczyc z baza danych');
    } else {
        formValue();

    }
});

setupInputs();
json();
console.log(json.error(error));