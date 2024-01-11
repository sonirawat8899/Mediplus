import React, { useState } from 'react';
import '../Style/forgetpassword.css';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate email before making the API call
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('https://3988-115-242-209-74.ngrok-free.app/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message); // Assuming the API returns a message
      setEmail('');
    } catch (error) {
      setMessage('An error occurred. Please try again.'); // Handle error appropriately
    }
  };

  return (
    <div>
      <h3>Forget Password</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(''); // Reset email error when input changes
            }}
            required
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <button className="forget" type="submit">Next</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgetPassword;
