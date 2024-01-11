

import React from "react";
import "../Style/choose.css";
import Vedio from "./Vedio";

const Choose = () => {



  return (
    <section className="why-choose section" >
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>We Offer Different Services To Improve Your Health</h2>
							<img src="/assets/img/section-img.png" alt="#"/>
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-12">
						<div className="choose-left">
							<h3>Who We Are</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo. </p>
							<p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
							<div className="row">
								<div className="col-lg-6">
									<ul className="list" style={{all:'initial'}}>
										<li><i className="fa fa-caret-right"></i>Maecenas vitae luctus nibh. </li>
										<li><i className="fa fa-caret-right"></i>Duis massa massa.</li>
										<li><i className="fa fa-caret-right"></i>Aliquam feugiat interdum.</li>
									</ul>
								</div>
								<div className="col-lg-6">
									<ul className="list"  style={{all:'initial'}}>
										<li><i className="fa fa-caret-right"></i>Maecenas vitae luctus nibh.  </li>
										<li><i className="fa fa-caret-right"></i>Duis massa massa.</li>
										<li><i className="fa fa-caret-right"></i>Aliquam feugiat interdum.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="choose-right">
							<div className="video-image">
								
								<Vedio/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

export default Choose;
