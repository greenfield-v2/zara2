import mysql from 'mysql2';
// const mysql=require('mysql2')

const connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'zara'
});

connection.connect((err)=>{
    if(err) console.log(err)
    console.log("connected to mysql")
})

export default connection
// module.exports=connection