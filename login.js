document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtendo os valores do formulário
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Recuperando a lista de usuários armazenada no localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Verificando se existe um usuário com o email e senha fornecidos
  const user = users.find(user => user.email === email && user.password === senha);

  if (user) {
    alert('Login bem-sucedido!');
    // Redireciona para a página de boas-vindas
    window.location.href = 'tela_jogos.html';
  } else {
    alert('Email ou senha incorretos.');
  }
});
