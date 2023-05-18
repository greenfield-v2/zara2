import y from '../controller/userController';
import express from 'express'

const route=express.Router();

route.get('/users',y.getAllUsers)
route.get('/users/search', y.searchUsers);


export default route