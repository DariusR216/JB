// src/App.js

import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import JobList from './components/JobList';
import Register from './components/Register';
import SignIn from './components/SignIn';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [view, setView] = useState('home'); // Track current view

  const handleSignIn = (email) => {
    setIsSignedIn(true);
    setCurrentUser(email);
    setView('home');
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setCurrentUser('');
    setView('home');
  };

  const handleRegister = (email) => {
    handleSignIn(email);
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return isSignedIn ? <JobList /> : <SignIn onSignIn={handleSignIn} />;
      case 'register':
        return <Register onRegister={handleRegister} />;
      case 'login':
        return <SignIn onSignIn={handleSignIn} />;
      default:
        return <SignIn onSignIn={handleSignIn} />;
    }
  };

  return (
    <div className="App">
      <Header isSignedIn={isSignedIn} onSignOut={handleSignOut} setView={setView} />
      {renderView()}
    </div>
  );
}

export default App;
