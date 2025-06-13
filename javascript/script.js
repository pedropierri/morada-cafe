document.addEventListener('DOMContentLoaded', () => {

    const loadComponent = (selector, filePath) => {
        const placeholder = document.querySelector(selector);
        
        if (!placeholder) {
            return;
        }

        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar ${filePath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                placeholder.innerHTML = html;
                if (selector === 'header') {
                    activateHamburgerMenu();
                }
            })
            .catch(error => {
                console.error(error);
                placeholder.innerHTML = `<p style='color: red; text-align: center;'>Erro ao carregar componente.</p>`;
            });
    };

    // Função que ativa a lógica do menu
    const activateHamburgerMenu = () => {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const nav = document.querySelector('header nav');

        if (hamburgerMenu && nav) {
            hamburgerMenu.addEventListener('click', () => {
                nav.classList.toggle('active');
                hamburgerMenu.classList.toggle('active');
            });
        }
    };
    loadComponent('header', '../components/header.html');
    loadComponent('footer', '../components/footer.html');
});