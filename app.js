let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// PRODUTOS EXEMPLO
const produtos = {
  lanches: [
    {nome:"X-Burger", preco:20, img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
    {nome:"X-Salada", preco:22, img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"}
  ],
  bebidas: [
    {nome:"Refrigerante", preco:8, img:"https://images.unsplash.com/photo-1581009137042-c552e485697a"}
  ],
  porcoes: [
    {nome:"Batata Frita", preco:15, img:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90"}
  ]
};

function carregarProdutos(){

  let categoria = localStorage.getItem("categoria");
  let lista = document.getElementById("lista");
  let titulo = document.getElementById("titulo");

  if(!lista) return;

  titulo.innerText = categoria.toUpperCase();

  let html = "";

  produtos[categoria].forEach(p=>{
    html += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco}</p>
        <button onclick="add('${p.nome}', ${p.preco})">Adicionar</button>
      </div>
    `;
  });

  lista.innerHTML = html;
}

function add(nome, preco){
  carrinho.push({nome, preco});
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Adicionado!");
}

carregarProdutos();