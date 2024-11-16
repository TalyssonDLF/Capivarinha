
function main() {
    const form = document.getElementById('cadastro');

    
    if (form === null) {
        return;
    }

    
    form.addEventListener('submit', event => {
        
        event.preventDefault();

        
        const name = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('Senha').value;
        const confirmsenha = document.getElementById('ConfirmaçãoSenha').value;

        
        let users = JSON.parse(localStorage.getItem('users')) || [];

        
        const emailExists = users.some(user => user.email === email);

        if (emailExists) {
            alert('Erro! Este e-mail já está cadastrado.');
            return;
        }

        if (confirmsenha !== password) {   
            document.getElementById('errorMessage').style.display = 'block';
            return;
        }

        
        users.push({
            name: name,
            email: email,
            password: password,
            roleta: 0,
            capivara_voadora: 0
        });

        
        localStorage.setItem('users', JSON.stringify(users));

        alert('Cadastro realizado com sucesso!');

        
        window.location.href = 'login.html';
    });
}


document.addEventListener('DOMContentLoaded', main);
