import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddComplain = () => {
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional

    axios
      .post("http://localhost:8085/complain/add", {
        id,
        name,
        type,
        description,
        email,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        alert("Deatails is uploaded successfully");

        setId("");
        setName("");
        setType("");
        setDescription("");
        setEmail("");
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
      <div
        className="container"
        style={{ width: "50%", backgroundColor: "#b3ffff" }}
      >
        <br />
        <br />
        <h1>📝Add Complain✍🏻</h1>

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
            />
            <br></br>
            <label
              for="name"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Name with initials"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            //   required pattern = "[0-9]{10}"
            />
            <br></br>
            <label for="type"
              style={{ float: "left", color: "black" }}
              className="form-label">Type
              <select value={type} onChange={(e) => setType(e.target.value)}>            
            <option value="About Seat Reservation">About Seat Reservation</option>
            <option value="About meals">About meals</option>
            <option value="About Ticket Reservation">About Ticket Reservation</option>
            <option value="About Medical">About Medical</option>
            <option value="About Seat Reservation">About Seat Reservation</option>
          </select>
              
              
              
              
              
              </label>
            
            
            {/* <select value={type} onChange={(e) => setType(e.target.value)}>            
            <option value="About Seat Reservation">About Seat Reservation</option>
            <option value="About meals">About meals</option>
            <option value="About Ticket Reservation">About Ticket Reservation</option>
            <option value="About Medical">About Medical</option>
            <option value="About Seat Reservation">About Seat Reservation</option>
          </select> */}
               
            <br></br><br></br><br></br>
            <label
              for="description"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Description
            </label>
            <textarea 
              rows = "8" cols = "50"
              placeholder="Type here your message"
              className="form-control"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <br></br>
            <label
              for="email"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
            />
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
        <a href="/">
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

export default AddComplain;
