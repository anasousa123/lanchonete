let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// ADICIONAR PRODUTO (com quantidade)
function addCarrinho(nome, preco) {
  preco = parseFloat(preco);

  const itemExistente = carrinho.find(item => item.nome === nome);

  if (itemExistente) {
    itemExistente.qtd += 1;
  } else {
    carrinho.push({ nome, preco, qtd: 1 });
  }

  salvarCarrinho();
  alert("Produto adicionado!");
}

// SALVAR NO LOCALSTORAGE
function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// CARREGAR CARRINHO
function carregarCarrinho() {
  const lista = document.getElementById("lista");
  const totalEl = document.getElementById("total");

  if (!lista) return;

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    const subtotal = item.preco * item.qtd;
    total += subtotal;

    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
      <span>${item.nome} (x${item.qtd})</span>
      <span>R$ ${subtotal.toFixed(2)}</span>
      <div>
        <button onclick="diminuir(${index})">-</button>
        <button onclick="aumentar(${index})">+</button>
        <button onclick="remover(${index})">🗑</button>
      </div>
    `;

    lista.appendChild(div);
  });

  totalEl.innerText = "Total: R$ " + total.toFixed(2);
}

// AUMENTAR QUANTIDADE
function aumentar(index) {
  carrinho[index].qtd++;
  salvarCarrinho();
  carregarCarrinho();
}

// DIMINUIR QUANTIDADE
function diminuir(index) {
  if (carrinho[index].qtd > 1) {
    carrinho[index].qtd--;
  } else {
    carrinho.splice(index, 1);
  }
  salvarCarrinho();
  carregarCarrinho();
}

// REMOVER ITEM
function remover(index) {
  carrinho.splice(index, 1);
  salvarCarrinho();
  carregarCarrinho();
}

// FINALIZAR PEDIDO WHATSAPP
function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  let msg = "🛒 *Novo Pedido*%0A%0A";
  let total = 0;

  carrinho.forEach(item => {
    const subtotal = item.preco * item.qtd;
    total += subtotal;

    msg += `• ${item.nome} (x${item.qtd}) - R$ ${subtotal.toFixed(2)}%0A`;
  });

  msg += `%0ATotal: R$ ${total.toFixed(2)}`;

  const numero = "5599999999999"; // SEU NÚMERO
  window.open(`https://wa.me/${numero}?text=${msg}`, "_blank");
}

// INICIAR
carregarCarrinho();