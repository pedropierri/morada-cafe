document.addEventListener('DOMContentLoaded', () => {
    
    // Função que ativa a lógica do menu hamburger
    const activateHamburgerMenu = () => {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const nav = document.querySelector('header nav');

        if (hamburgerMenu && nav) {
            hamburgerMenu.addEventListener('click', () => {
                // O toggle adiciona a classe se ela não existir e remove se já existir
                nav.classList.toggle('active');
                hamburgerMenu.classList.toggle('active');
            });
        }
    };

    // Chamamos a função diretamente assim que o documento carregar
    activateHamburgerMenu();
    
});