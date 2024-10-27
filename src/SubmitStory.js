import React, { useState } from 'react';

const SubmitStory = () => {
  const [story, setStory] = useState({ title: '', content: '', category: 'story' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStory(prevStory => ({
      ...prevStory,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the story to your server
    console.log('Submitted story:', story);
    alert('Thank you for sharing your story!');
    setStory({ title: '', content: '', category: 'story' });
  };

  return (
    <div className="submit-story">
      <h2>Share Your Story or Tip</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={story.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Your Story or Tip:</label>
          <textarea
            id="content"
            name="content"
            value={story.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={story.category}
            onChange={handleChange}
          >
            <option value="story">Personal Story</option>
            <option value="tip">Beauty Tip</option>
            <option value="fashion">Fashion Advice</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitStory;

