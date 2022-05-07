import React, { useState, useEffect } from "react";
import "../../../styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Reply from "./Reply";

const DisplayComplains = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8085/complain/")
        .then((res) => setData(res.data))
         
        .catch(() => null);
    })();
  }, []);

  //const filteredData = data?.filter(el => el?.destination?.toLowerCase().indexOf(query.toLowerCase()) >= 0);

  return (
    <div style={{ color: "blue" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "red" }}>
            <b>Flight Sheduling Management System</b>
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
                  to="/staff-flightM-home"
                >
                  <i class="fa fa-fw fa-home"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-flightM">
                  <i class="fa fa-plus-square" aria-hidden="true"></i> Add
                  Shedule
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  " to="/display-flightM">
                  <i class="fa fa-plane" aria-hidden="true"></i> Display Shedule
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/complains-flightM">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>{" "}
                  Display Complains
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to = "/complaints-flightM"><i class="fa fa-comments" aria-hidden="true"></i> Help</Link>
              </li> */}
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
        <h1>All Complains</h1>

        {/* Fetch data from API
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Flights
        </button>
        <br />
      </div> */}

        {/* Display data from API */}
        <div className="students" style={{ width: "100%", marginLeft: "50px" }}>
          {data.map((i) => {
            return (
              <p>
                <div className="student" style={{ width: "95%" }}>
                  <div className="details">
                    <div>
                      <div style={{ float: "right" }}>
                        {/* <img src ={"images/" + i.photo} style={{width:"200px" , height:"200px"}}
                         className = "border border-danger rounded-circle"
                         /> */}
                      </div>
                      <p>
                        ✔️<b style={{ color: "red" }}>ID : </b>
                        {i.id}
                      </p>
                      <p>
                        ✈️<b style={{ color: "green" }}>Name: </b>
                        {i.name}
                      </p>
                      <p>
                        📅<b style={{ color: "blue" }}>Type: </b>
                        {i.type}
                      </p>
                      <p>
                        🏳️‍🌈<b style={{ color: "purple" }}>Description: </b>
                        {i.description}
                      </p>
                      <p>
                        🕐<b style={{ color: "red" }}>Email: </b>
                        {i.email}
                      </p>
                    </div>

                    <a href="/editComplain-flightM">
                      <button className="btn btn-secondary">Edit</button>
                    </a>
                  </div>
                </div>
              </p>
            );
          })}
        </div>
        <Reply/>
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

export default DisplayComplains;
