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

  app.get("/all", async (req: Request, res: Response) => {
    connection.query("SELECT * FROM product", async (err: any, results: any) => {
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
app.use(route)
app.listen(5000,()=>{
    console.log('server listen to port 4000')
})


