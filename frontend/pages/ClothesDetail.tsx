import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from './Context';
import axios from 'axios';

const ClothesDetail = ({ el }: any) => {
  const { currentUser } = useContext(Context);
  const [showLogin, setShowLogin] = useState(false);

  // Function to handle adding the product to the cart
  const addToCart = async () => {
    // Check if the user is logged in
    if (!currentUser) {
      // User is not logged in, show the login component
      setShowLogin(true);
    } else {
      // User is logged in, proceed with adding the product to the cart

      // Create a payload with the product ID and the current user ID
      const payload = {
        product_id: el.d,
        user_id: currentUser.id,
      };

      try {
        // Perform a POST request to your API endpoint using axios to add the product to the cart table
        const response = await axios.post('/api/cart', payload);
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
        <Card.Title>{el.clothesname}</Card.Title>
        <Card.Text></Card.Text>
        <Button variant='primary' onClick={addToCart}>
          Add to Cart
        </Button>
      </Card.Body>

      {/* Display the login component when showLogin is true */}
      {/* {showLogin && <Login />} */}
    </Card>
  );
};

export default ClothesDetail;
