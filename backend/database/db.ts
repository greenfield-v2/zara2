import mysql from 'mysql2';
// const mysql=require('mysql2')

const connection= mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'ZARA'
});

connection.connect((err)=>{
    if(err) console.log(err)
    console.log("connected to mysql")
})

export default connection
// module.exports=connection