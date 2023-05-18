import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ClothesDetail = ({el}:any) => {
    return (
        <Card style={{ width: '20rem',background:"white" ,margin:"20px 10px", position:"static"}} className='clothescard'>
          <Card.Img variant="top" src={el.image} style={{width:"318px", height:"400px"}} />
          <Card.Body>
            <Card.Title>{el.clothesname}</Card.Title>
            <Card.Text>
              
            </Card.Text>
            <Button variant="primary">add to cart</Button>
          </Card.Body>
        </Card>
      );
}

export default ClothesDetail
