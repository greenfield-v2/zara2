import connection from "../database/db";

const getAll=(callback)=>{
    connection.query("SELECT * FROM user",callback)
}

const remove=(values,callback)=>{
  connection.query('DELETE FROM user WHERE id=?',values,callback)
}


export default {getAll,remove} ;

