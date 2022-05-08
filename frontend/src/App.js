import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import StaffLogin from './components/staff/StaffLogin';
import LoginScreens from "./components/screens/Login";
import RegisterScreens from "./components/screens/Register";
import ForgotPasswordScreens from "./components/screens/ForgotPassword";
import ResetPasswordScreens from "./components/screens/ResetPassword";
import DisplayUsers from "./components/screens/displayUsers";
import EditUser from "./components/screens/editUser";
import StaffLogin from "./components/staff/StaffLogin";
import SocialMedia from "./components/staff/SocialMedia";
import UserManagerLogin from "./components/staff/userM/login/UserManagerLogin";
import PrivateUserStaffRoute from "./components/routes/privateUserStaffRoute";
import Header from "./components/staff/userM/Header";
import Home from "./components/staff/userM/Home";
import DisplayUsersList from "./components/staff/userM/DisplayUsersList";
import EditUsers from "./components/staff/userM/EditUsers";
import UserList from "./components/staff/userM/List";
import Footer from "./components/staff/Footer";
import MainHeader from "./components/screens/mainHeader";
import UserReportGenerator from "./components/staff/userM/Users";
import AboutUs from "./components/screens/AboutUs";
//add complain-chandima
import AddComplain from "./components/screens/AddComplain";
//add medicare-chandima
import MediCare from "./components/screens/MediCare";

import AddMeal from "./components/staff/userM/AddMeal";
// import ListMeal from "./components/staff/userM/ListMeal";
import DisplayMealsList from "./components/staff/userM/DisplayMealsList";
import EditMealList from "./components/staff/userM/EditMealList";

// IT20081720 - (kasun)

import React from "react";
// import CreditCardDetails from "./components/screens/CreditCard";
import PrivatePaymentStaffRoute from "./components/routes/privatePaymentStaffRoute";
import PaymentManagerLogin from "./components/staff/paymentM/Login/PaymentManagerLogin";
import PaymentHeader from "./components/staff/paymentM/paymentHeader";
import PaymentHome from "./components/staff/paymentM/Home";
import RefundRequests from "./components/screens/RefundRequests";
import CreditCardDetails from "./components/screens/CreditCardDetails";
import SelectCredit from "./components/screens/SelectCredit";
import CreditCard from "./components/screens/CreditCard";
import CreditCardDetails2 from "./components/screens/CreditCardDetails2";
import CreditCard2 from "./components/screens/CreditCard2";
import RefundRequestsview from "./components/staff/paymentM/RefundRequestsview";
import PaymentReportGenerator from "./components/staff/paymentM/RefundRequests";
import Display from "./components/staff/paymentM/Display";
import TravelInsuvarance from "./components/screens/TravelInsuvarance";
import HomeSc from "./components/screens/HomeSc";
import UpdateCard from "./components/screens/UpdateCard";
import InsuranceFull from "./components/screens/InsuranceFull";
import Paymentdone from "./components/screens/Paymentdone";

import NavBar from "./components/NavBar";
// import Footer2 from "./components/Footer2";
// import CreditCardDetails from "./PaymentManagement/CreditCard/CreditCardDetails";
// import SocialMedia from "./SocialMedia";
// import UpdateCard from "./PaymentManagement/CreditCard/UpdateCard";
import PaymentManagement from "./components/staff/PaymentManagement";
// import Login from "./PaymentManagement/CreditCard/Login";

// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

//flight managment-IT20104962 (chandima)
import FlightManagerLogin from "./components/staff/flightM/login/FlightManagerLogin";
import PrivateFlightStaffRoute from "./components/routes/privateFlightStaffRoute";
import FMHeader from "./components/staff/flightM/Header";
import FMHome from "./components/staff/flightM/Home";
import DisplayFlights from "./components/staff/flightM/DisplayFlights";
import AddFlights from "./components/staff/flightM/AddFlightShcedule";
import Edit from "./components/staff/flightM/Edit";
import FlightList from "./components/staff/flightM/List";
import FlightReportGenerator from "./components/staff/flightM/Flights";
//import PrivateFlightStaff from "./components/staff/flightM/login/PrivateFlightStaff";
import DisplayComplains from "./components/staff/flightM/DisplayComplains";
import ListComplain from "./components/staff/flightM/ListComplain";
import EditComplain from "./components/staff/flightM/EditComplain";
import Reply from "./components/staff/flightM/Reply";


//IT19992358 Nuwan
import MainHome from "./components/screens/mainHome";
import Bookingform from "./components/screens/bookingform";
import BookingTable from "./components/screens/bookingtable";
import BookingList from "./components/screens/bookinglist";
import NAvBar from "./components/screens/NavBar";
import SuccessPage from "./components/screens/successPage";
import Checkbookings from "./components/screens/checkbookings";
import Specialbookings from "./components/screens/specialbookings";




function App() {
  return (
    <div className="App">
      <Router>
        <SocialMedia />

        {/* <Footer2/> */}

        <SocialMedia />

        <Routes>
          {/* <Route path="/" element={<StaffLogin/>} /> */}
          <Route path="/" element={<LoginScreens />} />
          <Route path="/register" element={<RegisterScreens />} />
          <Route path="/forgotpassword" element={<ForgotPasswordScreens />} />
          <Route
            path="/passwordreset/:token"
            element={<ResetPasswordScreens />}
          />
          //IT20081720 (Kasun)
          {/* <Route path="/card" element={[<NavBar />, <CreditCard />]} /> */}
          {/* <Route path="/CreditCardDetails" element={[<NavBar />,<CreditCardDetails />]} /> */}
          <Route path="/edit/:id" element={<UpdateCard />} />
          <Route
            path="/Payment"
            element={[<MainHeader />, <PaymentManagement />]}
          />
          <Route
            path="/CreditCardDetails"
            element={[<MainHeader />, <CreditCardDetails />]}
          />
          <Route
            path="/SelectCredit"
            element={[<MainHeader />, <SelectCredit />]}
          />
          <Route
            path="/CreditCard"
            element={[<MainHeader />, <CreditCard />]}
          />
          <Route
            path="/CreditCardDetails2"
            element={[<MainHeader />, <CreditCardDetails2 />]}
          />
          <Route
            path="/CreditCard2"
            element={[<MainHeader />, <CreditCard2 />]}
          />
          <Route
            path="/RefundRequestsview"
            element={[<PaymentHeader />, <RefundRequestsview />]}
          />
          <Route
            path="/TravelInsuvarance"
            element={[<MainHeader />, <TravelInsuvarance />]}
          />
          <Route path="/HomeSc" element={[<MainHeader />, <HomeSc />]} />
          <Route
            path="/UpdateCard/:id"
            element={[<MainHeader />, <UpdateCard />]}
          />
          <Route
            path="/InsuranceFull"
            element={[<MainHeader />, <InsuranceFull />]}
          />
          <Route path="/Paymentdone" element={<Paymentdone />} />

          
          //IT19992358 (Nuwan)
          <Route path="/mainHome" element={[<MainHeader />, <MainHome/>]} />
          <Route path="/bookingform" element={[<MainHeader />,<Bookingform/>]} />
          <Route path="/bookingtable" element={[<MainHeader />,<BookingTable/>]} />
          <Route path="/bookinglist" element={[<MainHeader />,<BookingList/>]} />
          <Route path="/successPage" element={[<MainHeader />,<SuccessPage/>]} />
          <Route path="/checkbookings" element={[<MainHeader />,<Checkbookings/>]} />
          <Route path="/specialbookings" element={[<MainHeader />,<Specialbookings/>]} />
   


          <Route
            path="/displayUsers"
            element={[<MainHeader />, <DisplayUsers />]}
          />
          <Route
            path="/editUser/:id"
            element={[<MainHeader />, <EditUser />]}
          />

          {/* chandima-add complain*/}
          <Route
            path="/AddComplain"
            element={[<MainHeader />, <AddComplain />]}
          />


          <Route
            path="/AboutUs"
            element={[<MainHeader />, <AboutUs />]}
          />

           {/* chandima-add complain*/}
           <Route
            path="/AddComplain"
            element={[<MainHeader />, <AddComplain />]}
          />
          {/* chandima-add medicare page*/}
          <Route
            path="/MediCare"
            element={[<MainHeader />, <MediCare />]}
          />


          {/* kasun Payment */}
          <Route
            path="/CreditCardDetails"
            element={[<MainHeader />, <CreditCardDetails />]}
          />
          <Route
            path="/RefundRequests"
            element={[<MainHeader />, <RefundRequests />]}
          />
          {/* User management */}
          <Route path="/staff-login" element={<StaffLogin />} />
          {/* <Route path="/staff-login-userM" element={<UserManagerLogin />} /> */}
          {/* <Route path="/staff-userM" element={<UserManagerLogin />} /> */}
          {/* <Route path="/staff-home" element={[<Header />, <Home />]} /> */}
          {/* <Route path="/display-userM" element={[<DisplayUsersList />]} /> */}
          {/* <Route path="/edit-userM/:id" element={<EditUsers />} /> */}
          {/* <Route path="/edit-userM" element={<UserList />} /> */}
          <Route
            path="/staff-login-userM"
            element={
              <PrivateUserStaffRoute>
                <UserManagerLogin />
              </PrivateUserStaffRoute>
            }
          />
          <Route
            path="/staff-userM"
            element={
              <PrivateUserStaffRoute>
                <UserManagerLogin />
              </PrivateUserStaffRoute>
            }
          />
          <Route
            path="/staff-home"
            element={
              <PrivateUserStaffRoute>
                [<Header />, <Home />]
              </PrivateUserStaffRoute>
            }
          />
          <Route
            path="/display-userM"
            element={
              <PrivateUserStaffRoute>
                [<DisplayUsersList />]
              </PrivateUserStaffRoute>
            }
          />
          <Route
            path="/edit-userM/:id"
            element={
              <PrivateUserStaffRoute>
                <EditUsers />
              </PrivateUserStaffRoute>
            }
          />
          <Route
            path="/edit-userM"
            element={
              <PrivateUserStaffRoute>
                <UserList />
              </PrivateUserStaffRoute>
            }
          />
          <Route
            path="/generateUser-pdf"
            element={
              <PrivateUserStaffRoute>
                <UserReportGenerator />
              </PrivateUserStaffRoute>
            }
          />
          {/* chandima-flight management  */}
          <Route
            path="/add-userM"
            element={
              <PrivateUserStaffRoute>
                <AddMeal />
              </PrivateUserStaffRoute>
            }
          />
          <Route
            path="/displayMeal-userM"
            element={
              <PrivateUserStaffRoute>
                [<DisplayMealsList />]
              </PrivateUserStaffRoute>
            }
          />
          {/* <Route
            path="/editMeal-userM"
            element={
              <PrivateUserStaffRoute>
                 <ListMeal />
              </PrivateUserStaffRoute>
            }
          /> */}
          <Route
            path="/editMeal-userM/:id"
            element={
              <PrivateUserStaffRoute>
                <EditMealList />
              </PrivateUserStaffRoute>
            }
          />
          {/* flight management  */}
          <Route path="/staff-login-flightM" element={<FlightManagerLogin />} />
          {/* <Route
            path="/staff-flightM"
            element={
              <PrivateFlightStaffRoute>
                <PrivateFlightStaff />
              </PrivateFlightStaffRoute>
            }
          />   */}
          <Route
            path="/staff-flightM"
            element={
              <PrivateFlightStaffRoute>
                <FlightManagerLogin />
              </PrivateFlightStaffRoute>
            }
          />
          <Route
            path="/staff-flightM-Home"
            element={
              <PrivateFlightStaffRoute>
                [<FMHeader />, <FMHome />]
              </PrivateFlightStaffRoute>
            }
          />
          <Route
            path="/display-flightM"
            element={
              <PrivateFlightStaffRoute>
                [<DisplayFlights />]
              </PrivateFlightStaffRoute>
            }
          />
          <Route
            path="/add-flightM"
            element={
              <PrivateFlightStaffRoute>
                [<AddFlights />]
              </PrivateFlightStaffRoute>
            }
          />
          <Route
            path="/edit-flightM/:id"
            element={
              <PrivateFlightStaffRoute>
                <Edit />
              </PrivateFlightStaffRoute>
            }
          />
          <Route
            path="/edit-flightM"
            element={
              <PrivateFlightStaffRoute>
                <FlightList />
              </PrivateFlightStaffRoute>
            }
          />
          <Route
            path="/staff-header"
            element={
              <PrivateFlightStaffRoute>
                <FMHeader />
              </PrivateFlightStaffRoute>
            }
          />
          <Route
            path="/generateFlight-pdf"
            element={
              <PrivateFlightStaffRoute>
                <FlightReportGenerator />
              </PrivateFlightStaffRoute>
            }
          />
          <Route
            path="/complains-flightM"
            element={
              <PrivateFlightStaffRoute>
                [<DisplayComplains />]
              </PrivateFlightStaffRoute>
            }
          />
          <Route
            path="/editComplain-flightM"
            element={
              <PrivateUserStaffRoute>
                <ListComplain />
              </PrivateUserStaffRoute>
            }
          />
          <Route
            path="/editComplain-flightM/:id"
            element={
              <PrivateFlightStaffRoute>
                <EditComplain />
              </PrivateFlightStaffRoute>
            }
          />
          <Route
            path="/complains-flightM"
            element={
              <PrivateFlightStaffRoute>
                <Reply />
              </PrivateFlightStaffRoute>
            }
          />
          {/* Payment Management */}
          <Route
            path="/staff-login-paymentM"
            element={<PaymentManagerLogin />}
          />
          <Route
            path="/staff-paymentM"
            element={
              <PrivatePaymentStaffRoute>
                <PaymentManagerLogin />
              </PrivatePaymentStaffRoute>
            }
          />
          <Route
            path="/generateRefund-pdf"
            element={
              <PrivatePaymentStaffRoute>
                <PaymentReportGenerator />
              </PrivatePaymentStaffRoute>
            }
          />
          <Route
            path="/staff-paymentM-Home"
            element={
              <PrivatePaymentStaffRoute>
                [<PaymentHeader />, <PaymentHome />]
              </PrivatePaymentStaffRoute>
            }
          />
          <Route
            path="/Display"
            element={
              <PrivatePaymentStaffRoute>
                <Display />
              </PrivatePaymentStaffRoute>
            }
          />
          {/* <Route path="/card" element={<CreditCard />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
