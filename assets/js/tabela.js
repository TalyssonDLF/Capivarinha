
function main() {
    // Verifica se a página tem a tabela para exibir os dados
    const tabela = document.querySelector('#tabela tbody');
    const tabela2 = document.querySelector('#tabela');

    const tag = tabela2.getAttribute('data-tag');
    const headers = document.createElement('thead');
    const dados = document.createElement('tbody');

    tabela2.appendChild(headers);
    tabela2.appendChild(dados);

    // Recuperar os dados do localStorage
    let objetos = JSON.parse(localStorage.getItem(tag)) || [];

    const header = document.createElement('tr');
    for (const coluna of Object.keys(objetos[0])) {
        const valorHeader = document.createElement('th');
        valorHeader.innerText = coluna;
        header.appendChild(valorHeader);
    }
    headers.appendChild(header);

    // Para cada usuário, criamos uma nova linha (<tr>) e adicionamos três colunas (<td>), cada uma contendo o nome, email e senha do usuário.
    for (const objeto of objetos) {
        let linha = document.createElement('tr');

        for (const coluna of Object.keys(objeto)) {
            const data = document.createElement('td');
            data.innerText = objeto[coluna];
            linha.appendChild(data);
        }

        // Adicionando a nova linha na tabela
        dados.appendChild(linha);
    }
}

main();
