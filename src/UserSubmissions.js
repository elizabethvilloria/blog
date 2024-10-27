import React, { useState, useEffect } from 'react';

const UserSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch this data from your server
    // For now, we'll use some mock data
    const mockSubmissions = [
      { id: 1, title: "My Skincare Journey", content: "I struggled with acne for years until I discovered...", category: "story" },
      { id: 2, title: "Quick Hairstyle Hack", content: "For an easy updo, try using a pencil to...", category: "tip" },
      { id: 3, title: "Thrift Store Fashion Finds", content: "I found designer pieces at my local thrift store by...", category: "fashion" },
    ];
    setSubmissions(mockSubmissions);
  }, []);

  return (
    <div className="user-submissions">
      <h2>Community Stories and Tips</h2>
      {submissions.map(submission => (
        <div key={submission.id} className="submission-card">
          <h3>{submission.title}</h3>
          <p>{submission.content}</p>
          <span className="category-tag">{submission.category}</span>
        </div>
      ))}
    </div>
  );
};

export default UserSubmissions;

