/* ===== Turns the menu hamburguer into a X ===== */
const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
}

/* Form Validation */
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';

    // Valores dos campos
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Verificação de erro
    var erro = false;

    // Verifica se o campo "nome" está preenchido
    if (name.trim() === '') {
        document.getElementById('nameError').style.display = 'inline';
        erro = true;
    }

    // Verifica se o campo "e-mail" está preenchido
    if (email.trim() === '') {
        document.getElementById('emailError').style.display = 'inline';
        erro = true;
    }

    // Verifica se o campo "mensagem" está preenchido
    if (message.trim() === '') {
        document.getElementById('messageError').style.display = 'inline';
        erro = true;
    }

     // Se não houver erros, mostra a confirmação
     if (!erro) {
        var confirmation = confirm('Tem certeza que deseja enviar o formulário?');

        if (confirmation) {
            // Se o usuário confirmar, mostra a mensagem de sucesso
            document.getElementById('successMessage').style.display = 'block';
        }
    }
});