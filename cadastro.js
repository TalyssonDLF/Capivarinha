/*Esse evento garante que o código só seja executado após a página estar completamente carregada, evitando erros de referência a elementos que ainda não estão disponíveis no DOM.*/
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro');

    // Verifica se a página tem o formulário de cadastro
    if (form) {
        //Aqui, associamos um evento ao envio do formulário. Quando o botão de "Cadastrar" é clicado, essa função será executada.
        form.addEventListener('submit', function(event) {
            /*Previne o comportamento padrão do formulário, que é recarregar a página ao enviar. Isso permite que a gente trate o envio de forma programada, sem recarregar a página.*/
            event.preventDefault();

            // Obtendo os valores dos campos
            const name = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('Senha').value;
            const confirmsenha = document.getElementById('ConfirmaçãoSenha').value;

            /* Recuperar os dados existentes no localStorage
            O localStorage armazena dados como strings, então usamos JSON.parse() para converter essa string de volta em um array de objetos. Se não houver dados, a variável users recebe um array vazio ([]).
            */
            let users = JSON.parse(localStorage.getItem('users')) || [];

            /* Verificar se o e-mail já está cadastrado
            O método some() verifica se algum usuário da lista já possui o email informado. Se já houver um email igual, a função retorna true.
            */
            const emailExists = users.some(user => user.email === email);

            if (emailExists) {
                alert('Erro! Este e-mail já está cadastrado.');
                return;
            }

            if (confirmsenha === password) {
                /* Adicionar o novo cadastro à lista
                Se o email não estiver duplicado, o novo cadastro é adicionado ao array users com o método push(), criando um novo objeto {name, email, password}.*/
                users.push({
                    name: name,
                    email: email,
                    password: password
                });

                /* Salvar a lista atualizada no localStorage
                Como o localStorage só armazena strings, usamos JSON.stringify() para converter o array de objetos users de volta para uma string e a armazenamos sob a chave 'users'*/
                localStorage.setItem('users', JSON.stringify(users));

                alert('Cadastro realizado com sucesso!');

                /* Redirecionar para a página de login ou outra página
                Se o cadastro for bem-sucedido, redirecionamos o usuário para uma página de login ou outra, usando window.location.href*/
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
        /* Recuperar os dados do localStorage
        Assim como no código de cadastro, usamos JSON.parse(localStorage.getItem('users')) para obter os usuários já armazenados.*/
        let users = JSON.parse(localStorage.getItem('users')) || [];

        /* O método forEach() é usado para iterar sobre a lista de usuários.
        Para cada usuário, criamos uma nova linha (<tr>) e adicionamos três colunas (<td>), cada uma contendo o nome, email e senha do usuário.
        */
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
