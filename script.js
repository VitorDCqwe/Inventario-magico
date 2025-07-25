const imagensItens = {
    "espada":"https://img.icons8.com/color/48/000000/sword.png",
    "poção":"https://img.icons8.com/color/48/000000/potion.png",
    "escudo":"https://img.icons8.com/color/48/000000/shield.png",
    "anel":"https://img.icons8.com/color/48/000000/diamond-ring.png",
    "livro":"https://img.icons8.com/color/48/000000/book.png"
};

let inventario = [];

const maxSlot = 10;

function adicionarItem() {
    let itemNome = document.getElementById("itemInput").value.toLowerCase();
    if (!imagensItens[itemNome]) {
        document.getElementById("mensagem").innerText = "Item não reconhecido!";
        return;
    }
    if (inventario.length >= maxSlot) {
        document.getElementById("mensagem").innerText = "Inventário Cheio!";
        return;
    }
    inventario.push(itemNome);
    atualizarInventario();
    document.getElementById("itemInput").value = "";
    document.getElementById("mensagem").innerText = "";
}

function removerItem(index) {
    inventario.splice(index, 1);
    atualizarInventario();
}

function atualizarInventario() {
    let container = document.getElementById("inventario");
    container.innerHTML = "";
    inventario.forEach((item, index) => {
        let slot = document.createElement("div");
        slot.className = "slot";
        slot.innerHTML = `<img src='${imagensItens[item]}' alt='${item}'> <button class = 'remover' onclick='removerItem(${index})'>X</button>`;
        container.appendChild(slot);
    });
}