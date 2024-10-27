import React from 'react';
import SubmitStory from './SubmitStory';

const TipsAndTricks = () => {
  const tips = [
    { id: 1, title: "5 Minute Makeup Routine", content: "Perfect for busy mornings!" },
    { id: 2, title: "DIY Face Masks", content: "Using ingredients from your kitchen." },
    { id: 3, title: "Wardrobe Essentials", content: "Build a versatile closet with these pieces." },
  ];

  return (
    <div className="tips-and-tricks">
      <h1>Tips and Tricks</h1>
      <div className="tips-grid">
        {tips.map(tip => (
          <div key={tip.id} className="tip-card">
            <h2>{tip.title}</h2>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>
      <SubmitStory />
    </div>
  );
};

export default TipsAndTricks;
