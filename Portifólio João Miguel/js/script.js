
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

/* ===== Turn the "Leia Mais" button usable ===== */
// Selecionando todos os botões "Leia Mais"
var buttons = document.querySelectorAll('.read');

// Iterando sobre cada botão
buttons.forEach(function(button) {
    // Adicionando um ouvinte de evento de clique a cada botão
    button.addEventListener('click', function() {
        // Selecionando o parágrafo irmão do botão clicado
        var paragraph = this.previousElementSibling;
        
        // Verificando se o parágrafo está com a classe 'collapsed' (resumido) ou 'expanded' (expandido)
        if (paragraph.classList.contains('collapsed')) {
            // Se estiver resumido, expandir o texto e alterar o texto do botão
            paragraph.classList.remove('collapsed');
            paragraph.classList.add('expanded');
            this.textContent = 'Mostrar Menos';
        } else {
            // Se estiver expandido, resumir o texto e alterar o texto do botão
            paragraph.classList.remove('expanded');
            paragraph.classList.add('collapsed');
            this.textContent = 'Leia Mais';
        }
    });
});