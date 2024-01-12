import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style/users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userData, setUserData] = useState(null);

  const [updatedUserData, setUpdatedUserData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    mobile: "",
    address: "",
    profileImage: null,
  });

  const handleUpdateUser = async (_id, e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://3988-115-242-209-74.ngrok-free.app/users/${_id}`,
        
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
            
          },
        }
      );

      if (response.status === 200) {
        
        setUsers(
          users.map((user) =>
            user._id === _id ? { ...user, ...updatedUserData } : user
          )
        );
        // Additional actions upon successful update
        console.log(`User with ID ${_id} updated successfully`);
        // Reset the form data
        setUpdatedUserData(users);
      }
    } catch (error) {
      // Handle errors if the update fails
      console.error(`Error updating user with ID ${_id}:`, error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData({ ...updatedUserData, [name]: value });
  };

  //Fetch all userdata
  const imageUrl = "https://43f5-115-242-209-74.ngrok-free.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://2eaf-115-242-209-74.ngrok-free.app/users",
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
    
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }
        
        setUsers(response.data);
        setError(null); // Reset error state on successful fetch
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later."); // Set error state
        setUsers([]); // Reset users to an empty array on error
      }
    };

    fetchData();
  }, []);

  const handleClosePopup = () => {
    setSelectedUser(null);
    setShowPopup(false);
  };

  const fetchUserData = async (_id) => {
    try {
      const response = await axios.get(
        `https://43f5-115-242-209-74.ngrok-free.app/users/${_id}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  const handleViewUser = async (_id) => {
    try {
      const userData = await fetchUserData(_id);
      if (userData) {
        setUserData(userData);
        setSelectedUser(_id);
        setShowPopup(true);
      } else {
        // Handle error or no user data found
        console.error("No user data found");
      }
    } catch (error) {
      // Handle error if needed
      console.error("Error viewing user:", error);
    }
  };

  const handleDeleteUser = async (_id) => {
    try {
      const response = await axios.delete(
        `https://43f5-115-242-209-74.ngrok-free.app/users/${_id}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (response.status === 200) {
        // If deletion is successful, update the users state by filtering out the deleted user
        setUsers(users.filter((user) => user._id !== _id));
        // You can perform additional actions upon successful deletion
        console.log(`User with ID ${_id} deleted successfully`);
        
      }
      alert("Data deleted successfully")
    } catch (error) {
      // Handle errors if the deletion fails
      console.error(`Error deleting user with ID ${_id}:`, error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            {/* <th>Password</th> */}
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Date</th>
            <th>profileImage</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                {/* <td>{user.password}</td> */}
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.address}</td>
                <td>{new Date(user.date).toLocaleDateString()}</td>
                <td>
                  <img
                    src={`${imageUrl}/${user.profileImage}`}
                    alt={`Profile of ${user.name}`}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>

                <td>
                  <button
                    className="primary-button"
                    onClick={() => handleViewUser(user._id)}
                  >
                    View
                  </button>
                  <button
                    className="danger-button"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="success-button"
                    onClick={() => {
                      setSelectedUser(user._id);
                      setUpdatedUserData({
                        name: user.name,
                        username: user.username,
                        password: user.password,
                        email: user.email,
                        mobile: user.mobile,
                        address: user.address,
                        profileImage: user.profileImage,
                      });
                      setShowPopup(true);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
      
         
              {/* View particular userdata  */}

      {showPopup && !updatedUserData.name && userData && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <div className="popup-header">
              <h2>User Data</h2>
            </div>
            <div className="popup-body">
              {userData ? (
                <div className="user-details">
                  <div>
                    <strong>Name:</strong> {userData.name}
                  </div>
                  <div>
                    <strong>Username:</strong> {userData.username}
                  </div>
                  {/* Include other user data fields similarly */}
                  <div>
                    <strong>Email:</strong> {userData.email}
                  </div>
                  <div>
                    <strong>Mobile:</strong> {userData.mobile}
                  </div>
                  <div>
                    <strong>Address:</strong> {userData.address}
                  </div>
                  <div>
                    <strong>Date:</strong>{" "}
                    {new Date(userData.date).toLocaleDateString()}
                  </div>
                  <div>
                    <strong>Profile Image:</strong>
                    <br />
                    <img
                  
                      src={`${imageUrl}/${userData.profileImage}`}
                      alt={`Profile of ${userData.name}`}
                      style={{ width: "100px", height: "auto" }}
                    />
                  </div>

                  {/* Include other user data fields similarly */}
                </div>
              ) : (
                <p>No user data available</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Edit User Popup */}

      {showPopup && updatedUserData.name && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <div className="popup-body">
              <div className="user-details">
                <form onSubmit={() => handleUpdateUser(selectedUser)}>
                  <label>
                    Name:
                    <input
                      type="text"
                      name="name"
                      value={updatedUserData.name}
                      onChange={handleInputChange}
                    />
                  </label>
                  {/* Add other input fields for updating user data */}
                  <label>
                    Username:
                    <input
                      type="text"
                      name="username"
                      value={updatedUserData.username}
                      onChange={handleInputChange}
                    />
                  </label>
                  {/* <label>
              Password:
              <input
                type="password"
                name="password"
                value={updatedUserData.password}
                onChange={handleInputChange}
              />
            </label> */}
                  {/* Add additional input fields similarly */}
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={updatedUserData.email}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Mobile:
                    <input
                      type="text"
                      name="mobile"
                      value={updatedUserData.mobile}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Address:
                    <input
                      type="text"
                      name="address"
                      value={updatedUserData.address}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Profile Image:
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setUpdatedUserData({
                            ...updatedUserData,
                            profileImage: reader.result,
                          });
                        };
                        if (file) {
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                    {updatedUserData.profileImage && (
                      <img
                      src={`${imageUrl}/${updatedUserData.profileImage}`}
                        alt="Profile"
                        style={{ width: "100px", height: "auto" }}
                      />
                    )}
                  </label>
                  {/* Add other input fields for user data */}
                  <button type="submit" className="updt">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
