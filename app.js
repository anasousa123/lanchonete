let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function add(nome, preco){
  carrinho.push({nome, preco});
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Adicionado!");
