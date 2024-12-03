import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';
import WelcomeMessage from './WelcomeMessage';
import './App.css';

const Home = () => {
  const posts = [
    { 
      id: 1, 
      title: 'Skincare Tips for Glowing Skin', 
      image: '/images/skincare.jpg',
      isNew: true 
    },
    { 
      id: 2, 
      title: '80s-Inspired Fashion Comeback', 
      image: '/images/fashion.jpg',
      isNew: true 
    },
    { 
      id: 3, 
      title: 'Quick Hairstyles for Busy Mornings', 
      image: '/images/hairstyles.jpg',
      isNew: false 
    },
  ];

  return (
    <div className="home">
      <h1 className="page-title">Welcome to Mauve</h1>
      <WelcomeMessage />
      <div className="grid-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            {post.isNew && <span className="new-badge">New!</span>}
            <Link to={`/post/${post.id}`}>
              <img src={post.image} alt={post.title} />
              <h2>{post.title}</h2>
            </Link>
            <Link to={`/order/${post.id}`} className="order-button">Order Now</Link>
          </div>
        ))}
      </div>
      <NewsletterSignup />
    </div>
  );
};

export default Home;
