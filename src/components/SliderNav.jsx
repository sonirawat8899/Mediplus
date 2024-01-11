import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Style/slidernav.css";

function SliderNav() {
  const imageStyles = {
    width: "100%",
    height: "400px",
    position: "relative", /* To position the button */
  };

  const cards = [
    {
      image: "/assets/img/pf1.jpg",
      detailsLink: "/blogs",
    },
    {
      image: "/assets/img/pf2.jpg",
      detailsLink: "/",
    },
    {
      image: "/assets/img/pf4.jpg",
      detailsLink: "portfolio-details.html",
    },
    {
      image: "/assets/img/pf1.jpg",
      detailsLink: "portfolio-details.html",
    },
    {
      image: "/assets/img/pf2.jpg",
      detailsLink: "portfolio-details.html",
    },
    {
      image: "/assets/img/pf3.jpg",
      detailsLink: "portfolio-details.html",
    },
    {
      image: "/assets/img/pf4.jpg",
      detailsLink: "portfolio-details.html",
    },
  ];

  return (
    <section>
      <div className="container-fluid" style={imageStyles}>
        <div className="row">
          <div className="col-lg-12 col-12">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              centerMode={true}
              centerSlidePercentage={25}
              emulateTouch={true}
              transitionTime={1000}
            >
              {cards.map((card, index) => (
                <div className="single-pf" key={index}>
                  <div className="image-container">
                    <img src={card.image} alt={`Slide ${index + 1}`} />
                    <a href={card.detailsLink} className="btn">
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderNav;
