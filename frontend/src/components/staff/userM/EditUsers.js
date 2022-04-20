import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  /* const [data, setData] = useState([])*/

  const ID = useParams();

  /*
  const onChangeDate = (e) => {
    setDate(e.target.value)
  }*/

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:8085/api/auth/getUserById/${ID?.id}`)
        .then((res) => {
          setUserName(res.data.username);
          setEmail(res.data.email);
        })
        .catch(() => null);
    })();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(`http://localhost:8085/api/auth/editUser/${ID?.id}`, {
        username,
        email,
      })
      .then((res) => {
        alert("User Details successfully updated");
      })
      .catch((error) => {
        alert(error);
      });
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
                  <i class="fa fa-users" aria-hidden="true"></i> Display
                  Users
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to="#">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                  schedule
                </Link>
              </li> */}
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


      <div className="form-wrapper container" style={{ width: "50%",backgroundColor:"#b3d9ff" }}>
        <br />
        <br />
        <h1>Need to Update ? 🤔</h1>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="Username">
            <Form.Label style={{ float: "left", color: "black" }}>
              Username
            </Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="✍🏻 Edit username"
              required
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label style={{ float: "left", color: "black" }}>
              Email
            </Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="✍🏻 Edit email"
              required
            />
          </Form.Group>

          <br />
          <Button   variant="info" size="lg" block="block" type="submit">
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update
            User Details
          </Button>
          <br></br><br></br>
          
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            
            <Link to="/edit-userM">
             
              <button
                type="submit"
                className="btn btn-primary btn-primary"
                style={{ float: "left" }}
              >
                <i class="fa fa-reply" aria-hidden="true"></i>Back
              </button>
              
            </Link>

          </div>
          
        </Form>
        <br />
        <br />
        {/* <br />
        <br /> */}
      </div>
        <br></br>
    </div>
  );
};

export default Edit;
