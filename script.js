// Seleciona os elementos do modal e botões
const modal = document.getElementById('loginModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close');

// Abre o modal de login ao clicar no botão "Entrar"
openModalBtn.onclick = function () {
    modal.style.display = 'block';
};

// Fecha o modal ao clicar no "X"
closeModalBtn.onclick = function () {
    modal.style.display = 'none';
};

// Fecha o modal ao clicar fora da área de conteúdo
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Lógica básica para submissão do formulário de login
const loginForm = document.getElementById('loginForm');
loginForm.onsubmit = function (event) {
    event.preventDefault(); // Evita o recarregamento da página
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Exemplo de validação simples
    if (username === 'admin' && password === '1234') {
        alert('Login bem-sucedido!');
        modal.style.display = 'none'; // Fecha o modal após o login
    } else {
        alert('Usuário ou senha incorretos.');
    }
};