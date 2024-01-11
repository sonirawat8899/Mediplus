import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Style/clientss.css";

function Clientss() {
  const clientssStyle = {
    backgroundImage: `url('/assets/img/client-bg.jpg')`,
  };

  const cards = [
    {
      image: "/assets/img/client1.png",
    //   detailsLink: "/",
      smallImage: "/assets/img/client1_small.png",
      
    },
    {
      image: "/assets/img/client2.png",
    //   detailsLink: "/",
      smallImage: "/assets/img/client2_small.png",
    },
    {
      image: "/assets/img/client3.png",
    //   detailsLink: "portfolio-details.html",
      smallImage: "/assets/img/client3_small.png",
    },
    {
      image: "/assets/img/client4.png",
    //   detailsLink: "portfolio-details.html",
      smallImage: "/assets/img/client4_small.png",
    },
    {
      image: "/assets/img/client5.png",
    //   detailsLink: "portfolio-details.html",
      smallImage: "/assets/img/client5_small.png",
    },
    {
        image: "/assets/img/client1.png",
        // detailsLink: "/",
        smallImage: "/assets/img/client1_small.png",
        
      },
      {
        image: "/assets/img/client2.png",
        // detailsLink: "/",
        smallImage: "/assets/img/client2_small.png",
      },
      {
        image: "/assets/img/client3.png",
        // detailsLink: "portfolio-details.html",
        smallImage: "/assets/img/client3_small.png",
      },
      {
        image: "/assets/img/client4.png",
        // detailsLink: "portfolio-details.html",
        smallImage: "/assets/img/client4_small.png",
      },
   
  ];
  return (
    <>
      <div className="clients overlay" style={clientssStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12"></div>
            <Carousel
              showArrows={false}
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
                    
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
export default Clientss;
