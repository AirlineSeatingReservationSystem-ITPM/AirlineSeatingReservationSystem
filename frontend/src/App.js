import CreditCard from "./PaymentManagement/CreditCard/CreditCard";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import NavBar from "./components/NavBar";
import Footer2 from "./components/Footer2";
import CreditCardDetails from "./PaymentManagement/CreditCard/CreditCardDetails";
import SocialMedia from "./SocialMedia";
import UpdateCard from "./PaymentManagement/CreditCard/UpdateCard";
import PaymentManagement from "./components/staff/PaymentManagement";
import Login from "./PaymentManagement/CreditCard/Login";


function App() {
  return (
    <div className="App">
       
      <Router>
        <SocialMedia/>
        
        
        <Routes>
          <Route path="/card" element={[<NavBar />, <CreditCard />]} />
          <Route path="/CreditCardDetails" element={[<NavBar />,<CreditCardDetails />]} />
          <Route path="/edit/:id" element={<UpdateCard />} />
          <Route path="/" element={<PaymentManagement />} />
          <Route path="/Login" element={<Login />} />
          
         
          
         
          
        </Routes>
        <Footer2/>
        
      </Router>
    </div>
  );
}

export default App;
