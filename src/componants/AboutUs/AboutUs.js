import React from "react";
import "./AboutUs.css";

import aboutImage from "../images/bnner.jpg";

const AboutUs = () => {
  return (
    <div className="container ">
        <div className="about-section">
    <div className="mt-5">
        
        <div className="row mt-5">
             
        <div className="col-md-6">
        <div className="about-image">
              <img className="w-100" src={aboutImage} alt="" />
             </div>

            {/* <img className="w-100"
                    src="https://image.freepik.com/free-photo/dentist-nurse-treat-patient-dental-office_85574-3.jpg"
                    alt=""></img> */}
                
            </div>
            <div className="col-md-6 text-white">
            <h1 className="mt-5">Experienced Dentist</h1>
           <p>
             Dr. Harrie believes in providing her patients with more than just world class dental care. He also helps patients recognize the vital connection between dental health and whole body health. A graduate of the University of California’s School of Dentistry, Dr. Harrie is a leader in the movement to bring environmental sanity and well-being into the dental world for future.
           <br/> 
            Welcome to Datobbo Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing.
          </p>
            
            </div>
        </div>
    </div>
    </div>
    </div>
    
    
  );
};

export default AboutUs;
