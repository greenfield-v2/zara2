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


app.post('/users/signup', async (req: Request, res: Response) => {
    const { username, email, isAdmin, password } = req.body;
  
    // Check if the username already exists in the database
    connection.query("SELECT * FROM user WHERE username=?", [req.body.username], async (err:any, results: any) => {
      if (err) {
        // Handle any error that occurs during the query
        return res.status(500).json({ message: 'Internal server error' });
      }
      
      if (results.length>0) {
        // If the username already exists, return an error response
        return res.status(400).json({ message: 'Username already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert the new user record into the database
      connection.query("INSERT INTO user (username, email, isAdmin, password) VALUES (?, ?, ?, ?)", [username, email, isAdmin, hashedPassword], (err, result) => {
        if (err) {
          // Handle any error that occurs during the query
          return res.status(500).json({ message: 'Internal server error' });
        }
  
        // Return a success response
        res.status(200).json({ message: 'User registered successfully' });
      });
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
  




app.use(route)
app.listen(5004,()=>{
    console.log('server listen to port 5004')
})


