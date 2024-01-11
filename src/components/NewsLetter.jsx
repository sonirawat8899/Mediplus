import React, { useState } from 'react';
import '../Style/newsletter.css';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    // Validate email format (you can use a regex or any validation method you prefer)
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
    setIsValid(isValidEmail);
    setIsTouched(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsTouched(true);

    if (isValid) {
      // If email is valid, proceed with submission
      console.log('Valid email:', email);
      // Reset the email input after successful submission
      setEmail('');
      setIsTouched(false);
    } else {
      // If email is not valid, show an error or handle it accordingly
      console.error('Invalid email. Please enter a valid email address.');
    }
  };

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6  col-12">
            <div className="subscribe-text">
              <h6>Sign up for newsletter</h6>
              <p className="">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,<br /> homero alterum.</p>
            </div>
          </div>
          <div className="col-lg-6  col-12">
            <div className="subscribe-form">
              <form onSubmit={handleSubmit} className="newsletter-inner">
                <input
                  name="EMAIL"
                  placeholder="Your email address"
                  className={`common-input ${(!isValid && isTouched) ? 'invalid' : ''}`}
                  value={email}
                  onChange={handleInputChange}
                  required
                  type="email"
                />
                {(!isValid && isTouched) && <p className="error-message">Please fill out this field with a valid email address.</p>}
                <button className="btn" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
