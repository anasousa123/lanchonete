function adicionar(nome, preco) {
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

carrinho.push({ nome, preco });

localStorage.setItem("carrinho", JSON.stringify(carrinho));

alert("Adicionado ao carrinho!");
}

function carregarCarrinho() {
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let lista = document.getElementById("lista");
let total = 0;

lista.innerHTML = "";

carrinho.forEach(item => {
let li = document.createElement("li");
li.textContent = item.nome + " - R$ " + item.preco;
lista.appendChild(li);
total += item.preco;
});

document.getElementById("total").textContent = total;
}

function finalizarPedido() {
let nome = document.getElementById("nome").value;

if (!nome) {
alert("Digite seu nome!");
return;
}

localStorage.removeItem("carrinho");

window.location.href = "sucesso.html";
}
