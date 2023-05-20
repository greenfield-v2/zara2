import connection from "../database/db";

const getAllProducts=(callback)=>{
    connection.query("SELECT * FROM product",callback)
}

const getAdultCategory=(callback)=>{
    connection.query("SELECT * FROM product WHERE category='adult'",callback)
}

const getKidsCategory=(callback)=>{
    connection.query("SELECT * FROM product WHERE category='kids'",callback)
}

const getWomenCategory=(callback)=>{
    connection.query("SELECT * FROM product WHERE category='women'",callback)
}

const getMenCategory=(callback)=>{
    connection.query("SELECT * FROM product WHERE category='men'",callback)
}

const getBeauty=(callback)=>{
    connection.query("SELECT * FROM product WHERE category='beauty'",callback)
}

const addProduct=(values,callback)=>{
    connection.query('INSERT INTO product (clothesName, image, category,price) VALUES (?, ?, ?, ?)',values,callback)
}


const removeProduct=(values,callback)=>{
    connection.query('DELETE FROM product WHERE id=?',values,callback)
}

const editProduct=(values,callback)=>{
    const updateQuery = "UPDATE product SET clothesName = ?, image = ?, price = ?, category = ? WHERE id = ?";
    connection.query(updateQuery,values,callback)
}

const getOneProduct=(values,callback)=>{
    connection.query('SELECT * FROM product WHERE id=?',values,callback)
}

const searchProduct=(values,callback)=>{
    connection.query("SELECT * FROM product WHERE clothesName LIKE ?",values,callback)
}


export default {
    getAllProducts,
    getAdultCategory,
    getKidsCategory,
    getMenCategory,
    getWomenCategory,
    getBeauty,
    addProduct,
    removeProduct,
    editProduct,
    getOneProduct,
    searchProduct
}