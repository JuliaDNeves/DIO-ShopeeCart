import createItem from './services/item.js';
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to Your Shopee Cart! \n")

//cria dois itens
const item1 = await createItem("hotweels ferrari", 20.99, 1)
const item2 = await createItem("hotweels lamborghini", 39.99, 3)

//adiciona dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)


await cartService.displaycart(myCart)

//remove dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name)
// await cartService.deleteItem(myCart, item1.name)

await cartService.calculateTotal(myCart);