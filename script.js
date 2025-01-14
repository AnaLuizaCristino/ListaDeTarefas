document.addEventListener("DOMContentLoaded", () => { // Aguarda o carregamento completo do DOM
    const botaoAdicionar = document.getElementById("button"); // Seleciona o botão de adicionar
    const campoTexto = document.forms["listatarefas"]["listaritens"]; // Seleciona o campo de entrada de texto
    const listaOrdenada = document.querySelector("ol"); // Seleciona a lista ordenada

    botaoAdicionar.addEventListener("click", () => { // Adiciona um evento de clique no botão
        const textoTarefa = campoTexto.value.trim(); // Obtém o texto do campo e remove espaços extras

        if (textoTarefa !== "") { // Verifica se o texto não está vazio
            const itemLista = document.createElement("li"); // Cria um novo item de lista
            itemLista.textContent = textoTarefa; // Define o texto do item de lista

            itemLista.addEventListener("dblclick", () => { // Adiciona um evento de duplo clique no item
                itemLista.classList.add("removendo"); // Adiciona a classe de remoção para animação
                setTimeout(() => itemLista.remove(), 500); // Remove o item após 0.5s
            });

            listaOrdenada.appendChild(itemLista); // Adiciona o item à lista
            campoTexto.value = ""; // Limpa o campo de entrada
        } else {
            alert("Por favor, insira uma tarefa!"); // Exibe um alerta caso o campo esteja vazio
        }
    });
});
