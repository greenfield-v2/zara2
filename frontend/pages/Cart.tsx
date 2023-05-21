import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Context } from './Context';
import styles from '../styles/Cart.module.css';
interface CartProps {
  el: any;
}

const Cart: React.FC<CartProps> = () => {

  const {currentUser}=useContext(Context)
  const [cart, setCart] = useState<any>([]);
  const [productsUser,setProductsUser]=useState<any>([])
  const [show,setShow]=useState<any>(false)
  const [count,setCount]=useState<number>(0)
  const fetch=async()=>{
    const res= await axios.get(`http://${process.env.HOST}:${process.env.PORT}/cart/${currentUser.id}`)
    setCart(res.data);
    
  }
  const fetchProduct=async()=>{
    const arr:any=[];
    fetch()
    if(cart.length>0){
      for(var i=0;i<cart.length;i++){
        const res= await axios.get(`http://${process.env.HOST}:${process.env.PORT}/product/${cart[i].product_id}`)
        arr.push(...res.data)
      }
      setProductsUser(arr)
      
    }
    
    
  }
  console.log(productsUser,'por')
  
  const handleDelete = async (product_id: number) => {
      const arr =productsUser.filter((e)=>e.id!==product_id);
      await axios.delete(`http://${process.env.HOST}:${process.env.PORT}/cart/${product_id}`);
      setProductsUser(arr)
      
  };
useEffect(()=>{
  fetchProduct()
},[show,count])


  return (
    <div className={styles.pr}>
      {!show && <Button onClick={()=>setShow(!show)} className={styles.btn}>SHOW PRODUCTS</Button>}
{productsUser.length>0 && show===true && productsUser.map((el,i)=>{
  return (
    <Card style={{ width: '20rem', background: 'white', margin: '20px 10px', position: 'static' }} className='clothescard' key={i}>
  <Card.Img variant='top' src={el.image} style={{ width:'100%', height: '400px' }} />
  <Card.Body>
    <div style={{ display: 'flex', justifyContent: "space-between" }}>
      <Card.Title>{el.clothesName}</Card.Title>
      <Card.Text>{el.price}£</Card.Text>
    </div>
      <Button onClick={()=>handleDelete(el.id)} >DELETE FROM CART</Button>
  </Card.Body>
  {(
    <div>
    </div>
  )}
</Card>
  )
})}
    </div>
  );
}

export default Cart;
