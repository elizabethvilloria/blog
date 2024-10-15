import React from 'react';
import { Link } from 'react-router-dom';
import { useOrder } from './OrderContext';

const OrderConfirmation = () => {
  const { order } = useOrder();

  if (!order) {
    return <div>No order found. Please place an order first.</div>;
  }

  return (
    <div className="order-confirmation">
      <h2>Thank you for your order!</h2>
      <p>We've received the following details:</p>
      <ul>
        <li><strong>Name:</strong> {order.name}</li>
        <li><strong>Email:</strong> {order.email}</li>
        <li><strong>Message:</strong> {order.message}</li>
        <li><strong>Post ID:</strong> {order.postId}</li>
      </ul>
      <p>We'll get back to you soon with more information.</p>
      <Link to="/" className="home-button">Return to Home</Link>
    </div>
  );
};

export default OrderConfirmation;

