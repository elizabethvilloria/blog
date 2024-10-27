import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your server
    console.log('Newsletter signup:', email);
    alert('Thank you for signing up for our newsletter!');
    setEmail('');
  };

  return (
    <div className="newsletter-signup">
      <h2>Sign up for our Newsletter</h2>
      <p>Get the latest tips, tricks, and stories delivered to your inbox!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;

