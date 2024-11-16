const login = document.getElementById('login');

login.addEventListener('submit', event => {
    event.preventDefault();

 
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

   
    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const user = users.find(user => user.email === email && user.password === senha);

    if (!user) {
        alert('Email ou senha incorretos.');
        return;
    }

    localStorage.setItem('sessao', user);
    alert('Login bem-sucedido!');
    
    window.location.href = 'tela_jogos.html';
});
