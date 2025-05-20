import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎵 Welcome to AI Singing Coach</h1>
      <p>This app helps you improve your singing with AI-powered feedback.</p>
      <p>Record your voice, get pitch analysis, and tips to improve!</p>
      <Link to="/record">
        <button style={{ marginTop: '1rem' }}>Start Singing</button>
      </Link>
      <Link to="/results">
         <button>See Results</button>
       </Link>

    </div>
  );
};

export default Home;