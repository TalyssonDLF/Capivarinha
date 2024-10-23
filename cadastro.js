document.getElementById('cadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos campos
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('Senha').value;
    const confirmsenha = document.getElementById('ConfirmaçãoSenha').value;

    if(confirmsenha==password){


    // Salvando os dados no localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Cadastro realizado com sucesso!');

    // Redirecionar para a página de login
    window.location.href = 'login.html';
    }
    else{
        alert('Erro!');
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }
  });