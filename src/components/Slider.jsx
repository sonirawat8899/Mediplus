import Carousel from "react-bootstrap/Carousel";
import Cards from "./Cards";
import "../Style/slider.css";


function Slider() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block"
            src="/assets/img/slider2.jpg" // Replace with your image path
            alt="First slide"
            style={{ width: "100%", height: "600px" }}
          />
          <Carousel.Caption>
            <div className="single-slider">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>
                        We Provide <span>Medical</span> Services That You Can{" "}
                        <span>Trust!</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed nisl pellentesque, faucibus libero eu,
                        gravida quam.{" "}
                      </p>
                      <button className="btnn"> Get Appointment</button>
                      <button className="btnnn">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="/assets/img/slider.jpg" // Replace with your image path
            alt="Second slide"
            style={{ width: "100%", height: "600px" }}
          />
          <Carousel.Caption>
            <div className="single-slider">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>
                        We Provide <span>Medical</span> Services That You Can{" "}
                        <span>Trust!</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed nisl pellentesque, faucibus libero eu,
                        gravida quam.{" "}
                      </p>
                      <button className="btnn"> Get Appointment</button>
                      <button className="btnnn">About Us</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="/assets/img/slider3.jpg" // Replace with your image path
            alt="Third slide"
            style={{ width: "100%", height: "600px" }}
          />
          <Carousel.Caption>
            <div className="single-slider">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="text">
                      <h1>
                        We Provide <span>Medical</span> Services That You Can{" "}
                        <span>Trust!</span>
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed nisl pellentesque, faucibus libero eu,
                        gravida quam.{" "}
                      </p>
                      <button className="btnn"> Get Appointment</button>
                      <button className="btnnn">Contact Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Cards />
    </>
  );
}
export default Slider;
