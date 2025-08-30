# Sistema de Gerenciamento de Biblioteca

Um sistema web para gerenciamento de biblioteca desenvolvido em JavaScript puro, HTML e CSS.

<img width="1919" height="1013" alt="image" src="https://github.com/user-attachments/assets/9a64daf0-25a9-4c89-9584-1f85c571d145" />


## 📋 Funcionalidades

- 📖 Cadastro de livros (título, autor, ano, quantidade)
- 📚 Listagem de todos os livros cadastrados
- 🧮 Cálculo do total de livros na biblioteca
- 📊 Geração de relatório completo
- 🗑️ Exclusão de livros
- 💾 Armazenamento local dos dados (localStorage)
- 📱 Interface responsiva

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage para persistência de dados

## 🚀 Como Executar

1. Clone ou faça o download do repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. O sistema estará pronto para uso

## 📁 Estrutura do Projeto

```
|-- assets/
|   |-- Book Plus.svg      (Ícone para adicionar livros)
|   |-- Book.svg           (Ícone de livro individual)
|   |-- Books.svg          (Ícone para listagem de livros)
|   |-- Calculator.svg     (Ícone para cálculo de total)
|   |-- favicon.ico        (Ícone da página)
|   |-- Scroll.svg         (Ícone para relatório)
|   |-- Trash.svg          (Ícone para exclusão)
|-- css/
|   |-- style.css          (Estilos da aplicação)
|-- js/
|   |-- script.js          (Lógica da aplicação)
|-- index.html             (Página principal)
```

## 🎨 Design

O sistema possui uma interface limpa e intuitiva com:
- Layout responsivo que se adapta a diferentes tamanhos de tela
- Cores agradáveis e contrastantes para melhor experiência do usuário
- Ícones ilustrativos para cada funcionalidade
- Feedback visual para ações do usuário

## ⚙️ Funcionamento

1. Os dados são armazenados localmente no navegador usando localStorage
2. As informações persistem mesmo após fechar o navegador
3. Todas as operações são realizadas no cliente (não requer servidor)
4. Inclui validação de estoque alto (alerta quando total > 20 livros)

## 📝 Notas de Desenvolvimento

Este projeto foi desenvolvido como exemplo de aplicação web front-end com:
- Organização modular de código JavaScript
- Manipulação do DOM
- Trabalho com formulários e eventos
- Persistência de dados no navegador
- Design responsivo

## 🔮 Possíveis Melhorias Futuras

- Implementação de edição de livros cadastrados
- Categorização de livros por gênero
- Sistema de busca/filtro
- Exportação de relatórios em PDF
- Modo escuro/claro
- Backup dos dados em nuvem

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
