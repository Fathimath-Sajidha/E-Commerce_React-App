import React from 'react';


const OrderConfirmed = ({ order }) => {
  return (
    <div className="order-confirmed" style={{ textAlign: 'center', padding: '50px' , flex:'1'}}>
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been confirmed and is being processed.</p>
      <br />
      <div className="order-actions container-fluid" >
        <button onClick={() => window.location.href='/'}>Continue Shopping</button>
        <br /> <br />
        <button >View Order History</button>
      </div>
    </div>
  );
};

export default OrderConfirmed;