
function main() {
    const usuario = localStorage.getItem('sessao');

    if (usuario === null || usuario === undefined) {
        window.location.href = 'login.html';
    }
}

main();
