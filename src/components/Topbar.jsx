import React from "react";
import "../Style/topbar.css";
import { Link } from "react-router-dom";
function Topbar(props) {
  const { tokenAvailable, setTokenAvailable } = props;


  const checkTokenAvailability = () => {
    const token = localStorage.getItem("token");
    setTokenAvailable(!!token); // Set tokenAvailable to true if token exists
  };


  const handleDeleteToken = () => {
    
    localStorage.removeItem('token');
    
  };

  
  return (
    <>
      <header className="header">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                <ul className="top-link">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Doctors</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <ul className="top-contact">
                  <li>
                    <i className="fa fa-phone"></i>+880 1234 56789
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <Link to="mailto:support@yourmail.com">
                      support@yourmail.com
                    </Link>
                  </li>
                  <div class="dropdown">
                    <div class="profile-icon">
                
             </div>
                    <div class="dropdown-content">
                      <Link to = "/profile">Profile</Link>
                      <Link to = "/login" onClick={handleDeleteToken}>Logout</Link>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="logo">
                    <Link to="">
                      <img src="/assets/img/logo.png" />
                    </Link>
                  </div>
                  <div className="mobile-nav"></div>
                </div>
                <div className="col-lg-7 col-md-9 col-12">
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

                <div className="col-lg-2 col-12">
                  <Link to="/registration">
                    <button className="btn">Book Appointment </button>
                  </Link>
                  <Link to="/login">
                    <button className="log" onClick={checkTokenAvailability}>
                      Login
                    </button>
                  </Link>
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
