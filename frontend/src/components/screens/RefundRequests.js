import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RefundRequests = () => {
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const [name, setName] = useState("");
  const [passport, setPassport] = useState("");
  const [reference, setReference] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional

    axios
      .post("http://localhost:8085/RefundRequests/add", {
        passport,
        name,
        reference,
        description,
        phone,
        email,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        alert("Details is uploaded successfully");

        setName("");
        setPassport("");
        setReference("");
        setEmail("");
        setPhone("");
        setDescription("");
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
        style={{ width: "50%", backgroundColor: "#6BFAB9" }}
      >
        <br />
        <br />
        <h1>📝Refund Requests✍🏻</h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="cmb-3">
            <label
              for="name"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br></br>
            <label
              for="passport"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Passport
            </label>
            <input
              type="text"
              placeholder="Enter Passport Number"
              className="form-control"
              name="passport"
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
              required
            />
            <br></br>
            <label
              for="reference"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Reference
            </label>
            <input
              type="type"
              placeholder="Enter the Reference"
              className="form-control"
              name="reference"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              required
            />
            <br></br>
            <label
              for="description"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Description
            </label>
            <input
              type="text-ariea"
              placeholder="Enter the description "
              className="form-control"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <br></br>
            <label
              for="phone"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter your Phone Number"
              className="form-control"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              type="text-ariea"
              placeholder="Enter the Email Address"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

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
        <a href="/RefundRequests">
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

export default RefundRequests;
