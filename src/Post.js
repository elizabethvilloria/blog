import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Post = () => {
  // Get the post ID from the URL using useParams
  const { id } = useParams();
  
  const posts = {
    1: { 
      title: 'Skincare Tips for Glowing Skin', 
      content: 'Achieving that coveted glow is easier than you think! Start with a gentle cleanser, exfoliate twice a week, never skip moisturizer, and always wear sunscreen. Don\'t forget to stay hydrated and eat a balanced diet rich in fruits',
      image: '/images/skincare.jpg'
    },
    2: { title: '80s-Inspired Fashion Comeback', content: 'The 80s are back in style...' },
    3: { title: 'Quick Hairstyles for Busy Mornings', content: 'Quick and easy hairstyles...' },
  };

  const post = posts[id];

  return (
    <div className="post-page" style={{ fontFamily: 'Pacifico', color: 'hotpink' }}>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
};

export default Post;
