import mysql from 'mysql2';



import * as dotenv from 'dotenv'
dotenv.config()
const connection= mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: process.env.PASSWORD,
    database: "zara"
});

connection.connect((err)=>{
    if(err) console.log(err)
    console.log(`connected to database `)
})


export default connection

