document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtendo os valores do formulário
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  /* Recuperando a lista de usuários armazenada no localStorage
  Recupera os dados de usuários armazenados no localStorage. Se não houver nenhum, retorna um array vazio.*/
  const users = JSON.parse(localStorage.getItem('users')) || [];

  /* Verificando se existe um usuário com o email e senha fornecidos
  O método find() percorre o array de usuários e verifica se existe algum usuário com o email e a senha fornecidos.*/
  const user = users.find(user => user.email === email && user.password === senha);

  if (user) {
    alert('Login bem-sucedido!');
    // Redireciona para a página de boas-vindas
    window.location.href = 'tela_jogos.html';
  } else {
    alert('Email ou senha incorretos.');
  }
});
