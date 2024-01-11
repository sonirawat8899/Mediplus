import React, { useState } from "react";
import axios from "axios";
import "../Style/registration.css";


const RegistrationForm = () => {



  const initialValue = {
    name: "",
    username: "",
    password: "",
    email: "",
    mobile: "",
    address: "",
    profileImage: "", // Change null to an empty string
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // const handleChange = (e) => {
  //   if (e.target.name === "profileImage") {
     
  //     setFormValues({ ...formValues, profileImage: e.target.files[0] });
  //   } else {
  //     const { name, value } = e.target;
  //     setFormValues({ ...formValues, [name]: value });
  //   }
  // };

  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === "profileImage") {
      setFormValues({ ...formValues, profileImage: e.target.files[0] });
    } else {
      setFormValues({ ...formValues, [name]: value });

      if (name === "email") {
        try {
         
          const response = await axios.get(
            `https://3c62-115-242-209-74.ngrok-free.app/check-email/${value}`
          );

          if (response.data.exists) {
            setFormError((prevErrors) => ({
              ...prevErrors,
              email: "Email already exists!",
            }));
          } else {
            setFormError((prevErrors) => ({
              ...prevErrors,
              email: "",
            }));
          }
        } catch (error) {
          console.error("Error checking email:", error);
          // Handle error as needed
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
  
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("username", formValues.username);
    formData.append("password", formValues.password);
    formData.append("email", formValues.email);
    formData.append("mobile", formValues.mobile);
    formData.append("address", formValues.address);
    formData.append("profileImage", formValues.profileImage);
  
    try {
      const response = await axios.post(
        "https://3c62-115-242-209-74.ngrok-free.app/register",
        
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("");
        alert("Form submitted successfully!")
        setFormValues(initialValue); // Reset form values
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000 );
      } else {
        console.error("Error:", response.data);
        // Handle displaying the error message or taking appropriate action
      }
    } catch (error) {
      console.error("Error:", error.response.data);
      // Handle displaying the error message or taking appropriate action
    }
  };
  
  

  //validation

  const validate = (values) => {
    const error = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!values.username) {
      error.username = "Username is required!";
    } else if (!/^[a-zA-Z]+$/.test(values.username)) {
      error.username = "Username should contain only letters!";
    }

    if (!values.name) {
      error.name = "Name is required!";
    } else if (!/^[a-zA-Z]+$/.test(values.name)) {
      error.name = "Name should contain only letters!";
    }

    if (!values.password) {
      error.password = "Password is required!";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password can not exceed more than 10 characters";
    }

    if (!values.email) {
      error.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email formate!";
    }

    if (!values.mobile) {
      error.mobile = "Mobile is required!";
    } else if (!/^\d{10}$/.test(values.mobile)) {
      error.mobile =
        "Mobile number must be exactly 10 digits and contain only numbers!";
    }
    if (!values.address) {
      error.address = "Address is required!";
    }
    if (!values.profileImage) {
      error.profileImage = "Profile image is required!";
    }
    return error;

    
  };


  return (
    <div className="container">
      <h2>Registration Form</h2><br />
      <form onSubmit={handleSubmit}>
        <div  className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
           {/* {formError.name && <span className="error">{formError.name}</span>} */}
        </div>
        <p>{formError.name}</p>
        <div  className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
           {/* {formError.username && <span className="error">{formError.username}</span>} */}
        </div>
        <p>{formError.username}</p>
        <div  className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            />
            {/* {formError.password && <span className="error">{formError.password}</span>} */}
          
        </div>
        <p>{formError.password}</p>
        <div  className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
           {/* {formError.email && <span className="error">{formError.email}</span>} */}
        </div>
        <p>{formError.email}</p>
        <div  className="input-container">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formValues.mobile}
            onChange={handleChange}
          />
           {/* {formError.mobile && <span className="error">{formError.mobile}</span>} */}
        </div>       
        <p>{formError.mobile}</p>
        
        <div  className="input-container">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formValues.address}
            onChange={handleChange}
          >            
          </textarea>
        </div>
        <p>{formError.address}</p>

    
        <div className="input-container">
  <label htmlFor="profileImage">Profile Image</label>
  <input
    type="file"
    id="profileImage"
    name="profileImage"
    onChange={(e) => handleChange(e)}
  />
</div>


        <p>{formError.profileImage}</p>


        {successMessage && (
          <div className="success-message">{successMessage}</div> 
        )}


      
        <button className="reg" type="submit" >Register </button>  
       
      </form>
    </div>
  );
};

export default RegistrationForm;
