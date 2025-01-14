document.addEventListener("DOMContentLoaded", () => {
const botaoAdicionar = document.getElementById("button");
const campoTexto = document.forms["listatarefas"]["listaritens"];
const listaOrdenada = document.querySelector("ol");

botaoAdicionar.addEventListener("click", () => {
const textoTarefa = campoTexto.value.trim();

if (textoTarefa !== "") {
    const itemLista = document.createElement("li");
    itemLista.textContent = textoTarefa;



itemLista.addEventListener("dblclick", () => {
    itemLista.classList.add("removendo");
    setTimeout(() => itemLista.remove(), 500);
});

    listaOrdenada.appendChild(itemLista); 
    campoTexto.value = ""; 
    
    } else {
    alert("Por favor, insira uma tarefa!"); 
    }

});
});