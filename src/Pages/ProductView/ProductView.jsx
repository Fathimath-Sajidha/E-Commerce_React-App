import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  setCartItems } from '../../Components/Redux/CartSlice';
import { setSelectedProduct } from '../../Components/Redux/ProductSlice';
import './ProductView.css';

function SingleProductView({product}) {
  const { productId } = useParams();
  const dispatch = useDispatch();
  
  
  const products = useSelector((state) => state.product.products);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const navigate = useNavigate();

  const addCart = () => {
    dispatch(setCartItems(product)); 
  };

  useEffect(() => {
    if (products.length > 0) {
      const product = products.find(product => product.id === Number(productId));  // Convert productId to number
      if (product) {
        dispatch(setSelectedProduct(product));
      } else {
        navigate('/');  // If product not found, redirect to home
      }
    }
  }, [products, productId, dispatch, navigate]);

  if (!selectedProduct) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='product-container'>
      <img className='p-image img-fluid mx-auto d-block' src={selectedProduct.image} alt={selectedProduct.title} />
      <h1>{selectedProduct.title}</h1>
      <h3>{selectedProduct.category}</h3>
      <p>{selectedProduct.description}</p>
      <h2>Price: {selectedProduct.price}</h2>
      <button onClick={addCart}>Add To Cart</button>

    </div>
  );
}

export default SingleProductView;