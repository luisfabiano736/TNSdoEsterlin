let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });

    total += preco;

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("itensCarrinho");
    lista.innerHTML = "";

    carrinho.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(div);
    });

    document.getElementById("total").textContent = total.toFixed(2);
}

function finalizarCompra() {

    let mensagem = "Olá, finalizei minha compra!\nItens:\n";

    carrinho.forEach(item => {
        mensagem += `• ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    });

    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;

    const url = `https://wa.me/16982500873?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}
