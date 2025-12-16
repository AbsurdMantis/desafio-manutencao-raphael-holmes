const botao = document.getElementById('meuBotao');

function avisar() {
    alert("Você clicou no botão!");
}

if (botao) {
    botao.addEventListener('click', avisar);
} else {
    console.error("Elemento com ID 'meuBotao' nao encontrado");
}