import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, clearCart, updateCartItemQuantity } from '../../Components/Redux/CartSlice';
import './Cart.css';  // Make sure to import your CSS file
import {
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartData);
  const { cartCount } = useSelector((state) => state.cartData);
  const navigate=useNavigate();

  const handleRemove = (item) => {
    dispatch(removeCartItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-view container">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className='cart-list'>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item card">
              <div className="cart-item-image">
                <MDBCardImage
                  src={item.image}
                  fluid
                  style={{ width: "150px" }}
                  alt={item.title}
                />
              </div>
              <div className="cart-item-details">
                <MDBTypography tag="h5" className="text-primary">
                  {item.title}
                </MDBTypography>
                <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                  Color: {item.color}
                </MDBTypography>
                <div className='d-flex align-items-center'>
                  <p className="fw-bold mb-0 me-5 pe-3">{item.price}$</p>
                  <div className="def-number-input number-input safari_only">
                    <button className="minus" onClick={() => dispatch(updateCartItemQuantity({ id: item.id, value: -1 }))}><h1>-</h1></button>
                    <input
                      className="quantity fw-bold text-black"
                      min={0}
                      type="number"
                      value={item.quantity}
                      readOnly
                    />
                    <button className="plus" onClick={() => dispatch(updateCartItemQuantity({ id: item.id, value: 1 }))}><h2>+</h2></button>
                  </div>
                  <button className="clear-cart-button" onClick={() => handleRemove(item)}>Remove</button>
                </div>
              </div>
            </div>
          ))}

          <button className="clear-cart-button" onClick={handleClearCart}>Clear Cart</button>
          <h2>Total Items: {cartCount}</h2>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2> 
          <button className="clear-cart-button" onClick={()=>{ navigate('/orderconfirmed'); dispatch(clearCart()); }}>Confirm Order</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;