import React, { useState, useEffect } from "react";
import "../../../styles.css";
import { Link } from "react-router-dom";
import axios from "axios";

const DisplayMealsList = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8085/meals/")
        .then((res) => setData(res.data))
        .catch(() => null);
    })();
  }, []);

  const DeleteMeal = async (id) => {
    if (window.confirm("Do You want to delete? ")) {
      await axios.delete(`http://localhost:8085/meals/delete/${id}`);
      window.location.reload();
    }
  };

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

              <li className="nav-item">
                <Link className="nav-link" to="/displayMeal-userM">
                  <i class="fa fa-user-circle" aria-hidden="true"></i> Display
                  Meals
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
        <h1>All Meals</h1>

        {/* Fetch data from API
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Flights
        </button>
        <br />
      </div> */}

        {/* Display data from API */}
        <div>
          {data.map((i) => {
            return (
              <div className="student0" style={{ marginLeft: "100px" }}>
                <div>
                  <div className="details">
                    <div>
                      <span>
                        🧑🏻<b style={{ color: "red" }}>Meal ID : {i.mealid}</b>
                      </span>
                      <br></br>

                      <span>
                        📧
                        <b style={{ color: "green" }}>
                          Meal Name : {i.mealname}
                        </b>
                      </span>
                      <br></br>
                      <span>
                        📧
                        <b style={{ color: "green" }}>
                          Meal Type : {i.mealtype}
                        </b>
                      </span>
                      <br></br>
                      <span>
                        📧
                        <b style={{ color: "green" }}>
                          Meal Portion : {i.mealportion}
                        </b>
                      </span>
                      <br></br>
                    </div>
                    <Link to={`/editMeal-userM/${i._id}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>{" "}
                    <button className="btn btn-danger" onClick= {() => DeleteMeal(i._id)}>Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
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

export default DisplayMealsList;
