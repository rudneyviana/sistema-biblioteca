// Simulação das funções do Node.js para o ambiente de navegador
let biblioteca = [];

// Carregar dados iniciais do localStorage
function carregarBiblioteca() {
    const dados = localStorage.getItem('biblioteca');
    if (dados) {
        biblioteca = JSON.parse(dados);
    } else {
        // Dados iniciais de exemplo
        biblioteca = [
            {
                "titulo": "Primeiro Livro",
                "autor": "Eu mesmo",
                "ano": "2025",
                "quantidade": 1
            },
            {
                "titulo": "Segundo livro",
                "autor": "Eu de novo",
                "ano": "2025",
                "quantidade": 345
            }
        ];
        salvarBiblioteca();
    }
    return biblioteca;
}

// Salvar dados no localStorage
function salvarBiblioteca() {
    localStorage.setItem('biblioteca', JSON.stringify(biblioteca));
}

// Função para mostrar alertas
function mostrarAlerta(mensagem, tipo) {
    const alertContainer = document.getElementById('alert-container');
    const alert = document.createElement('div');
    alert.className = `alert alert-${tipo}`;
    alert.textContent = mensagem;
    alertContainer.appendChild(alert);

    // Remover o alerta após 5 segundos
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// Função para mostrar uma seção específica
function showSection(sectionId) {
    // Esconder todas as seções
    document.querySelectorAll('.content').forEach(section => {
        section.classList.add('hidden');
    });

    // Mostrar a seção solicitada
    document.getElementById(sectionId).classList.remove('hidden');

    // Ações específicas para cada seção
    if (sectionId === 'relatorio') {
        gerarRelatorio();
    } else if (sectionId === 'excluir') {
        preencherSelectLivros();
    }
}

// Cadastrar Livro (adaptado para formulário HTML)
document.getElementById('cadastro-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);

    const livro = {
        titulo,
        autor,
        ano,
        quantidade
    };

    biblioteca.push(livro);
    salvarBiblioteca();

    mostrarAlerta('Livro cadastrado com sucesso!', 'success');
    document.getElementById('cadastro-form').reset();

    // Verificar regra de negócio: estoque alto
    const totalLivros = biblioteca.reduce((soma, livro) => soma + livro.quantidade, 0);
    if (totalLivros > 20) {
        mostrarAlerta('Alerta: Estoque alto! Total de livros: ' + totalLivros, 'warning');
    }
});

// Listar Livros
function listarLivros() {
    showSection('listagem');
    const listagemContent = document.getElementById('listagem-content');

    if (biblioteca.length === 0) {
        listagemContent.innerHTML = '<p>Nenhum livro cadastrado!</p>';
        return;
    }

    listagemContent.innerHTML = '';
    biblioteca.forEach((livro, index) => {
        const livroElement = document.createElement('div');
        livroElement.className = 'book-item';
        livroElement.innerHTML = `
                    <h3>${livro.titulo}</h3>
                    <p><strong>Autor:</strong> ${livro.autor}</p>
                    <p><strong>Ano:</strong> ${livro.ano}</p>
                    <p><strong>Quantidade:</strong> ${livro.quantidade}</p>
                `;
        listagemContent.appendChild(livroElement);
    });
}

// Calcular Total
function calcularTotal() {
    showSection('total');
    const totalContent = document.getElementById('total-content');

    const total = biblioteca.reduce((soma, livro) => soma + livro.quantidade, 0);
    totalContent.innerHTML = `<p>Total de livros na biblioteca: ${total}</p>`;

    // Verificar regra de negócio: estoque alto
    if (total > 20) {
        mostrarAlerta('Alerta: Estoque alto! Total de livros: ' + total, 'warning');
    }
}

// Gerar Relatório
function gerarRelatorio() {
    const relatorioContent = document.getElementById('relatorio-content');

    if (biblioteca.length === 0) {
        relatorioContent.innerHTML = '<p>Nenhum livro para gerar relatório.</p>';
        return;
    }

    let html = `
                <h3>Relatório Completo da Biblioteca</h3>
                <div class="book-list">
            `;

    let total = 0;
    biblioteca.forEach((livro, index) => {
        html += `
                    <div class="book-item">
                        <h3>Livro ${index + 1}: ${livro.titulo}</h3>
                        <p><strong>Autor:</strong> ${livro.autor}</p>
                        <p><strong>Ano:</strong> ${livro.ano}</p>
                        <p><strong>Quantidade:</strong> ${livro.quantidade}</p>
                    </div>
                `;
        total += livro.quantidade;
    });

    html += `</div><p><strong>TOTAL DE LIVROS: ${total}</strong></p>`;
    relatorioContent.innerHTML = html;

    // Verificar regra de negócio: estoque alto
    if (total > 20) {
        mostrarAlerta('Alerta: Estoque alto! Total de livros: ' + total, 'warning');
    }
}

// Preencher select para exclusão
function preencherSelectLivros() {
    const select = document.getElementById('livro-select');
    select.innerHTML = '';

    if (biblioteca.length === 0) {
        select.innerHTML = '<option value="">Nenhum livro disponível</option>';
        return;
    }

    biblioteca.forEach((livro, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${livro.titulo} (${livro.autor})`;
        select.appendChild(option);
    });
}

// Excluir livro selecionado
function excluirLivroSelecionado() {
    const select = document.getElementById('livro-select');
    const indice = parseInt(select.value);

    if (isNaN(indice) || indice < 0 || indice >= biblioteca.length) {
        mostrarAlerta('Selecione um livro válido para excluir.', 'danger');
        return;
    }

    const livroRemovido = biblioteca.splice(indice, 1)[0];
    salvarBiblioteca();

    mostrarAlerta(`Livro "${livroRemovido.titulo}" removido com sucesso!`, 'success');
    preencherSelectLivros();
}

// Inicializar a aplicação
window.onload = function () {
    biblioteca = carregarBiblioteca();
};
