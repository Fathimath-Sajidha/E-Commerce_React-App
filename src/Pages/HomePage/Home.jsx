import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../Components/Redux/ProductSlice';
import ProductCard from '../ProductList/ProductCard';
import './Home.css';
import { CardGroup,Card,CardImg,CardTitle,CardImgOverlay} from 'react-bootstrap';


function Home() {
  const dispatch = useDispatch();
  const { filteredProducts, products } = useSelector((store) => store.product);

  useEffect(() => {
    if (products.length === 0) {
     
      getProducts();
    }
  }, [products.length]); 

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
    <div >
      

    
    <div className='all-container'>
   
      
      {filteredProducts.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
      </div>
    </div>
  );
}

export default Home;