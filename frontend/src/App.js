
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
//import StaffLogin from './components/staff/StaffLogin';
import LoginScreens   from "./components/screens/Login";
import RegisterScreens   from "./components/screens/Register";
import ForgotPasswordScreens   from "./components/screens/ForgotPassword";
import ResetPasswordScreens   from "./components/screens/ResetPassword";
import DisplayUsers   from "./components/screens/displayUsers";
import EditUser   from "./components/screens/editUser";
import StaffLogin from './components/staff/StaffLogin';
import SocialMedia from "./components/staff/SocialMedia";
import UserManagerLogin from "./components/staff/userM/login/UserManagerLogin";
//import PrivateUserStaffRoute from "./components/routes/PrivateUserStaffRoute";
import Header from "./components/staff/userM/Header";
import Home from "./components/staff/userM/Home";
import DisplayUsersList from "./components/staff/userM/DisplayUsersList";
import EditUsers  from "./components/staff/userM/EditUsers";
import UserList  from "./components/staff/userM/List";
import Footer from "./components/staff/Footer";
import MainHeader from "./components/screens/mainHeader";



import CreditCard from "./PaymentManagement/CreditCard/CreditCard";
import React from "react";

// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">

       
       <Router>
        <SocialMedia /> 

        <Routes>
         
         {/* <Route path="/" element={<StaffLogin/>} /> */}
        
        <Route path="/" element={<LoginScreens/>} /> 
        <Route path="/register" element={<RegisterScreens/>} /> 
        <Route path="/forgotpassword" element={<ForgotPasswordScreens/>} />   
        <Route path="/passwordreset/:token" element={<ResetPasswordScreens/>} />   
        <Route path="/displayUsers" element={   [<MainHeader/> ,<DisplayUsers/>] }/>  
        <Route path="/editUser/:id" element={  [<MainHeader/> ,<EditUser/>]} />
        
        {/* <Route path="/staff-login-flightM" element={<FlightManagerLogin/>} /> */}
        {/* <Route path="/staff-flightM" element={<FlightManagerLogin/>} /> */}
        <Route path="/staff-login" element={<StaffLogin/>} />
        
        <Route path="/staff-login-userM" element={<UserManagerLogin/>} /> 
        <Route path="/staff-userM" element={<UserManagerLogin/>} />
        <Route path="/staff-home" element={[<Header/>,<Home/>]} />
        <Route path="/display-userM" element={[<DisplayUsersList/>]} />
        
         <Route path="/edit-userM/:id" element={<EditUsers/>} />   
         <Route path="/edit-userM" element={<UserList />} /> 
        
        </Routes>
        {/* <Footer/> */}
      </Router> 

      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/card" element={<CreditCard />} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;