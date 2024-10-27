function main() {
    const logo = document.querySelector('#haze');
    const texto = document.querySelector('#logo');

    logo?.addEventListener('click', () => {
        window.location.href = 'pagina_inicial.html';
    });

    texto?.addEventListener('click', () => {
        window.location.href = 'pagina_inicial.html';
    });
}

main();
