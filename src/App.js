import "./App.css";
import Topbar from "./components/Topbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BlogPage from "./pages/BlogPage";
import Registration from "./BlogComponents/Registration";
import Login from "./BlogComponents/Login";
import Users from "./BlogComponents/Users";

import ForgetPassword from "./BlogComponents/ForgetPassword";
import CreateNewPassword from "./BlogComponents/CreateNewPassword";
import Notfound from "./components/Notfound";
import Profile from "./BlogComponents/Profile";



function App() {
  // Get the token from local storage
  const [tokenAvailable, setTokenAvailable] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar tokenAvailable={tokenAvailable} setTokenAvailable={setTokenAvailable} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notfound" element={<Notfound />} />
         <Route path="/profile" element={<Profile/>} />
        
      
          {/* Check if token is available to render UserProfile */}
          {tokenAvailable ? (
            <Route path="/users" element={<Users />} />
          ) : (
            <Route path="/users" element={<Navigate to="/login" />} />
          )}
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route
            path="/createnewpassword/:token"
            element={<CreateNewPassword />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
