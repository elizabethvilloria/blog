import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const services = [
    { id: 1, name: 'Custom Love Letter', price: 25, description: 'A personalized love letter written just for you or your loved one.' },
    { id: 2, name: 'Poetry Collection', price: 15, description: 'A collection of 5 original poems on the theme of your choice.' },
    { id: 3, name: 'Personalized Story', price: 40, description: 'A short story featuring you or your loved one as the main character.' },
  ];

  return (
    <div className="shop">
      <h1>Mauve Shop</h1>
      <p>Explore our unique writing services and bring your emotions to life!</p>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p className="price">${service.price}</p>
            <Link to={`/order/${service.id}`} className="order-button">Order Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
