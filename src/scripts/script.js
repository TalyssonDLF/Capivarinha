const mainContent = document.getElementById('mainContent'); 
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

const openModalBtn = document.getElementById('openModalBtn'); // Botão de abrir login
const closeModalBtns = document.querySelectorAll('.close'); // Todos os botões de fechar modal

const openRegisterLink = document.getElementById('openRegisterFromLogin'); // Link "Cadastre-se"
const openLoginLink = document.getElementById('openLoginFromRegister'); // Link "Faça login"

// Funções para abrir e fechar modais
function openModal(modal) {
    modal.style.display = 'block';
    mainContent.classList.add('blur');
}

function closeModal(modal) {
    modal.style.display = 'none';
    mainContent.classList.remove('blur');
}

// Eventos para abrir o modal de login
if (openModalBtn) {
    openModalBtn.addEventListener('click', () => openModal(loginModal));
}

// Eventos para fechar modais
closeModalBtns.forEach(button => {
    button.addEventListener('click', function () {
        const target = this.getAttribute('data-target'); // Identifica qual modal fechar
        if (target === 'loginModal') {
            closeModal(loginModal);
        } else if (target === 'registerModal') {
            closeModal(registerModal);
        }
    });
});

// Eventos para alternar entre login e cadastro
openRegisterLink.addEventListener('click', (event) => {
    event.preventDefault();
    closeModal(loginModal);
    openModal(registerModal);
});

openLoginLink.addEventListener('click', (event) => {
    event.preventDefault();
    closeModal(registerModal);
    openModal(loginModal);
});

// Fecha modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === loginModal) closeModal(loginModal);
    if (event.target === registerModal) closeModal(registerModal);
});


const scrollToTopBtn = document.getElementById('rollup');
scrollToTopBtn.style.display = 'none';
// Mostra ou esconde o botão com base na posição da rolagem
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) { // Mostra o botão após 300px de rolagem
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Rola suavemente para o topo quando o botão é clicado
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});