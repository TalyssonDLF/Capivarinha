// Seleção do botão de rolagem para o topo
const myButton = document.getElementById("seta");

// Exibe ou oculta o botão de rolagem ao rolar a página
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    myButton.style.display = window.scrollY > 20 ? "block" : "none";
}

// Rola a página para o topo ao clicar no botão
myButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Seleção dos modais e botões
const loginModal = document.getElementById('modal-login');
const cadastroModal = document.getElementById('cadastro-modal');
const openLoginButton = document.getElementById('open-login');
const openCadastroButton = document.getElementById('open-cadastro');
const openModalButton = document.getElementById('open-modal'); // Botão para abrir modal de login
const mainContent = document.querySelector('main'); // Conteúdo para aplicar blur
const closeButtons = document.querySelectorAll('.close');

// Função para abrir um modal e aplicar blur no fundo
function openModal(modal) {
    modal.style.display = 'flex';
    mainContent.classList.add('blur'); // Aplica blur ao fundo
}

// Função para fechar o modal e remover o blur
function closeModal(modal) {
    modal.style.display = 'none';
    mainContent.classList.remove('blur'); // Remove blur ao fechar
}

// Adiciona evento para fechar o modal ao clicar no botão de fechar (X)
closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal'); // Encontra o modal correspondente
        closeModal(modal);
    });
});

// Abre o modal de login ao clicar no botão "Entrar"
openModalButton.addEventListener('click', () => {
    openModal(loginModal);
});

// Alterna para o modal de cadastro ao clicar em "Cadastre-se"
openCadastroButton.addEventListener('click', (event) => {
    event.preventDefault();
    closeModal(loginModal);
    openModal(cadastroModal);
});

// Alterna para o modal de login ao clicar em "Já tem conta? Login"
openLoginButton.addEventListener('click', (event) => {
    event.preventDefault();
    closeModal(cadastroModal);
    openModal(loginModal);
});

// Fecha o modal ao clicar fora do conteúdo do modal
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        closeModal(loginModal);
    } else if (event.target === cadastroModal) {
        closeModal(cadastroModal);
    }
});
