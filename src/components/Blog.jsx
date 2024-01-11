import React from "react";
import "../Style/blog.css"
function Blog() {
  return (
    <>
      <section className="blog section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-news">
                <div className="news-head">
                  <img src="/assets/img/blog1.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">22 Aug, 2020</div>
                    <h3>
                     
                        We have annnocuced our new product.
                    
                    </h3>
                    <p className="text">
                      Lorem ipsum dolor a sit ameti, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt sed do incididunt
                      sed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-news">
                <div className="news-head">
                  <img src="/assets/img/blog2.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">15 Jul, 2020</div>
                    <h3>
                   
                        Top five way for solving teeth problems.
                      
                    </h3>
                    <p className="text">
                      Lorem ipsum dolor a sit ameti, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt sed do incididunt
                      sed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-news">
                <div className="news-head">
                  <img src="/assets/img/blog3.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">05 Jan, 2020</div>
                    <h3>
                   
                        We provide highly business soliutions.
                    
                    </h3>
                    <p className="text">
                      Lorem ipsum dolor a sit ameti, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt sed do incididunt
                      sed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blog;
