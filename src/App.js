import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './componants/Header/Header';
import Home from './componants/Home/Home'
import Footer from './componants/Footer/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './componants/NotFound/Notfound';
import AboutUS from './componants/AboutUs/AboutUs';
import Contact from './componants/Contact/Contact';
import Services from './componants/Services/Services';
import ServiceDetails from './componants/ServiceDetails/ServiceDetails';
import LogIn from './componants/LogIn/LogIn';
import Dentists from './componants/Dentists/Dentists';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './componants/PrivateRoute/PrivateRoute';
// import LogIn from './components/LogIn/LogIn';
// import AuthProvider from './Firebase/AuthProvider';
// import PrivateRoute from './Firebase/PrivateRoute';


function App() {
  return (
      <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
           <Route exact path="/">
              <Home></Home>
            </Route> 
             <PrivateRoute path="/aboutUs">
              <AboutUS></AboutUS>
            </PrivateRoute> 
             <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute> 

             <Route exact path="/services">
               <Services></Services>
            </Route>
             <PrivateRoute exact path="/detail/:detailId">
               <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/logIn">
              <LogIn></LogIn>
            </Route> 
            <PrivateRoute exact path="/dentists">
              <Dentists></Dentists>
            </PrivateRoute> 


            {/* <PrivateRoute path="/pharmacy">
              <Pharmacy></Pharmacy>
            </PrivateRoute> */}
            
            {/* <PrivateRoute path="/about/:id">
              <About></About>
            </PrivateRoute> */}
          
             <Route path="*">
              <NotFound></NotFound>
            </Route> 
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;




