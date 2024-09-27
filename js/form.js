const form = document.querySelector('#form')

form.addEventListener('submit', function(e) {
    e.preventDefault(); //Esperar envio

    // Seleccionar los campos
    const name = document.querySelector('#name').value.trim();
    const password = document.querySelector('#passwd').value.trim();
    const terms = document.querySelector('#terms').checked;
    const errorMsg = document.querySelector('#error-msg');
    let errors = [];

    if (name === '') {
        errors.push('The name field is required.');
    }

    if (password.length < 6) {
        errors.push('The password must be at least 6 characters long.');
    }

    if (!terms) {
        errors.push('You must accept the Terms & Conditions and Privacy Policy.');
    }

    if (errors.length > 0) {
        errorMsg.innerHTML = errors.join('<br>');
    } else {
        errorMsg.innerHTML = ''; 
        window.location.href = '../index.html';
    }
});

// Mostrar/ocultar la contraseña
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#passwd');

togglePassword.addEventListener('change', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
});
