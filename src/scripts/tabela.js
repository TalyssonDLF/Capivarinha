
function main() {
    
    const tabela = document.querySelector('#tabela tbody');
    const tabela2 = document.querySelector('#tabela');

    const tag = tabela2.getAttribute('data-tag');
    const headers = document.createElement('thead');
    const dados = document.createElement('tbody');

    tabela2.appendChild(headers);
    tabela2.appendChild(dados);

    
    let objetos = JSON.parse(localStorage.getItem(tag)) || [];

    const header = document.createElement('tr');
    for (const coluna of Object.keys(objetos[0])) {
        const valorHeader = document.createElement('th');
        valorHeader.innerText = coluna;
        header.appendChild(valorHeader);
    }
    headers.appendChild(header);

    
    for (const objeto of objetos) {
        let linha = document.createElement('tr');

        for (const coluna of Object.keys(objeto)) {
            const data = document.createElement('td');
            data.innerText = objeto[coluna];
            linha.appendChild(data);
        }

        
        dados.appendChild(linha);
    }
}

main();
