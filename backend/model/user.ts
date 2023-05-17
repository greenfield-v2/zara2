import connection from "../database/db";
// const connection=require('../database/db')
const getAll=(callback)=>{
    connection.query("SELECT * FROM user",callback)
}

// module.exports={getAll}
export default getAll ;

