
import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Context } from './Context';
import axios from 'axios';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';

const ClothesDetail = ({ el, setCount, count }: any) => {
  const { currentUser } = useContext(Context);
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setUpdatedProduct({
      clothesName: el.clothesName,
      price: el.price,
      image: el.image,
      category: el.category,
    });
  };

  const [updatedProduct, setUpdatedProduct] = useState({
    clothesName: '',
    price: '',
    image: '',
    category: '',
  });

  useEffect(() => {
    // Fetch the product data and populate the form
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://${process.env.HOST}:${process.env.PORT}/product/${el.id}`);
        const fetchedProduct = response.data;
        setUpdatedProduct(fetchedProduct);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setUpdatedProduct((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const update = async () => {
    try {
      await axios.put(`http://${process.env.HOST}:${process.env.PORT}/product/${el.id}`, updatedProduct);
      handleClose();
      router.push('/clothes');
    } catch (error) {
      console.error(error);
    }
  };

  const remove = async () => {
    await axios.delete(`http://${process.env.HOST}:${process.env.PORT}/product/${el.id}`);
    setCount(count + 1);
  };

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
    <Card style={{ width: '20rem', background: 'white', margin: '20px 10px', position: 'static' }} className={styles['clothescard']}>
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
        <button onClick={remove} style={{ background: 'black', border: 'none', color: 'white' }}>DELETE</button>
<Button variant="primary" onClick={handleShow} style={{ background: 'white', border: 'none', color: 'black' }} className="btn1">
  EDIT
</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Clothes Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Clothes Name"
                name="clothesName"
                value={updatedProduct.clothesName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Image URL"
                name="image"
                value={updatedProduct.image}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                name="price"
                value={updatedProduct.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                name="category"
                value={updatedProduct.category}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" style={{ background: 'black', border: 'none' }} onClick={update}>
            Update
          </Button>
        </Modal.Footer>
        </Modal>
      </div>}
      
    </Card>
  );
};

export default ClothesDetail;
