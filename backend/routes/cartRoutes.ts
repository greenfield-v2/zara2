import cart from '../controller/cartController';
import express from 'express'

const routeCart=express.Router();

routeCart.get('/cart',cart.allCarts);
routeCart.get('/cart/:id',cart.cartForUser)

routeCart.post('/cart',cart.toCart)

routeCart.delete('/cart/:id',cart.remove)


export default routeCart;