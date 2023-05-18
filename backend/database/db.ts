import mysql from 'mysql2';

import * as dotenv from 'dotenv'
dotenv.config()
const connection= mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER ,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err)=>{
    if(err) console.log(err)
    console.log("connected to mysql")
})

export default connection
