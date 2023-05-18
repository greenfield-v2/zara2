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
        
        return res.status(200).json({ token,id:user[0].id});

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



  app.post('/add', (req: Request, res: Response) => {
    const { productId, userId } = req.body;
  
    // Check if the product and user exist
    const getProductQuery = 'SELECT * FROM product WHERE id = ?';
    const getUserQuery = 'SELECT * FROM user WHERE iduser = ?';
  
    connection.query(getProductQuery, [productId], (err: any, productResults: any) => {
      if (err) {
        // Handle any error that occurs during the query
        return res.status(500).json({ message: 'Internal server error' });
      }
  
      if (productResults.length === 0) {
        // If the product does not exist, return an error response
        return res.status(404).json({ message: 'Product not found' });
      }
  
      connection.query(getUserQuery, [userId], (err: any, userResults: any) => {
        if (err) {
          // Handle any error that occurs during the query
          return res.status(500).json({ message: 'Internal server error' });
        }
  
        if (userResults.length === 0) {
          // If the user does not exist, return an error response
          return res.status(404).json({ message: 'User not found' });
        }
  
        // Insert the product into the user's cart
        const addToCartQuery = 'INSERT INTO product (clothesName, image, category, cart_id) VALUES (?, ?, ?, ?)';
        connection.query(
          addToCartQuery,
          [productResults[0].clothesName, productResults[0].image, productResults[0].category, userResults[0].cart_id],
          (err: any) => {
            if (err) {
              // Handle any error that occurs during the query
              return res.status(500).json({ message: 'Internal server error' });
            }
  
            // Return a success response
            res.status(200).json({ message: 'Product added to cart successfully' });
          }
        );
      });
    });
  });
// Delete a product from the user's cart
app.delete('/delete-from-cart', (req: Request, res: Response) => {
  const { productId, userId } = req.body;
  // Check if the product and user exist
  const getProductQuery = 'SELECT * FROM product WHERE id = ?';

}
)
  


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

app.listen(process.env.PORT,()=>{
    console.log('server listen to port '+process.env.PORT)

})


