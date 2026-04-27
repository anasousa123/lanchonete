let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function addCarrinho(nome, preco) {
  carrinho.push({nome, preco});
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Adicionado ao carrinho!");
}

function carregarCarrinho() {
  let lista = document.getElementById("lista");
  let total = 0;

  carrinho.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.nome + " - R$ " + item.preco;
    lista.appendChild(li);
    total += item.preco;
  });

  document.getElementById("total").innerText = "Total: R$ " + total;
}

if (document.getElementById("lista")) {
  carregarCarrinho();
}