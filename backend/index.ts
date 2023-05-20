import express ,{ Request, Response } from 'express'
import connection from './database/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import routeUser from './routes/userRoutes'
import routeProduct from './routes/productRoutes';
import routeCart from './routes/cartRoutes';
const app=express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routeUser)
app.use(routeProduct)
app.use(routeCart)

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
        
        return res.status(200).json({ token,id:user[0].id,isAdmin:user[0].isAdmin});

    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});






app.listen(process.env.PORT,()=>{
    console.log('server listen to port '+process.env.PORT)})
  
 