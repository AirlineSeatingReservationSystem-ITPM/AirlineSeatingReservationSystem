import CreditCard from "./PaymentManagement/CreditCard/CreditCard";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CreditCard />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
