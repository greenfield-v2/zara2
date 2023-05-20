import { Request,Response } from 'express';
import product from '../model/product';

const all=(req: Request, res: Response)=>{
    product.getAllProducts((err: any, results: any) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Internal server error' });
        }
    
        res.status(200).json({ products: results })
      })
}

const adult=(req: Request, res: Response)=>{
    product.getAdultCategory((err: any, results: any) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Internal server error' });
        }
    
        res.status(200).json({ products: results });
      })
}


const kids=(req: Request, res: Response)=>{
    product.getKidsCategory((err: any, results: any) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Internal server error' });
        }
    
        res.status(200).json({ products: results });
      })
}


const womens=(req: Request, res: Response)=>{
    product.getWomenCategory((err: any, results: any) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Internal server error' });
        }
    
        res.status(200).json({ products: results });
      })
}

const men=(req: Request, res: Response)=>{
    product.getMenCategory((err: any, results: any) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Internal server error' });
        }
    
        res.status(200).json({ products: results });
      })
}


const beauty=(req: Request, res: Response)=>{
    product.getBeauty((err: any, results: any) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Internal server error' });
        }
    
        res.status(200).json({ products: results });
      })
}

const newProduct=(req: Request, res: Response)=>{
    const {clothesName,image,category,price}=req.body
    product.addProduct([clothesName,image,category,price],(err,result)=>{
        if(err) res.json(err);
        res.json("created")
    })
}

const remove=(req: Request, res: Response)=>{
    product.removeProduct([req.params.id],(err,result)=>{
        if(err) res.json(err);
        res.json('deleted')
      })
}
const edit=(req: Request, res: Response)=>{
    const { id } = req.params;
    const { clothesName, image, price,category} = req.body;
    const updateValues = [clothesName, image, price, category,id];
    product.editProduct(updateValues,(err: any, result: any) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Internal server error' });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product updated successfully' });
      })
}

const oneProduct=(req: Request, res: Response)=>{
    product.getOneProduct([req.params.id],(err,result)=>{
        if(err) res.json(err);
        res.json(result)
  
    })
}

const search=(req: Request, res: Response)=>{
  const {name} = req.params;
  product.searchProduct([`%${name}%`], (err: any, results: any) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    res.status(200).json({ products: results });
  })
}

export default {
    all,
    adult,
    kids,
    womens,
    men,
    beauty,
    newProduct,
    remove,
    edit,
    oneProduct,
    search
}