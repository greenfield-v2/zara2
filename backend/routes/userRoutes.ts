import getAllUsers from '../controller/userController';
import express from 'express'
const userController = require('../controller/userController');
const route=express.Router();

route.get('/users',getAllUsers)
route.get('/users/search', userController.searchUsers);


export default route