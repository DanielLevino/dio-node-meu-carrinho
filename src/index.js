import createItem from "./services/item.js"
import cart from "./services/cart.js"

const myCart = [];
const myWish = [];

console.log("Welcome to your Items Cart");

// criando itens
const item1 = await createItem("boneco", 1.99, 3);
const item2 = await createItem("bola", 9.99, 10);


// adicionando items ao carrinho
await cart.addItem(myCart, item1);
await cart.addItem(myCart, item2);

// deletando itens do carrinho
await cart.deleteItem(myCart, item1)
await cart.deleteItem(myCart, item2)

//removendo 1 item
await cart.removeItem(myCart, item1);

// listando itens do carrinho
await cart.displayCart(myCart);

// mostrando valor total do carrinho
await cart.calculateTotalValue(myCart)



//console.log(myCart);