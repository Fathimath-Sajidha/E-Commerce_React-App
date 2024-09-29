import React from 'react';
import './ProductCard.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCartItems } from '../../../Components/Redux/CartSlice';
import { setSelectedProduct } from '../../../Components/Redux/ProductSlice';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(setCartItems(product));  // Add the selected product to the cart
  };
  
  const handleClick = () => {
    navigate(`/ProductDetails/${product.id}`);
  };

  return (
    <div className='card-container'>
      <Card className='card' style={{ width: '18rem', height: '22rem' }} onClick={handleClick}>
        <Card.Img className='CardImage' variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <p> Price: {product.price}</p>
            <button onClick={(e) => {
              e.stopPropagation();  // Prevent navigation when clicking 'Add To Cart'
              addCart();
            }}>Add To Cart</button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;