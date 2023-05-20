import { Request,Response } from 'express';
import cart from '../model/cart';

const allCarts=(req:Request,res:Response)=>{
    cart.getAllCarts((err,result)=>{
        if(err) res.json(err);
        res.json(result)
    })
}

const cartForUser=(req:Request,res:Response)=>{
    cart.getCartsOfUser([req.params.id],(err,results:any)=>{
        if(err) res.json(err)
        res.json(results)
        
      })
}

const toCart=(req:Request,res:Response)=>{
    const {user_id,product_id}=req.body
    cart.addCart([user_id,product_id],(err,result)=>{
        if(err) res.json(err);
        console.log(result)
        res.json({message:"product successfully added to your cart"})
    })
}

const remove=(req:Request,res:Response)=>{
    cart.removeCart([req.params.id],(err,result)=>{
        if(err) res.json(err);
        res.json('deleted')
      })
}


export default {
    allCarts,
    cartForUser,
    toCart,
    remove
}