import React from 'react';
import "../Style/action.css";

function Action() {
  const actionStyle = {
    backgroundImage: `url('/assets/img/call-bg.jpg')`,
  };

  return (
    <>
      <section className="call-action overlay" data-stellar-background-ratio="0.5" style={actionStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="content">
                <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</p>
                <button className="btnac">Contact Now</button>
             
                      <button className="actionbtn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Action;
