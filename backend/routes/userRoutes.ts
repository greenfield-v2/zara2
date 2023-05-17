import getAllUsers from '../controller/userController';
import express from 'express'

const route=express.Router();

route.get('/users',getAllUsers)



export default route