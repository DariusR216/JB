// src/components/SignIn.js

import React, { useState } from 'react';

function SignIn({ onSignIn }) {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for example purposes
    if (email && password) {
      onSignIn(email); // Call the sign-in handler
    } else {
    setError('Please enter both email and password.');
    }
};

return (
    <div className="signin-page">
    <div className="signin-container">
        <h2>Sign In</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <button type="submit">Sign In</button>
        </form>
        <a href="#" className="forgot-password">Forgot Password?</a>
    </div>
    </div>
);
}

export default SignIn;
