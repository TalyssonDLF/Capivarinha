document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro');

    // Verifica se a página tem o formulário de cadastro
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Obtendo os valores dos campos
            const name = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('Senha').value;
            const confirmsenha = document.getElementById('ConfirmaçãoSenha').value;

            // Recuperar os dados existentes no localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];

            // Verificar se o e-mail já está cadastrado
            const emailExists = users.some(user => user.email === email);

            if (emailExists) {
                alert('Erro! Este e-mail já está cadastrado.');
                return;
            }

            if (confirmsenha === password) {
                // Adicionar o novo cadastro à lista
                users.push({
                    name: name,
                    email: email,
                    password: password
                });

                // Salvar a lista atualizada no localStorage
                localStorage.setItem('users', JSON.stringify(users));

                alert('Cadastro realizado com sucesso!');

                // Redirecionar para a página de login ou outra página
                window.location.href = 'login.html';
            } else {
                document.getElementById('errorMessage').style.display = 'block';
                return;
            }
        });
    }

    // Verifica se a página tem a tabela para exibir os dados
    const tabela = document.querySelector('#tabela tbody');
    if (tabela) {
        // Recuperar os dados do localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Iterar sobre os usuários e adicionar uma nova linha para cada um
        users.forEach(function(user) {
            let nlinha = document.createElement('tr');

            let ncoluna1 = document.createElement('td');
            ncoluna1.innerText = user.name;
            nlinha.appendChild(ncoluna1);

            let ncoluna2 = document.createElement('td');
            ncoluna2.innerText = user.email;
            nlinha.appendChild(ncoluna2);

            let ncoluna3 = document.createElement('td');
            ncoluna3.innerText = user.password;
            nlinha.appendChild(ncoluna3);

            // Adicionando a nova linha na tabela
            tabela.appendChild(nlinha);
        });
    }
});
