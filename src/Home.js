import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    { id: 1, title: 'Skincare Tips for Glowing Skin', image: '/images/skincare.jpg' },
    { id: 2, title: '80s-Inspired Fashion Comeback', image: '/images/fashion.jpg' },
    { id: 3, title: 'Quick Hairstyles for Busy Mornings', image: '/images/hairstyles.jpg' },
  ];

  return (
    <div className="home">
      <h1>Mauve</h1>
      <div className="grid-container">
        {posts.map(post => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <div className="post-card">
              <img src={post.image} alt={post.title} />
              <h2>{post.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
