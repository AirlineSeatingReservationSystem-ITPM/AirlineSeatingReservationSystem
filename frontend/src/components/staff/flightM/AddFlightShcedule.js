import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddFlightShcedule = () => {
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  // const [newFlightShcedule, setNewFlightShcedule] = useState(
  //     {
  //     id:'',
  //     flight:'',
  //     date:'',
  //     destination:'',
  //     sheduleddeparturetime:'',
  //     assignplanetype:'',
  //     capacity:'',
  //     seatsreserved:'',
  //     availableclasses:''
  //     }
  // );

  const [id, setId] = useState("");
  const [flight, setFlight] = useState("");
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [sheduleddeparturetime, setSheduleddeparturetime] = useState("");
  const [assignplanetype, setAssignplanetype] = useState("");
  const [capacity, setCapacity] = useState("");
  const [seatsreserved, setSeatsreserved] = useState("");
  const [availableclasses, setAvailableclasses] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional

    axios
      .post("http://localhost:8085/flights/add", {
        id,
        flight,
        date,
        destination,
        sheduleddeparturetime,
        assignplanetype,
        capacity,
        seatsreserved,
        availableclasses,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        alert("Deatails is uploaded successfully");
        // setNewFlightShcedule({id :'' , flight : '' , date : '' , destination : '' , sheduleddeparturetime : '',assignplanetype : '',capacity : '',seatsreserved:'' ,availableclasses : ''})

        setId("");
        setFlight("");
        setDate("");
        setDestination("");
        setSheduleddeparturetime("");
        setAssignplanetype("");
        setCapacity("");
        setSeatsreserved("");
        setAvailableclasses("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setIsError(true);
        alert(err);
      });
  };

  // const handlePhoto = (e) => {
  //   setNewFlightShcedule({...newFlightShcedule, [ e.target.flight]: e.target.value});
  // }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "red" }}>
            <b>Flight Scheduling Management System</b>
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
                <Link className="nav-link active" to="/add-flightM">
                  <i class="fa fa-plus-square" aria-hidden="true"></i> Add
                  shcedule
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/display-flightM">
                  <i class="fa fa-plane" aria-hidden="true"></i> Display
                  Shcedules
                </Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link " to = "/complains-flightM"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Display Complains</Link>
            </li>
              {/* <li className="nav-item">
                        <Link className="nav-link active" to = "#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit schedule</Link>
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
        style={{ width: "50%", backgroundColor: "#b3ffff" }}
      >
        <br />
        <br />
        <h1>📝Add shedule✍🏻</h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="cmb-3">
            <label
              for="id"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              ID
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the ID"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              pattern="[0-9]{2,3}"
            />
            <br></br>
            <label
              for="flight"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Flight
            </label>
            <input
              type="text"
              placeholder="Enter the flight specification code"
              className="form-control"
              name="flight"
              value={flight}
              onChange={(e) => setFlight(e.target.value)}
              required
            />
            <br></br>
            <label
              for="date"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Date
            </label>
            <input
              type="date"
              placeholder="Enter the date"
              className="form-control"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <br></br>
            <label
              for="destination"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Destination
            </label>
            <input
              type="text"
              placeholder="Enter the Destination Airport"
              className="form-control"
              name="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
            <br></br>
            <label
              for="sheduleddeparturetime"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              sheduled departure time
            </label>
            <input
              type="time"
              placeholder="Sheduled Departure Time"
              className="form-control"
              name="sheduleddeparturetime"
              value={sheduleddeparturetime}
              onChange={(e) => setSheduleddeparturetime(e.target.value)}
              required
            />
            <br></br>
            <label
              for="assignplanetype"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Assign plane type
            </label>
            {/* <input 
                    type="text"
                    placeholder="Enter ex:Boieng-798"
                    className="form-control"
                    name="assignplanetype"
                    value={assignplanetype}
                    onChange={(e)=> setAssignplanetype(e.target.value)} required
                /><br></br> */}

            <select
              value={assignplanetype}
              onChange={(e) => setAssignplanetype(e.target.value)}
            >
              <option value="Airbus A350">Airbus A350</option>
              <option value="Boeing 737 NG">Boeing 737 NG</option>
              <option value="Boeing 737 MAX">Boeing 737 MAX</option>
              <option value="Boeing 747-8">Boeing 747-8</option>
              <option value="Boeing 767-300F">Boeing 767-300F</option>
              <option value="Airbus A320 family">Airbus A320 family</option>
              <option value="Airbus A330/A330neo	">Airbus A330/A330neo </option>
              <option value="Boeing 787">Boeing 787</option>
              <option value="Airbus A350">Airbus A350</option>
            </select>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label
              for="capacity"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Capacity
            </label>
            <input
              type="text"
              placeholder="Enter the Total Number Of Seats"
              className="form-control"
              name="capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              required
            />
            <br></br>

            <label
              for="seatsreserved"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Seats Reserved
            </label>
            <input
              type="text"
              placeholder="Enter No.of Booked Seats"
              className="form-control"
              name="seatsreserved"
              value={seatsreserved}
              onChange={(e) => setSeatsreserved(e.target.value)}
              required
            />
            <br></br>

            <label
              for="availableclasses"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Available Classes
            </label>
            {/* <input 
                type="text"
                placeholder="EX: if Economy class Enter ,E"
                className="form-control"
                name="availableclasses"
                value={availableclasses}
                onChange={(e)=> setAvailableclasses(e.target.value)} required


                
            /> */}
            <select
              value={availableclasses}
              onChange={(e) => setAvailableclasses(e.target.value)}
            >
              <option value="First Class">First Class</option>
              <option value="Business Class">Business Class</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Economy Class">Economy Class</option>
              <option value="Basic Economy">Basic Economy</option>
              <option value="First Class">First Class</option>
            </select>
            <br></br>
            <br></br>
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
        <a href="/add">
          <button type="submit" className="btn btn-success">
            <i class="fa fa-refresh" aria-hidden="true"></i> Refresh
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

export default AddFlightShcedule;
