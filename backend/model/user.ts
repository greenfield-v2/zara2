import connection from "../database/db";
// const connection=require('../database/db')
const getAll=(callback)=>{
    connection.query("SELECT * FROM user",callback)
}

const user = (searchTerm, callback) => {
    const sqlQuery = 'SELECT * FROM product WHERE clothesName LIKE ?';
    const searchValue = `%${searchTerm}%`;
  
    connection.query(sqlQuery, [searchValue], callback);
  };
  


export default {getAll,user} ;

