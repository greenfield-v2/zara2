import user from '../controller/userController';
import express from 'express'

const routeUser=express.Router();

routeUser.get('/users',user.getAllUsers)

routeUser.delete('/users/remove/:id',user.removeUser)

export default routeUser