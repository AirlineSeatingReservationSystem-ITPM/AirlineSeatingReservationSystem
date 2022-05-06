import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "../../styles.css";
import { Link } from "react-router-dom";


export default function DisplayUserProfile() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8085/api/auth/displayUsers")
        .then((res) => setStudents(res.data));
    })();
  }, []);

  const filteredData = students.filter(
    (el) => el.username === localStorage.getItem("name")
  );

  console.log(filteredData);
  console.log(students);
  //console.log(localStorage.getItem("name"))

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top"></nav>
      <div className="App">
        <h1>My Profile</h1>

        {/* Fetch data from API */}

        {/* Display data from API */}
        <div className="students">
          {filteredData.map((user, index) => {
            return (
              <div
                className="student"
                key={index}
                style={{ width: "40%", marginLeft: "500px" }}
              >
                <h2>Login Info</h2>
                {/*   <h3 className="badge bg-success">user {index + 1}</h3>*/}
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {" "}
                  <div style={{ marginRight: "10px" }}>
                    <button
                      style={{
                        background: "#171717",
                        color: "white",
                        padding: "50px",
                        borderRadius: "45%",
                        fontSize: "40px",
                      }}
                    >
                      {user.username.substring(0, 1).toUpperCase()}
                    </button>
                  </div>
                  <div className="details">
                    <div>
                      <p>
                        👨<b style={{ color: "red" }}>username : </b>
                        {user.username}
                      </p>
                      <p>
                        🏃<b style={{ color: "green" }}>email : </b>
                        {user.email}
                      </p>
                    </div>

                    <Link to={`/editUser/${user._id}`}>
                      <button className="btn btn-secondary">
                        Edit Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <br />
        <br />
        <br /> */}
        {/* <div className="students">
          {filteredData.map((user, index) => {
            return (
              <div
                className="student"
                key={index}
                style={{ width: "40%", marginLeft: "500px" }}
              >
                <h2>Passport Info</h2>
              
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {" "}
                  <div style={{ marginRight: "10px" }}>
                    <button
                      style={{
                        background: "#171717",
                        color: "white",
                        padding: "50px",
                        borderRadius: "45%",
                        fontSize: "40px",
                      }}
                    >
                      {user.username.substring(0, 1).toUpperCase()}
                    </button>
                  </div>
                  <div className="details">
                    <div>
                      <p>
                        👨<b style={{ color: "red" }}>passport no : </b>
                        {user.passportno}
                      </p>
                      <p>
                        🏃<b style={{ color: "green" }}>issued date : </b>
                        {user.date}
                      </p>
                    </div>

                    <Link to={`/editUser/${user._id}`}>
                      <button className="btn btn-secondary">
                        Edit Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
        {/* <br />
        <br />
        <br />
        <br />
        <br /> */}
        <Link to="/">
          <button
            type="submit"
            className="btn btn-primary btn-success"
            style={{ float: "none" }}
          >
            <i class="fa fa-reply" aria-hidden="true"></i>Back
          </button>
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}
