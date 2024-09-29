import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../Components/Redux/ProductSlice';
import ProductCard from '../ProductList/ProductCard/ProductCard';
import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const { filteredProducts, products } = useSelector((store) => store.product);

  useEffect(() => {
    if (products.length === 0) {
      // Fetch only if products are not already in the Redux store
      getProducts();
    }
  }, [products.length]); // Only run if products array is empty

  const getProducts = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        console.log("api response", res.data);
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='all-container'>
      {filteredProducts.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
}

export default Home;