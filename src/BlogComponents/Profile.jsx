import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const imageUrl = "https://3c62-115-242-209-74.ngrok-free.app";
   
  useEffect(() => {
    // Get the token from local storage
    const token = localStorage.getItem('token');

    // Make sure there's a token before making the request
    if (token) {
      // Set up headers with the token
      const headers = {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true"
      };

      // Fetch profile data using Axios
      axios.get('https://3c62-115-242-209-74.ngrok-free.app/profile', { headers })
        .then(response => {
          // Handle successful response
          setUserData(response.data);
          console.warn ("profile data", response.data)  
        })
        .catch(error => {
          // Handle error
          console.error('Error fetching profile data:', error);
        });
    }
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {userData ? (
        <div>
          {userData.data.map(user => (
            <div key={user._id}>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Mobile: {user.mobile}</p>
              <p>Address: {user.address}</p>
              {/* <p>profileImage: {`${imageUrl}/${user.profileImage}`}</p> */}
              {/* Render other user data fields here */}
          <p>  User Profile:{user.profileImage && (
                <img
                  src={`${imageUrl}/${user.profileImage}`}
                  alt="Profile"
                  style={{ maxWidth: '200px', maxHeight: '200px' }} // You can adjust the max width and height as needed
                /> 
              )}
              </p> 
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
