import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner d-flex  align-items-center ">
        <div className="row container">
          <div className="col-md-10">
            {/* <h1 className="title">Better Life Through !</h1> */}
            <h2 className="title-sm"> Better Life Through</h2>
            <h1 className="title">Better Dentistry!!!</h1>
            <p>Join us to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.</p>
            <button className="shop-btn">Appointment</button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
