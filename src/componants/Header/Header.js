
   import React from "react";
   import "./Header.css";
   import logo from "./../images/logo.jpg";
    import { Link } from "react-router-dom";
    import useAuth from '../hooks/useAuth';

   
   const Header = () => {
    const { user, logOut } = useAuth();

     return (
       <div>
         <div className="row header-container">
           <div className="col-md-2 col-lg-2 col-sm-12 ">
             <div className="logo p-3">
                {/* <h1>Donto Dental Clinic</h1> */}
               <img width="70px" src={logo} alt="" />
             </div>
           </div>
           <div className="col-md-10 col-lg-10 col-sm-12">
             <div className="menu-items me-5">
               <ul className="d-flex align-items-end justify-content-end">
                   <h1>Donto Dental Clinic</h1>
                 <li className="items m-2 p-2"><Link to='/home'>Home</Link></li>
                 <li className="items m-2 p-2"><Link to='/aboutUs'>About</Link></li>
                 <li className="items m-2 p-2"><Link to='/contact'>Contact Us</Link></li>
                 <li className="items m-2 p-2"><Link to='/services'>Services</Link></li>
                 <li className="items m-2 p-2"><Link to='/dentists'>Top Dentist</Link></li>
                 <li className="items m-2 p-2"><Link to='/logIn'>Login</Link></li>
                 </ul>
                 {
                        user?.email ?
                           <div className='d-flex align-items-center justify-content-center'>
                              <div>
                                 <h5> Log in as : {user.displayName}</h5>
                              </div>
                              <div className='ms-2'>
                                 <button className='btn btn-warning' onClick={logOut}>Log Out</button>
                              </div>
                           </div>
                           :
                      <p>Guest</p>
                     }
                  {/* {
                        user?.email ?
                           <div className='d-flex align-items-center j<h5> Log in as : {user.displayName}</h5>
                              </div>ustify-content-center'>
                              <div>
                                 
                              <div className='ms-2'>
                                 <button className='btn btn-warning' onClick={logOut}>Log Out</button>
                              </div>
                           </div>
                           :
                           <p>Guest</p>
                     } */}

                 {/* <div className="text-center">
                 <h6>{displayName}</h6>
                  <p className="m-0 mb-2">{email}</p>                    <button onClick={logOut} className="btn btn-primary">
                      Sign Out
                   </button> */}
                 {/* </div> */}
               
             </div>
          </div>
          </div>
          </div>
        //  </div>
      //  </div>
     );
   };
   
   export default Header;

   


