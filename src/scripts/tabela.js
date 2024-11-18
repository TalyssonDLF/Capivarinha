
function deleteTableEntry(tag, index) {
    let data = JSON.parse(localStorage.getItem(tag) ?? '[]') || [];

    data.splice(index, 1);
    console.log(tag, index);
    console.log(data);

    localStorage.setItem(tag, JSON.stringify(data));

    window.location.reload();
}

function main() {
    const tabela = document.querySelector('#tabela');

    const tag = tabela.getAttribute('data-tag');
    const headers = document.createElement('thead');
    const dados = document.createElement('tbody');

    tabela.appendChild(headers);
    tabela.appendChild(dados);

    const isAdmin = JSON.parse(localStorage.getItem('sessao')).Email == 'admin';

    let objetos = JSON.parse(localStorage.getItem(tag)) || [];

    const header = document.createElement('tr');
    for (const coluna of Object.keys(objetos[0])) {
        const valorHeader = document.createElement('th');
        valorHeader.innerText = coluna;
        header.appendChild(valorHeader);
    }
    if (isAdmin) {
        // const colunaUpdate = document.createElement('th');
        // colunaUpdate.innerText = 'Update'
        // header.appendChild(colunaUpdate);

        const colunaDelete = document.createElement('th');
        colunaDelete.innerText = 'Delete'
        header.appendChild(colunaDelete);
    }
    headers.appendChild(header);

    let index = 0;
    for (const objeto of objetos) {
        let linha = document.createElement('tr');
        for (const coluna of Object.keys(objeto)) {
            const data = document.createElement('td');
            data.innerText = objeto[coluna];
            linha.appendChild(data);
        }
        if (isAdmin) {
            // const botaoUpdate = document.createElement('td');
            // botaoUpdate.innerText = 'Delete';
            // linha.appendChild(botaoUpdate);
            // botaoUpdate.addEventListener('click', updateTableEntry.bind(null, tag, index));

            const celulaDelete = document.createElement('td');
            const botaoDelete = document.createElement('button');
            botaoDelete.classList.add('button')
            botaoDelete.innerText = 'Delete';
            celulaDelete.appendChild(botaoDelete);
            botaoDelete.addEventListener('click', deleteTableEntry.bind(null, tag, index));
            linha.appendChild(celulaDelete);
        }
        dados.appendChild(linha);
        index++;
    }
}

main();
