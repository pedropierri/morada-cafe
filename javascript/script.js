const headerPlaceholder = document.querySelector('header');
const footerPlaceholder = document.querySelector('footer');

fetch('../components/header.html')
    .then(resposta => resposta.text())
    .then(dados => {
        headerPlaceholder.innerHTML = dados;
    });

fetch('../components/footer.html')
    .then(resposta => resposta.text())
    .then(dados => {
        footerPlaceholder.innerHTML = dados;
    });