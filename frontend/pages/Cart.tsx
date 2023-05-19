import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Context } from './Context';

interface CartProps {
  el: any;
}

const Cart: React.FC<CartProps> = () => {
  const {currentUser}=useContext(Context)
  const [cart, setCart] = useState<any>([]);
  const [productsUser,setProductsUser]=useState<any>([])
  const [show,setShow]=useState<any>(false)
  
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
    try {
      await axios.delete(`http://${process.env.HOST}:${process.env.PORT}/cart/${product_id}`);
      
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
useEffect(()=>{
  fetchProduct()
},[show])
  return (
    <div>
      hello from cart
{productsUser.length>0 && show===true && productsUser.map((el,i)=>{
  return (
    <Card style={{ width: '20rem', background: 'white', margin: '20px 10px', position: 'static' }} className='clothescard' key={i}>
  <Card.Img variant='top' src={el.image} style={{ width: '318px', height: '400px' }} />
  <Card.Body>
    <div style={{ display: 'flex', justifyContent: "space-between" }}>
      <Card.Title>{el.clothesName}</Card.Title>
      <Card.Text>{el.price}£</Card.Text>
    </div>
      <Button onClick={()=>handleDelete(el.id) } >DELETE FROM CART</Button>
  </Card.Body>
  {(
    <div>
    </div>
  )}
</Card>
  )
})}
<Button onClick={()=>setShow(!show)}>SHOW PRODUCTS</Button>
    </div>
  );
}

export default Cart;
