let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function add(nome, preco){
  carrinho.push({nome, preco});
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Adicionado ao carrinho!");
}

function carregarCarrinho(){
  let lista = document.getElementById("lista");
  let totalEl = document.getElementById("total");

  if(!lista) return;

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach(i=>{
    lista.innerHTML += `<p>${i.nome} - R$ ${i.preco}</p>`;
    total += i.preco;
  });

  totalEl.innerText = "Total: R$ " + total;
}

carregarCarrinho();