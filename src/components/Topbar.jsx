import React from "react";
import "../Style/topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Topbar() {
  const navigate = useNavigate();
  const [tokenAvailable, setTokenAvailable] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleTokenStatus = () => {
    const token = localStorage.getItem("token");

    if (token) {
      // Token is available
      setTokenAvailable(true);
    } else {
      // Token is deleted
      setTokenAvailable(false);
    }
  };

  const checkTokenAvailability = () => {
    handleTokenStatus();
  };

  const handleDeleteToken = () => {
    localStorage.removeItem("token");
    handleTokenStatus();
  };

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    // Check token status on component mount
    handleTokenStatus();
  }, []);

  const navi = () => {
    navigate("/login");
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-12">
                  <div className="logo">
                    <Link to="">
                      <img src="/assets/img/logo.png" />
                    </Link>
                  </div>
                  <div className="mobile-nav"></div>
                </div>
                <div className="col-lg-6 col-md-9 col-12">
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active">
                          <Link to="/">
                            Home <i className="icofont-rounded-down"></i>
                          </Link>
                          <ul className="dropdown">
                            <li>
                              <Link to="/">Home Page 1</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/">Doctor </Link>
                        </li>
                        <li>
                          <Link to="/users" onClick={checkTokenAvailability}>
                            Users{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            Pages <i className="icofont-rounded-down"></i>
                          </Link>
                          <ul className="dropdown">
                            <li>
                              <Link to="">404 Error</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/blogs">
                            Blogs <i className="icofont-rounded-down"></i>
                          </Link>
                          <ul className="dropdown">
                            <li>
                              <Link to="/blogs">Blog Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-lg-2 col-6">
                  <Link to="/registration">
                    <button className="btn">Book Appointment </button>
                  </Link>
                </div>
                <div className="col-lg-2 col-6">
                  <div
                    className="dropdown"
                    onMouseEnter={handleDropdownToggle}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="profile-icon">
                      <span>&#9660;</span>
                    </div>

                    {dropdownVisible && (
                      <div className="dropdown-content">
                        <Link to="/login">
                          {tokenAvailable ? (
                            <button className="log" onClick={handleDeleteToken}>
                              Logout
                            </button>
                          ) : (
                            <button className="log" onClick={navi}>
                              Login
                            </button>
                          )}
                        </Link>
                        <Link to="/profile">Profile</Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Topbar;
