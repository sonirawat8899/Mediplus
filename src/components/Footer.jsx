import React, { useState } from "react";
import "../Style/footer.css";
import { Link } from "react-router-dom";


function Footer() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(event.target.value);

    setIsValidEmail(isValid);
    setIsEmailTouched(true);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    setIsEmailTouched(true);

    if (isValidEmail) {
      // If email is valid, proceed with your logic (e.g., submit, store, etc.)
      console.log("Valid email:", email);
      // Clear the email field after submission
      setEmail("");
      setIsEmailTouched(false);
    } else {
      // If email is not valid, show an error or handle it accordingly
      console.error("Invalid email. Please enter a valid email address.");
    }
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor sit am consectetur adipisicing elit do
                  eiusmod tempor incididunt ut labore dolore magna.
                </p>

                <ul className="social">
                  <li>
                    <Link to="#">
                      <i className="icofont-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    
                  <Link to="#">
                      <i className="icofont-google-plus"></i>
                      </Link>
                  </li>
                  <li>
                  <Link to="#">
                      <i className="icofont-twitter"></i>
                      </Link>
                  </li>
                  <li>
                  <Link to="#">
                      <i className="icofont-vimeo"></i>
                      </Link>
                  </li>
                  <li>
                  <Link to="#">
                      <i className="icofont-pinterest"></i>
                      </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h2>Quick Links</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12" style={{all:'initial'}}>
                    <ul>
                      <li>
                        <a>
                          <i className="fa fa-caret-right" aria-hidden="true"></i>
                          Home
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-caret-right" aria-hidden="true"></i>
                          About Us
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-caret-right" aria-hidden="true"></i>
                          Services
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-caret-right" aria-hidden="true"></i>
                          Our Cases
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-caret-right" aria-hidden="true"></i>
                          Other Links
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <ul style={{all:'initial'}}>
                      <li>
                        <a>
                          <i className="fa fa-caret-right" aria-hidden="true"></i>
                          Consuling
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-caret-right" aria-hidden="true"></i>
                          Finance
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-caret-right" aria-hidden="true"></i>
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-caret-right" aria-hidden="true"></i>
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-caret-right" aria-hidden="true"></i>
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>Open Hours</h2>
                <p>
                  Lorem ipsum dolor sit ame consectetur adipisicing elit do
                  eiusmod tempor incididunt.
                </p>
                <ul className="time-sidual">
                  <li className="day">
                    Monday - Fridayp <span>8.00-20.00</span>
                  </li>
                  <li className="day">
                    Saturday <span>9.00-18.30</span>
                  </li>
                  <li className="day">
                    Monday - Thusday <span>9.00-15.00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>Newsletter</h2>
                <p>
                  subscribe to our newsletter to get allour news in your inbox..
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                </p>

                <form onSubmit={handleEmailSubmit} className="newsletter-inner">
                  <input
                    name="email"
                    placeholder="Email Address"
                    className={`common-input ${
                      !isValidEmail && isEmailTouched ? "invalid" : ""
                    }`}
                    value={email}
                    onChange={handleEmailChange}
                    required
                    type="email"
                  />
                  {!isValidEmail && isEmailTouched && (
                    <p className="error-message">
                      Please enter a valid email address.
                    </p>
                  )}
                  <button className="button" type="submit">
                    <i className="icofont icofont-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							<div className="copyright-content">
								<p>© Copyright 2018  |  All Rights Reserved by <Link to="https://www.wpthemesgrid.com" target="_blank">wpthemesgrid.com</Link> </p>
							</div>
						</div>
					</div>
				</div>
			</div>
    </footer>
  );
}

export default Footer;
