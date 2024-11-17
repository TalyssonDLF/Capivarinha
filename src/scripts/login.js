document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

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

        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }

    function showMessage(message, type = 'error') {
        alert(`${type === 'error' ? 'Erro:' : 'Sucesso:'} ${message}`);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const emailOrUsername = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            // Verificação de login de administrador
            if (emailOrUsername === 'admin' && password === 'admin') {
                showSuccessMessage('Login como administrador bem-sucedido!');
                setTimeout(() => {
                    window.location.href = '/public/tela_jogos.html'; // Página de administração
                }, 500);
                return;
            }

            // Verificação de usuários normais
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.email === emailOrUsername && user.password === password);

            if (!user) {
                showMessage('E-mail/Usuário ou senha incorretos.');
                return;
            }

            showSuccessMessage(`Bem-vindo, ${user.username}!`);
            loginForm.reset();

            document.getElementById('loginModal').style.display = 'none';
            setTimeout(() => {
                window.location.href = '/public/tela_jogos.html'; // Tela de jogos
            }, 500);
        });
    }
});