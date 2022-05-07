import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [mealid, setMealId] = useState("");
  const [mealname, setMealName] = useState("");
  const [mealtype, setMealType] = useState("");
  const [mealportion, setMealPortion] = useState("");

  const [data, setData] = useState([]);

  const ID = useParams();

  // const onChangeDate = (e) => {
  //   setData(e.target.value)
  // }

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:8085/meals/get/${ID.id}`)
        .then((res) => {
          setMealId(res.data.mealid);
          setMealName(res.data.mealname);
          setMealType(res.data.mealtype);
          setMealPortion(res.data.mealportion);

          console.log(res.data.mealid);
        })
        .catch(() => null);
    })();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(`http://localhost:8085/meals/update/${ID.id}`, {
        mealid,
        mealname,
        mealtype,
        mealportion,
      })
      .then((res) => {
        alert("Meal successfully updated");
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
                  <i class="fa fa-user-circle" aria-hidden="true"></i> Display
                  Users
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/add-userM">
                  <i class="fa fa-cutlery" aria-hidden="true"></i> Add Meals
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/displayMeal-userM">
                  <i class="fa fa-coffee" aria-hidden="true"></i> Display Meals
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="#">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                  Meals List
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
              <button className="btn btn-outline-success" type="submit">
                <i class="fa fa-fw fa-search"></i>Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div
        className="form-wrapper container"
        style={{ width: "50%", backgroundColor: "#b3d9ff" }}
      >
        <br />
        <br />
        <h1>Need to Update ? 🤔</h1>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="mealid">
            <Form.Label style={{ float: "left", color: "black" }}>
              Meal ID
            </Form.Label>
            <Form.Control
              type="text"
              value={mealid}
              onChange={(e) => setMealId(e.target.value)}
              placeholder="✍🏻 Edit meal ID"
              required
            />
          </Form.Group>

          <Form.Group controlId="mealname">
            <Form.Label style={{ float: "left", color: "black" }}>
              Meal Name
            </Form.Label>
            <Form.Control
              type="text"
              value={mealname}
              onChange={(e) => setMealName(e.target.value)}
              placeholder="✍🏻 Edit meal name"
              required
            />
          </Form.Group>

          <Form.Group controlId="mealtype">
            <Form.Label style={{ float: "left", color: "black" }}>
              Meal Type
            </Form.Label>
            <Form.Control
              type="text"
              value={mealtype}
              onChange={(e) => setMealType(e.target.value)}
              placeholder="✍🏻 Edit meal type"
              required
            />
          </Form.Group>

          <Form.Group controlId="mealportion">
            <Form.Label style={{ float: "left", color: "black" }}>
              Meal Portion
            </Form.Label>
            <Form.Control
              type="text"
              value={mealportion}
              onChange={(e) => setMealPortion(e.target.value)}
              placeholder="✍🏻 Edit meal portion"
              required
            />
          </Form.Group>

          <br />
          <Button variant="info" size="lg" block="block" type="submit">
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update
            Meal Details
          </Button>
          <br></br>
          <br></br>

          {/* <a href="/add">
          <button type="submit" className="btn btn-success">
            <i class="fa fa-refresh" aria-hidden="true"></i> Refresh
          </button>
        </a> */}

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link to="/displayMeal-userM">
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
