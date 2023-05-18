import express ,{ Request, Response } from 'express'
import connection from './database/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import route from './routes/userRoutes'
import * as dotenv from 'dotenv'
dotenv.config()
const app=express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.post('/users/signup', async (req: Request, res: Response) => {
    const { username, email, isAdmin, password } = req.body;
    connection.query("SELECT * FROM user WHERE username=?", [req.body.username], async (err:any, results: any) => {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }
      
      if (results.length>0) {
        return res.status(400).json({ message: 'Username already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      connection.query("INSERT INTO user (username, email, isAdmin, password) VALUES (?, ?, ?, ?)", [username, email, isAdmin, hashedPassword], (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'User registered successfully' });
      });
    });
});
app.post('/users/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    connection.query("SELECT * FROM user WHERE username=?",[username],async(err,user:any)=>{
        if(err) res.json(err);
        if (user.length===0) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
        const comparePassword = await bcrypt.compare(password, user[0].password);
        if (!comparePassword) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.ACCESS_TOKEN);
        
        return res.status(200).json({ token:token,id: user.id});

    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/cart',(req:Request,res:Response)=>{
    const {user_id,product_id}=req.body
    connection.query("INSERT INTO cart (user_id,product_id) VALUES (?,?)",[user_id,product_id],(err,result)=>{
        if(err) res.json(err);
        console.log(result)
        res.json({message:"product successfully added to your cart"})
    })
})

app.get('/cart',(req:Request,res:Response)=>{
    connection.query("SELECT * FROM cart",(err,result)=>{
        if(err) res.json(err);
        res.json(result)
    })
})
  app.post('/product',(req:Request,res:Response)=>{
    const {clothesName,image,category,price}=req.body
    connection.query('INSERT INTO product (clothesName, image, category,price) VALUES (?, ?, ?, ?)',[clothesName,image,category,price],(err,result)=>{
        if(err) res.json(err);
        res.json("created")
    })
  })
  app.get('/product',(req:Request,res:Response)=>{
    connection.query("SELECT * FROM product",(err,result)=>{
        if(err) res.json(err);
        res.json(result)
    })
  })
app.use(route)
app.listen(4000,()=>{
    console.log('server listen to port 4000')
})


