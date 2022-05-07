import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { image } from "html2canvas/dist/types/css/types/image";

const AddMealShcedule = () => {
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const [mealid, setMealId] = useState("");
  const [mealname, setMealName] = useState("");
  const [mealtype, setMealType] = useState("");
  const [mealportion, setMealPortion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional

    axios
      .post("http://localhost:8085/meals/add", {
        mealid,
        mealname,
        mealtype,
        mealportion,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        alert("Details are uploaded successfully");

        setMealId("");
        setMealName("");
        setMealType("");
        setMealPortion("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setIsError(true);
        alert(err);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "red" }}>
            <b>Meal Scheduling</b>
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
                <Link className="nav-link active" to="/add-userM">
                  <i class="fa fa-cutlery" aria-hidden="true"></i> Add Meal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/displayMeal-userM">
                  <i class="fa fa-coffee" aria-hidden="true"></i> Display Meals
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
      <br></br>
      <div
        className="container"
        style={{ width: "50%", backgroundColor: "#b3ffff"}}
      >
        <br />
        <br />
        <h1>📝Add Meal Schedule✍🏻</h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="cmb-3">
            <label
              for="id"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Meal ID
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Meal ID"
              name="id"
              value={mealid}
              onChange={(e) => setMealId(e.target.value)}
              required
              pattern="[A-Z][0-9]{4}"
            />
            <br></br>
            <label
              for="mealname"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Meal Name
            </label>
            <input
              type="text"
              placeholder="Enter Meal Name"
              className="form-control"
              name="mealname"
              value={mealname}
              onChange={(e) => setMealName(e.target.value)}
              required
            />
            <br></br>

            <label
              for="mealtype"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Meal Type
            </label>
            <select
              value={mealtype}
              onChange={(e) => setMealType(e.target.value)}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
            <br></br>
            <br></br>

            <label
              for="mealportion"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Meal Portion
            </label>

            <select
              value={mealportion}
              onChange={(e) => setMealPortion(e.target.value)}
            >
              <option value="Large">Large</option>
              <option value="Large">Large</option>
              <option value="Normal">Normal</option>
              <option value="Family Pack">Family Pack</option>
              <option value="Kids">Kids</option>
            </select>
            <br></br>

            {/* upload photo */}
            {/* <div className="jumbotron">
                <h1 className="display-4">Upload a Photo of Chef</h1>
                <p className="lead">
                Please choose a valid relavant photo 👩‍🎓
                </p>
                <hr className="my-4" />
            </div>
            <i class="fa fa-folder-open" aria-hidden="true"></i>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto} required
            />         */}
          </div>

          <br />
          <div>
            {isError && (
              <small className="mt-3 d-inline-block text-danger">
                Something went wrong. Please try again later.
              </small>
            )}
            {/*decision*/}
            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={loading}
            >
              <i class="fa fa-upload" aria-hidden="true"></i>{" "}
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
        <br />
         <a href="/add-userM">
          <button type="submit" className="btn btn-success">
            <i class="fa fa-refresh" aria-hidden="true"></i> Reset
          </button>
        </a> 
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddMealShcedule;
