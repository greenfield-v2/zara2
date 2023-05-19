
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from './Context';
import axios from 'axios';

const ClothesDetail = ({ el,setCount,count }: any) => {
  const { currentUser } = useContext(Context);
  const [showLogin, setShowLogin] = useState(false);


  const remove=async()=>{
      await axios.delete(`http://${process.env.HOST}:${process.env.PORT}/product/${el.id}`)
      setCount(count+1)
  }

  const addToCart = async () => {
    if (!currentUser) {
      setShowLogin(true);
    } else {
      const payload = {
        product_id: el.id,
        user_id: currentUser.id,
      };
      console.log(payload)
      try {
        const response = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/cart`, payload);
        console.log('Product added to cart:', response.data);
      } catch (error) {
        console.error('Error adding product to cart:', error);
      }
    }
  };

  return (
    <Card style={{ width: '20rem', background: 'white', margin: '20px 10px', position: 'static' }} className='clothescard'>
      <Card.Img variant='top' src={el.image} style={{ width: '318px', height: '400px' }} />
      <Card.Body>
        <div style={{display:'flex',justifyContent:"space-between"}}>
          <Card.Title >{el.clothesName}</Card.Title>
          <Card.Text>{el.price}£</Card.Text>
        </div>
        {currentUser.id>0 && currentUser.isAdmin===0 &&<Button variant='primary' onClick={addToCart}>
          Add to Cart
        </Button>}
      </Card.Body>
      {currentUser.isAdmin===1 && <div>
        <button onClick={()=>remove()}>DELETE</button>
        <button >EDIT</button>
      </div>}
    </Card>
  );
};

export default ClothesDetail;
