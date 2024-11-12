// home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = ({ isAuthenticated, onSignOut }) => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header>
        <h1>Pradyun@Deakin</h1>
        <input type="text" placeholder="Search" className="search-bar" width={100}/>
        <div className="button-container">
          <button className="post-button" onClick={() => navigate('/post')}>Post</button>
          {isAuthenticated ? (
            <button className="sign-out-button" onClick={onSignOut}>Sign Out</button>
          ) : (
            <button className="login-button" onClick={() => navigate('/login')}>Login</button>
          )}
        </div>
      </header>

      {/* New Content Section */}
      <main className="content">
        <section className="welcome-section">
          <h2>Welcome to Pradyun@Deakin!</h2>
          <p>
            Explore the latest discussions, share your thoughts, and connect with like-minded people at Deakin University. We’re glad to have you here!
          </p>
        </section>


        
      </main>
    </div>
  );
};

export default Home;
