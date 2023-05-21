import user  from '../model/user';
import { Request,Response } from 'express';

const getAllUsers=(req:Request,res:Response)=>{
    user.getAll((err,result)=>{
        if(err) res.json(err);
        res.json(result)
    })
}

  const removeUser=(req:Request,res:Response)=>{
    user.remove([Number(req.params.id)],(err,result)=>{
      if(err) res.json(err);
      res.json('deleted')})
  }
export default {getAllUsers,removeUser};
