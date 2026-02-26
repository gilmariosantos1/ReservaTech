let reservas = []; // Nossa "base de dados" temporária
const corpoTabela = document.getElementById('tabela-corpo');
const btnSalvar = document.getElementById('btn-salvar');

// FUNÇÃO PARA RENDERIZAR A TABELA
function renderizarTabela() {
    corpoTabela.innerHTML = "";
    
    reservas.forEach((res, index) => {
        const linha = `
            <tr>
                <td>${res.matricula}</td>
                <td>${res.numSerie}</td>
                <td><strong>${res.status}</strong></td>
                <td>
                    <button onclick="prepararEdicao(${index})" style="background: #1707ff; border: none; cursor: pointer;">✏️</button>
                    <button onclick="excluirReserva(${index})" style="background: #dc3545; color: white; border: none; cursor: pointer;">🗑️</button>
                </td>
            </tr>
        `;
        corpoTabela.innerHTML += linha;
    });
}


btnSalvar.addEventListener('click', () => {
    const index = document.getElementById('index-edicao').value;
    
    const novaReserva = {
        matricula: document.getElementById('matricula').value,
        data: document.getElementById('data-reserva').value,
        numSerie: document.getElementById('num-serie').value,
        motivo: document.getElementById('motivo').value,
        horaReserva: document.getElementById('hora-reserva').value,
        horaEntrega: document.getElementById('hora-entrega').value,
        status: document.getElementById('status-reserva').value
    };

    if (index === "") {
        reservas.push(novaReserva); 
    } else {
        reservas[index] = novaReserva; 
        document.getElementById('index-edicao').value = ""; 
        btnSalvar.innerText = "Salvar Reserva";
        btnSalvar.style.background = "#28a745";
    }

    limparFormulario();
    renderizarTabela();
});

function excluirReserva(index) {
    if (confirm("Tem certeza que deseja excluir esta reserva?")) {
        reservas.splice(index, 1);
        renderizarTabela();
    }
}

function prepararEdicao(index) {
    const res = reservas[index];
    
    document.getElementById('matricula').value = res.matricula;
    document.getElementById('data-reserva').value = res.data;
    document.getElementById('num-serie').value = res.numSerie;
    document.getElementById('motivo').value = res.motivo;
    document.getElementById('hora-reserva').value = res.horaReserva;
    document.getElementById('hora-entrega').value = res.horaEntrega;
    document.getElementById('status-reserva').value = res.status;
    
    document.getElementById('index-edicao').value = index; 
    btnSalvar.innerText = "Atualizar Registro";
    btnSalvar.style.background = "#007bff";
}

function limparFormulario() {
    const campos = ['matricula', 'data-reserva', 'num-serie', 'motivo', 'hora-reserva', 'hora-entrega'];
    campos.forEach(id => document.getElementById(id).value = "");
}