let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function addCarrinho(nome, preco){
  carrinho.push({nome, preco});
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Adicionado ao carrinho!");
}

function carregarCarrinho(){
  let lista = document.getElementById("lista");
  let total = 0;

  carrinho.forEach(item=>{
    lista.innerHTML += `<p>${item.nome} - R$ ${item.preco}</p>`;
    total += item.preco;
  });

  document.getElementById("total").innerText = "Total: R$ " + total;
}