import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <h2>SKYLINE AIRWAYS</h2>
          {/* <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="50"
              alt="MDB Logo"
              loading="lazy"
            />
          </a> */}

          { <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
              <button className="btn btn-success"><a href="/" style={{textDecoration:'none',color:'white'}}>HOME</a></button>
              
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              <button className="btn btn-success"><a href="/card" style={{textDecoration:'none',color:'white'}}>Add Card</a></button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              <button className="btn btn-success"><a href="/CreditCardDetails" style={{textDecoration:'none',color:'white'}}>View added cards</a></button>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
              <button className="btn btn-success"><a href="/CreditCardDetails" style={{textDecoration:'none',color:'white'}}>help</a></button>
              </a>
            </li>
          </ul> }
        </div>

        <div class="d-flex align-items-center">
          <div class="dropdown">
            <a
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="50"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a class="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/login">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
