import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios library
import '../Style/login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccessMessage, setLoginSuccessMessage] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
const navigate= useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // window.localStorage.setItem("isLogedIn", true)


    if (!username || !password) {
      setLoginErrorMessage('Please enter both username and password');
      setLoginSuccessMessage('');
      return;
    }
  


    try {
      const response = await axios.post('https://3c62-115-242-209-74.ngrok-free.app/login', {
        username,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token; // Modify this according to the actual token structure from your API response

        // Store the token in localStorage or state for further use (example using localStorage)
        localStorage.setItem('token', token);

        // Login successful
        setLoginSuccessMessage('Logged in successfully');
        setTimeout(() => {
          setLoginSuccessMessage('');      
        }, 3000);
        // console.warn('Logged in successfully');
        alert("Logged in successfully")
        setLoginErrorMessage('');
        navigate("/")
        setUsername('');
        setPassword('');
      } else {
        // Login failed
        // setLoginErrorMessage('Username or password is incorrect');
        setLoginSuccessMessage('');
      }
    } catch (error) {
      // Handle network errors or other issues with the API request
      console.error('Error:', error);
      setLoginErrorMessage('Username or password is incorrect');
      setLoginSuccessMessage('');
    }
  };

  return (
    <div className="frm">
      <h2 className="hh">Login Form</h2>
    
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="dv">Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
            required
          />
        </div>
       
        <div className="input-container">
          <label className="dv">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />  
            </div>      
               
      
        {loginSuccessMessage && <p className="success-msg">{loginSuccessMessage}</p>}
        {loginErrorMessage && <p className="error-msg">{loginErrorMessage}</p>}
       <Link to = "/forgetpassword">Forget Password</Link>  

        <button className="lgn" type="submit">Login</button>
       <h4>Don't have an account?</h4> <Link to = "/registration"> Sign up</Link> 
      
      </form>
    </div>
  );
};

export default LoginForm;
