document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Função para exibir mensagens de erro ou sucesso
    function showMessage(message, type = 'error') {
        alert(`${type === 'error' ? 'Erro:' : 'Sucesso:'} ${message}`);
    }

    // Função para exibir mensagem de sucesso no DOM
    function showSuccessMessage(message) {
        const successMessage = document.createElement('div');
        successMessage.textContent = message;
        successMessage.style.position = 'fixed';
        successMessage.style.top = '10px';
        successMessage.style.right = '10px';
        successMessage.style.backgroundColor = '#4CAF50';
        successMessage.style.color = '#fff';
        successMessage.style.padding = '10px';
        successMessage.style.borderRadius = '5px';
        successMessage.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
        successMessage.style.zIndex = '1000';
        document.body.appendChild(successMessage);

        // Remove a mensagem após 3 segundos
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }

    // Validação de email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Registro de Usuário
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const password = document.getElementById('registerPassword').value;

            if (!isValidEmail(email)) {
                showMessage('Por favor, insira um e-mail válido.');
                return;
            }

            if (password.length < 6) {
                showMessage('A senha deve ter pelo menos 6 caracteres.');
                return;
            }

            // Recupera usuários do Local Storage
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Verifica se o e-mail já está cadastrado
            if (users.some(user => user.email === email)) {
                showMessage('Este e-mail já está cadastrado.');
                return;
            }

            // Salva novo usuário
            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            showSuccessMessage('Cadastro realizado com sucesso!');
            registerForm.reset();
        });
    }

    // Login de Usuário
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const user = users.find(user => user.email === email && user.password === password);

            if (!user) {
                showMessage('E-mail ou senha incorretos.');
                return;
            }

            showMessage(`Bem-vindo, ${user.username}!`, 'success');
            loginForm.reset();

            // Fecha o modal de login
            document.getElementById('loginModal').style.display = 'none';

            // Redirecionar para a tela de jogos
            setTimeout(() => {
                window.location.href = '/public/tela_jogos.html'; // Altere para o caminho real da tela de jogos
            }, 500); // Pequeno delay para que o redirecionamento pareça natural
        });
    }

    // Alternar entre modais de login e cadastro
    const registerLink = document.getElementById('openRegisterFromLogin');
    const loginLink = document.getElementById('openLoginFromRegister');

    if (registerLink) {
        registerLink.addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById('loginModal').style.display = 'none';
            document.getElementById('registerModal').style.display = 'block';
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById('registerModal').style.display = 'none';
            document.getElementById('loginModal').style.display = 'block';
        });
    }
});