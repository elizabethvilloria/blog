import React from 'react';

const Post = ({ match }) => {
  const postId = match.params.id;
  const posts = {
    1: { title: 'Skincare Tips for Glowing Skin', content: 'Here are some amazing tips...' },
    2: { title: '80s-Inspired Fashion Comeback', content: 'The 80s are back in style...' },
    3: { title: 'Quick Hairstyles for Busy Mornings', content: 'Quick and easy hairstyles...' },
  };

  const post = posts[postId];

  return (
    <div className="post-page" style={{ fontFamily: 'Pacifico', color: 'hotpink' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
