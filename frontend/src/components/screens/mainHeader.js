import React from "react";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={{ marginTop: "0px" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: "blue" }}>
          <b>SKYLINE AIRWAYS</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/HomeSc"
              >
                <i class="fa fa-fw fa-home"></i>Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/mainHome">
                <i class="fa fa-list-alt" aria-hidden="true"></i>Bookings
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/SelectCredit">
                <i class="fa fa-list-alt" aria-hidden="true"></i>Booking Payment
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="#">
                <i class="fa fa-plane" aria-hidden="true"></i>Fly With Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/CreditCard">
                <i class="fa fa-plane" aria-hidden="true"></i>Add New Card
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/RefundRequests">
                <i class="fa fa-plane" aria-hidden="true"></i>Refund Requests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/TravelInsuvarance">
                <i class="fa fa-plane" aria-hidden="true"></i>Travle Insuarance
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/AboutUs">
                <i class="fa fa-users" aria-hidden="true"></i>About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/AddComplain">
                <i class="fa fa-handshake-o" aria-hidden="true"></i>Help
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/MediCare">
                <i class="fa fa-medkit" aria-hidden="true"></i>Health Care
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "60%" }}
            />
            <button className="btn btn-outline-success" type="submit" >
              <i class="fa fa-fw fa-search"></i>Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;

// import React from "react";

// const MainHeader = () => {
//   return (
//     <nav class="MainHeader navbar-expand-lg navbar-light bg-light">
//       <div class="container-fluid">
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-mdb-toggle="collapse"
//           data-mdb-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <i class="fas fa-bars"></i>
//         </button>

//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <h2>HomeAirlineSeatingReservationSystem</h2>
//           {/* <a class="navbar-brand mt-2 mt-lg-0" href="#">
//             <img
//               src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
//               height="50"
//               alt="MDB Logo"
//               loading="lazy"
//             />
//           </a> */}

//           { <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//               <button className="btn btn-success"><a href="/Pharmacy" style={{textDecoration:'none',color:'white'}}>HOME</a></button>

//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//               <button className="btn btn-success"><a href="/card" style={{textDecoration:'none',color:'white'}}>Add Card</a></button>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//               <button className="btn btn-success"><a href="/CreditCardDetails" style={{textDecoration:'none',color:'white'}}>View added cards</a></button>
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//               <button className="btn btn-success"><a href="/CreditCardDetails" style={{textDecoration:'none',color:'white'}}>help</a></button>
//               </a>
//             </li>
//           </ul> }
//         </div>

//         <div class="d-flex align-items-center">
//           <div class="dropdown">
//             <a
//               class="dropdown-toggle d-flex align-items-center hidden-arrow"
//               href="#"
//               id="navbarDropdownMenuAvatar"
//               role="button"
//               data-mdb-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <img
//                 src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
//                 class="rounded-circle"
//                 height="50"
//                 alt="Black and White Portrait of a Man"
//                 loading="lazy"
//               />
//             </a>
//             <ul
//               class="dropdown-menu dropdown-menu-end"
//               aria-labelledby="navbarDropdownMenuAvatar"
//             >
//               <li>
//                 <a class="dropdown-item" href="#">
//                   My profile
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Settings
//                 </a>
//               </li>
//               <li>
//                 <a class="dropdown-item" href="#">
//                   Logout
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default MainHeader;
