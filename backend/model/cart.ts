import connection from "../database/db";

const getAllCarts=(callback)=>{
    connection.query("SELECT * FROM cart",callback)
}

const getCartsOfUser=(values,callback)=>{
    connection.query(`SELECT * FROM cart WHERE user_id=?`,values,callback)
}

const addCart=(values,callback)=>{
    connection.query("INSERT INTO cart (user_id,product_id) VALUES (?,?)",values,callback)
}

const removeCart=(values,callback)=>{
    connection.query('DELETE FROM cart WHERE product_id=?',values,callback)
}

const removeByUser=(values,callback)=>{
    connection.query('DELETE FROM cart WHERE user_id=?',values,callback)
}
export default {
    getAllCarts,
    getCartsOfUser,
    removeCart,
    addCart,
    removeByUser
}