let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function add(nome, preco){
  carrinho.push({nome, preco});
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Adicionado!");
}

if(document.getElementById("lista")){
  let lista = document.getElementById("lista");
  let total = 0;

  carrinho.forEach(i=>{
    lista.innerHTML += `<p>${i.nome} - R$ ${i.preco}</p>`;
    total += i.preco;
  });

  document.getElementById("total").innerText = "Total: R$ " + total;
}

function finalizar(){
  localStorage.removeItem("carrinho");
  alert("Pedido enviado!");
  location.href="status.html";
}