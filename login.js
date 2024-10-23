document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores do formulário
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Recuperando dados armazenados no localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Verificando se o login é válido
    if (email === storedEmail && senha === storedPassword) {
      alert('Login bem-sucedido!');
      // Redireciona para a página de boas-vindas
      window.location.href = 'tela_jogos.html';
    } else {
      alert('Email ou senha incorretos.');
    }
  });