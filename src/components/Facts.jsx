import React from 'react'
import "../Style/facts.css"
import Counter from "./Counter"
function Facts() {

    const sectionStyle = {
        backgroundImage: `url('/assets/img/fun-bg.jpg')`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
     
      };

  return (
    <>
    
		<div id="fun-facts" className="fun-facts section overlay" style={sectionStyle}>
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-12">
						
						<div className="single-fun">
							<i className="icofont icofont-home"></i>
							<div className="content">
								<span className="counter"><Counter limit={3468} /></span>
								<p>Hospital Rooms</p>
							</div>
						</div>
						
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						
						<div className="single-fun">
							<i className="icofont icofont-user-alt-3"></i>
							<div className="content">
								<span className="counter"><Counter limit={557} /></span>
								<p>Specialist Doctors</p>
							</div>
						</div>
						
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						
						<div className="single-fun">
							<i className="icofont-simple-smile"></i>
							<div className="content">
								<span className="counter"><Counter limit={4379} /></span>
								<p>Happy Patients</p>
							</div>
						</div>
					
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						
						<div className="single-fun">
							<i className="icofont icofont-table"></i>
							<div className="content">
								<span className="counter"><Counter limit={32} /></span>
								<p>Years of Experience</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	
    </>
  )
}
export default Facts