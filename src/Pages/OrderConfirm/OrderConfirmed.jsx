import React from 'react';


const OrderConfirmed = ({ order }) => {
  return (
    <div className="order-confirmed">
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been confirmed and is being processed.</p>

     
          
        
      

      <div className="order-actions">
        <button onClick={() => window.location.href='/'}>Continue Shopping</button>
        <button >View Order History</button>
      </div>
    </div>
  );
};

export default OrderConfirmed;