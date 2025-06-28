import createItem from "./services/item.js"
import cart from "./services/cart.js"
import wish from "./services/wish.js"

const myCart = [];
const myWish = [];

console.log("Welcome to your Items Cart");

// criando itens
const item1 = await createItem("boneco", 1.99, 3);
const item2 = await createItem("bola", 9.99, 10);
const item3 = await createItem("Iphone 16", 10000, 1)


// adicionando items ao carrinho
await cart.addItem(myCart, item1);
await cart.addItem(myCart, item2);

// adicionando item à lista de desejo
await wish.addItem(myWish, item3);

// deletando itens do carrinho
// await cart.deleteItem(myCart, item1.name)
// await cart.deleteItem(myCart, item2.name)

//removendo 1 item
await cart.removeItem(myCart, item1);

// listando itens do carrinho
await cart.displayCart(myCart);

// mostrando valor total do carrinho
await cart.calculateTotalValue(myCart);

// remover item da lista de desejos
// await wish.removeItem(myWish, item3);

// mostrando itens da lista de desejos
await wish.listItems(myWish);

//gerando alerta de preço
await wish.alertPrice(myWish, item3, 10000.00)



//console.log(myCart);