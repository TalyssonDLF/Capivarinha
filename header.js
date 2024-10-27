function main() {
    const logo = document.querySelector('#logo');
    const titulo = document.querySelector('#haze');

    logo?.addEventListener('click', () => {
        window.location.href = 'pagina_inicial.html';
    });

    titulo?.addEventListener('click', () => {
        window.location.href = 'pagina_inicial.html';
    });
}

main();
