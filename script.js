let carrinho = [];
let total = 0;

function adicionar(nome, preco) {
carrinho.push({ nome, preco });
total += preco;

atualizarCarrinho();
}

function atualizarCarrinho() {
let lista = document.getElementById("carrinho");
lista.innerHTML = "";

carrinho.forEach(item => {
let li = document.createElement("li");
li.textContent = item.nome + " - R$ " + item.preco;
lista.appendChild(li);
});

document.getElementById("total").textContent = total;
}

function finalizarPedido() {
let nome = document.getElementById("nome").value;
let tipo = document.getElementById("tipo").value;
let endereco = document.getElementById("endereco").value;
let pagamento = document.getElementById("pagamento").value;

if (carrinho.length === 0) {
alert("Carrinho vazio!");
return;
}

alert("Pedido enviado!\n\nNome: " + nome +
"\nTipo: " + tipo +
"\nPagamento: " + pagamento +
"\nTotal: R$ " + total);

// depois vamos enviar pro Firebase
}
