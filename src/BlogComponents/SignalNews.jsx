import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/signalnews.css"
 function SignalNews() {

    const newsStyle = {
        backgroundImage: `url('/assets/img/fun-bg.jpg')`,
        backgroundSize: 'cover',
        color: 'white', 
        fontSize: '18px', 
        
        
      };
      

  return (
 <>  
		<section className="news-single section">
			<div className="container">
				<div className="row">
                <div className="card">
                    <div className="card-body">
					<div className="col-lg-8 col-12">
						<div className="row">
							<div className="col-12">
								<div className="single-main">
									
									<div className="news-head">
										<img src="/assets/img/blog1.jpg" alt="#"/>
									</div>
									
									<h1 className="news-title">More than 80 clinical trials launch to test of the coronavirus .</h1>
									
									<div className="meta">
										<div className="meta-left">
											<span className="author"><img src="/assets/img/author1.jpg" alt="#"/>Naimur Rahman</span>
											<span className="date"><i className="fa fa-clock-o"></i>03 Feb 2019</span>
										</div>
										<div className="meta-right">
											<span className="comments"><i className="fa fa-comments"></i>05 Comments</span>
											<span className="views"><i className="fa fa-eye"></i>33K Views</span>
										</div>
									</div>
								
									<div className="news-text">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.</p>
										<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commod</p>
										<div className="image-gallery">
											<div className="row">
												<div className="col-lg-6 col-md-6 col-12">
													<div className="single-image">
														<img src="/assets/img/blog2.jpg" alt="#"/>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-12">
													<div className="single-image">
														<img src="assets/img/blog3.jpg" alt="#"/>
													</div>
												</div>
											</div>
										</div>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.</p>
										<blockquote className="overlay"  style={newsStyle}>
											<p>Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales</p>					
										</blockquote>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales id dui.</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse</p>
									</div>
									<div className="blog-bottom">
									
										<ul className="social-share">
											<li className="facebook"><Link to="/"><i className="fa fa-facebook"></i><span>Facebook</span></Link></li>
											<li className="twitter"><Link to="/"><i className="fa fa-twitter"></i><span>Twitter</span></Link></li>
											<li className="google-plus"><Link to="/"><i className="fa fa-google-plus"></i></Link></li>
											<li className="linkedin"><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
											<li className="pinterest"><Link to="/"><i className="fa fa-pinterest"></i></Link></li>
										</ul>
									
										<ul className="prev-next">
											<li className="prev"><Link to="/"><i className="fa fa-angle-double-left"></i></Link></li>
											<li className="next"><Link to="/"><i className="fa fa-angle-double-right"></i></Link></li>
										</ul>
										
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="blog-comments">
									<h2>All Comments</h2>
									<div className="comments-body">
										
										<div className="single-comments">
											<div className="main">
												<div className="head">
													<img src="/assets/img/author1.jpg" alt="#"/>
												</div>
												<div className="body">
													<h4>Afsana Mimi</h4>
													<div className="comment-meta"><span className="meta"><i className="fa fa-calendar"></i>March 05, 2019</span><span className="meta"><i className="fa fa-clock-o"></i>03:38 AM</span></div>
													<p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</p>
													<Link to="/"><i className="fa fa-reply"></i>replay</Link>
												</div>
											</div>
										</div>		
										
										<div className="single-comments left">
											<div className="main">
												<div className="head">
													<img src="/assets/img/author2.jpg" alt="#"/>
												</div>
												<div className="body">
													<h4>Naimur Rahman</h4>
													<div className="comment-meta"><span className="meta"><i className="fa fa-calendar"></i>March 05, 2019</span><span className="meta"><i className="fa fa-clock-o"></i>03:38 AM</span></div>
													<p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</p>
													<Link to="/"><i className="fa fa-reply"></i>replay</Link>
												</div>
											</div>
										</div>		
										
										<div className="single-comments">
											<div className="main">
												<div className="head">
													<img src="/assets/img/author3.jpg" alt="#"/>
												</div>
												<div className="body">
													<h4>Suriya Molharta</h4>
													<div className="comment-meta"><span className="meta"><i className="fa fa-calendar"></i>March 05, 2019</span><span className="meta"><i className="fa fa-clock-o"></i>03:38 AM</span></div>
													<p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</p>
													<Link to="/"><i className="fa fa-reply"></i>replay</Link>
												</div>
											</div>
										</div>											
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="comments-form">
									<h2>Leave Comments</h2>
									
									<form className="form" method="post" action="mail/mail.php">
										<div className="row">
											<div className="col-lg-4 col-md-4 col-12">
												<div className="form-group">
													<i className="fa fa-user"></i>
													<input type="text" name="first-name" placeholder="First name" required="required"/>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-12">
												<div className="form-group">
													<i className="fa fa-envelope"></i>
													<input type="text" name="last-name" placeholder="Last name" required="required"/>
												</div>
											</div>
											<div className="col-lg-4 col-md-4 col-12">
												<div className="form-group">
													<i className="fa fa-envelope"></i>
													<input type="email" name="email" placeholder="Your Email" required="required"/>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group message">
													<i className="fa fa-pencil"></i>
													<textarea name="message" rows="7" placeholder="Type Your Message Here" ></textarea>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group button">	
													<button type="submit" className="btn primary"><i className="fa fa-send"></i>Submit Comment</button>
												</div>
											</div>
										</div>
									</form>
								
								</div>
							</div>
						</div>
					</div>
					</div>
					</div>


					<div className="col-lg-4 col-12">
						<div className="main-sidebar">
						
							<div className="single-widget search">
								<div className="form">
									<input type="email" placeholder="Search Here..."/>
									<a className="button" href="/"><i className="fa fa-search"></i></a>
								</div>
							</div>
							
							<div className="single-widget category">
								<h3 className="title">Blog Categories</h3>
								<ul className="categor-list">
									<li><Link to="/">Men's Apparel</Link></li>
									<li><Link to="/">Women's Apparel</Link></li>
									<li><Link to="/">Bags Collection</Link></li>
									<li><Link to="/">Accessories</Link></li>
									<li><Link to="/">Sun Glasses</Link></li>
								</ul>
							</div>
						
							<div className="single-widget recent-post">
								<h3 className="title">Recent post</h3>
								
								<div className="single-post">
									<div className="image">
										<img src="/assets/img/blog-sidebar1.jpg" alt="#"/>
									</div>
									<div className="content">
										<h5><Link to="/">We have annnocuced our new product.</Link></h5>
										<ul className="comment">
											<li><i className="fa fa-calendar" aria-hidden="true"></i>Jan 11, 2020</li>
											<li><i className="fa fa-commenting-o" aria-hidden="true"></i>35</li>
										</ul>
									</div>
								</div>
								
								<div className="single-post">
									<div className="image">
										<img src="/assets/img/blog-sidebar2.jpg" alt="#"/>
									</div>
									<div className="content">
										<h5><Link to="/">Top five way for solving teeth problems.</Link></h5>
										<ul className="comment">
											<li><i className="fa fa-calendar" aria-hidden="true"></i>Mar 05, 2019</li>
											<li><i className="fa fa-commenting-o" aria-hidden="true"></i>59</li>
										</ul>
									</div>
								</div>
							
								<div className="single-post">
									<div className="image">
										<img src="/assets/img/blog-sidebar3.jpg" alt="#"/>
									</div>
									<div className="content">
										<h5><Link to="/">We provide highly business soliutions.</Link></h5>
										<ul className="comment">
											<li><i className="fa fa-calendar" aria-hidden="true"></i>June 09, 2019</li>
											<li><i className="fa fa-commenting-o" aria-hidden="true"></i>44</li>
										</ul>
									</div>
								</div>
								
							</div>
							
							<div className="single-widget side-tags">
								<h3 className="title">Tags</h3>
								<ul className="tag">
									<li><Link to="/">business</Link></li>
									<li><Link to="/">wordpress</Link></li>
									<li><Link to="/">html</Link></li>
									<li><Link to="/">multipurpose</Link></li>
									<li><Link to="/">education</Link></li>
									<li><Link to="/">template</Link></li>
									<li><Link to="/">Ecommerce</Link></li>
								</ul>
							</div>
						
						</div>
					</div>
				</div>
			</div>
		</section>
		
 </>
  )
}
export default SignalNews