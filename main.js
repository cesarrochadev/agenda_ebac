const form = document.getElementById('form-atividade');
let linhas = '';
const atividades = [];
form.addEventListener('submit', function (e) {
    e.preventDefault();
    addLinha()
    atualizaTabela()
});


function addLinha() {
    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('tel');
    if (atividades.includes(inputNome.value)) {
        alert(`Nome ${inputNome.value} ja cadastrado`)
    } else {
        atividades.push(inputNome.value);
        // notas.push(inputTel.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;
        linha += `</tr>`;
        linhas += linha;
    }

    inputNome.value = '';
    inputTel.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
