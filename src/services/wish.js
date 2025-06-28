// adicionar item na lista de desejo
async function addItem(wishList, item) {
    wishList.push(item)
    console.log(`${item.name} adicionado a lista de desejos`)
}

// remover item da lista de desejo
async function removeItem(wishList, item) {
    let index = wishList.findIndex(i=>i.name==item.name)
    
    if(index >= 0) {
        wishList.splice(index, 1);
    }
}


// mostrar itens da lista de desejo
async function listItems(wishList){
    console.log("       Lista de desejos");
    if(wishList.length > 0){
        wishList.forEach((item, index) => {
        console.log(`       =======================
        ${index+1}.
        ${item.name} - $$ ${item.price}`)
        });
    }else {
        console.log("       lista vazia!")
    }
}

// alertar caso o valor do item esteja abaixo do limite
/**
 * Alertar caso o preco de um item esteja abaixo do desejado,
 * porém só deve alertar se o item estiver na lista de desejo.
 * 
 * @param {Array} wishList lista de desejo que deve conter o item
 * @param {Object} item item do qual o preço será verificado
 * @param {number} value preco que o item deve atingir para gerar o alerta
 */
async function alertPrice(wishList, item, value){
    let index = wishList.findIndex(i=>i.name== item.name);

    if(index > -1){
        if(item.price <= value){
            console.log(`
                ${item.name} com valor menor que o esperado!`)
        } else {
            console.log(`
                ${item.name} ainda está caro`)
        }
    }
}

export default {
    addItem,
    removeItem,
    listItems,
    alertPrice
}