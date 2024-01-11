import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../Style/createresetpassword.css";


function CreateNewPassword() {
  const { token } = useParams(); // Get the 'id' parameter from the URL

  const [newPassword, setNewPassword] = useState(''); // State to hold the password value
  const [error, setError] = useState(null); // State to hold error information

  // Function to handle changes in the input field
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };


  const validatePassword = (password) => {
    const minLength = 8; // Minimum length requirement
    const uppercaseRegex = /[A-Z]/; // Regex to check for uppercase letters
    const lowercaseRegex = /[a-z]/; // Regex to check for lowercase letters
    const numberRegex = /[0-9]/; // Regex to check for numbers
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-]/; // Regex to check for special characters
  
    if (
      password.length < minLength ||
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      !numberRegex.test(password) ||
      !specialCharRegex.test(password)
    ) {
      return false; // Password does not meet requirements
    }
  
    return true; // Password meets requirements
  };



  // Function to handle the reset password action
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!validatePassword(newPassword)) {
      setError('Password should contain at least 8 characters including uppercase, lowercase, number, and special characters');
      return;
    }


    try {
      setError(null); // Reset any previous errors
    
      // Make an HTTP POST request to the reset password API endpoint
      const response = await fetch('https://3988-115-242-209-74.ngrok-free.app/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
      });
    
      if (response.ok) {
        console.log('Password reset successful!');
        alert("password is updated")
        navigate("/login")
        // Handle success scenario (e.g., redirect to login page)
      } else {
        // If the response is not OK, handle the error and log the response
        const errorData = await response.json();
        setError(errorData.message || 'Password reset failed');
        console.log('Full response:', response); // Log the full response for further inspection
      }
    } catch (error) {
      setError('An error occurred while resetting the password');
      console.error('Error occurred:', error);
    }
  };

  const logResetData = () => {
    console.warn('Data sent on reset:', { token, newPassword });
  };

  const navigate= useNavigate();

  return (
    <div>
      <h2>Reset Password</h2>
      

      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={handlePasswordChange}
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button  className="reset" onClick={logResetData} type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default CreateNewPassword;
