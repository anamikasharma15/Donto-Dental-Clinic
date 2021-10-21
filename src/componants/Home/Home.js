import React from "react";
// import Header from "./../Header/Header";
import "./Home.css";
// import aboutImage from "../images/bnner.jpg";
// import Banner from "./../Banner/Banner";
 import Services from "./../Services/Services";
//  import Contact from "./../Contact/Contact";
// import NotFound from "../NotFound/Notfound";
// import Footer from "./../Footer/Footer";

const Home = () => {
  return (
    <div>
        
        <div>
      <div className="banner d-flex  align-items-center ">
        <div className="row container">
          <div className="col-md-10">
            <h2 className="title-sm"> Better Life Through</h2>
            <h1 className="title">Better Dentistry!!!</h1>
            <p className="text-white">Join us to a fun and friendly dental environment. Our professionals are working so hard to see smile on your face that you deserve! We are dedicated about our duties.</p>
            <button className="shop-btn">Appointment</button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <section>
    <Services></Services> 
     
    <div className="container">
    <div className="bg-img mt-5">
        
        <div className="row mt-5">
             
        <div className="col-md-6">
            <img className="w-100"
                    src="https://image.freepik.com/free-photo/dentist-nurse-treat-patient-dental-office_85574-3.jpg"
                    alt=""></img>
                
            </div>
            <div className="col-md-6 text-white">
            <h1 className="mt-5">Our Dental Practice</h1>
              <p>
              Since 1998, Donto Dentistry has been proud to combine modern techniques and high-tech equipment. Dr. John Dae, Micha and his team deliver a personalized and comfortable dental care experience unlike any other Mason dentist.

              Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has embraced Cosmetic Dentistry and has redesigned the smiles for thev thousands of patients.
              </p>
            </div>
        </div>
    </div>
    </div>
      </section>
    </div>


      {/* <Header></Header> */}
      {/* <Banner></Banner> */}
     
      {/* <AboutUs></AboutUs> */}
      {/* <Category></Category> */}
      {/* <Customer></Customer> */}

      {/* <Contact></Contact> */}
      {/* <NotFound></NotFound> */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
