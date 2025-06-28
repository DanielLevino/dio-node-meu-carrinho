
// adicionar
async function addItem(userCart, item){
    userCart.push(item);
}

// deletar
async function deleteItem(userCart, name){
    
    let index = await userCart.findIndex((item)=>item.name==name)
    if(index != -1){
        userCart.splice(index,1);
    }
}

//remove
async function removeItem(userCart, item) {
    const index = userCart.findIndex(i => i.name == item.name);
    if(index>=0){
        if(userCart[index].quantity > 1){
            userCart[index].quantity--;
            console.log(`removido 1 ${userCart[index].name} do carrinho`)
        }else {
            console.log(`O item ${userCart[index].name} será deletado.`)
            userCart.splice(index, 1)
        }
    }else{
        console.log("Item não encontrado")
    }
}
//calculate
async function calculateTotalValue(userCart) {
    let totalValue = userCart.reduce((total, item) => total + item.subtotal(),0);
    console.log("       =========================")
    console.log(`       TOTAL VALUE: $$ ${totalValue}\n`); // estudar mais reduce
}

async function displayCart(userCart) {
    console.log("Cart List:");
    userCart.forEach((item, index) => {
        console.log(`       ===========================
        ${index+1}.
        ${item.name} - $$ ${item.price} | 
        ${item.quantity}und | Subtotal: $$ ${item.subtotal()}`)
    });
}

export default {
    addItem,
    deleteItem,
    removeItem,
    calculateTotalValue,
    displayCart
}