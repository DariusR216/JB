// src/components/Header.js

import React from 'react';

function Header({ isSignedIn, onSignOut, setView }) {
  return (
    <header className="header">
      <h1>Job Board</h1>
      <nav>
        {isSignedIn ? (
          <>
            <button onClick={() => setView('home')}>Home</button>
            <button onClick={onSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            <button onClick={() => setView('login')}>Sign In</button>
            <button onClick={() => setView('register')}>Register</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
