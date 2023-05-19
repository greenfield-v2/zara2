import express ,{ Request, Response } from 'express'
import connection from './database/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import route from './routes/userRoutes'

const app=express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(route)


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

app.get("/all",  (req: Request, res: Response) => {
    connection.query("SELECT * FROM product",  (err: any, results: any) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      res.status(200).json({ products: results })
    })
  })  
  

  app.get("/all/adult", async (req: Request, res: Response) => {
    connection.query("SELECT * FROM product WHERE category='adult'", async (err: any, results: any) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      res.status(200).json({ products: results });
    });
  });
  app.get("/all/kids", async (req: Request, res: Response) => {
    connection.query("SELECT * FROM product WHERE category='kids'", async (err: any, results: any) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      res.status(200).json({ products: results });
    });
  });
  app.get("/all/women", async (req: Request, res: Response) => {
    connection.query("SELECT * FROM product WHERE category='women'", async (err: any, results: any) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      res.status(200).json({ products: results });
    });
  });
  app.get("/all/men", async (req: Request, res: Response) => {
    connection.query("SELECT * FROM product WHERE category='men'", async (err: any, results: any) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      res.status(200).json({ products: results });
    });
  });
  app.get("/all/beauty", async (req: Request, res: Response) => {
    connection.query("SELECT * FROM product WHERE category='beauty'", async (err: any, results: any) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      res.status(200).json({ products: results });
    });
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


  app.get('/search/:name', (req: Request, res: Response) => {
    const {name} = req.params;
    connection.query("SELECT * FROM product WHERE clothesName LIKE ?", [`%${name}%`], (err: any, results: any) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      res.status(200).json({ products: results });
    });
  });



 

  app.put('/update/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const { newName, newImage, newPrice, newCategory } = req.body;
  
    const updateQuery = 'UPDATE product SET clothesName = ?, image = ?, price = ?, category = ? WHERE id = ?';
    const updateValues = [newName, newImage, newPrice, newCategory, id];
  
    connection.query(updateQuery, updateValues, (err: any, result: any) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product updated successfully' });
    });
  });
  
  


  app.delete('/product/:id',(req:Request,res:Response)=>{
    connection.query('DELETE FROM product WHERE id=?',[req.params.id],(err,result)=>{
      if(err) res.json(err);
      res.json('deleted')
    })
  })


app.listen(process.env.PORT,()=>{
    console.log('server listen to port '+process.env.PORT)


})

// process.env.PORT
