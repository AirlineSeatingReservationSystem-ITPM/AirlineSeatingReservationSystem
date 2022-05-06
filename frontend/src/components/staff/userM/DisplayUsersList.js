import React, { useState, useEffect } from "react";
import "../../../styles.css";
import { Link } from "react-router-dom";
import axios from "axios";

const DisplayUsersList = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8085/api/auth/displayUsers")
        .then((res) => setData(res.data))
        .catch(() => null);
    })();
  }, []);

  const filteredData = data?.filter(
    (el) => el?.username?.toLowerCase().indexOf(query.toLowerCase()) >= 0
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "red" }}>
            <b>User Management System</b>
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
                  className="nav-link "
                  aria-current="page"
                  to="/staff-home"
                >
                  <i class="fa fa-fw fa-home"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/display-userM">
                  <i class="fa fa-user-circle" aria-hidden="true"></i> Display
                  Users
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
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <button className="btn btn-outline-success" type="submit">
                <i class="fa fa-fw fa-search"></i>Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="App">
        <h1>All Users</h1>

        {/* Fetch data from API
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Flights
        </button>
        <br />
      </div> */}

        {/* Display data from API */}
        <div>
          {filteredData.length === 0 ? (
            <div className="alert alert-danger" style={{ marginLeft: "100px" }}>
              <center>Data is not found</center> <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          ) : (
            filteredData.map((i) => (
              <div className="student0" style={{marginLeft:"100px"}}>
                <div >
                  <div className="details" >
                    <div>
                      <span>
                      🧑🏻<b style={{ color: "red" }}>Username : {i.username}</b>
                      </span>
                      <br></br>

                      <span>
                      📧<b style={{ color: "green" }}>Email : {i.email}</b>
                      </span>
                    </div>

                    <a href="/edit-userM">
                      <button className="btn btn-primary">Edit</button>
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default DisplayUsersList;
