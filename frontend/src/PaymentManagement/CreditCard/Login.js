import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import "../CreditCard/Login.css";

export default class Login extends Component {
  render() {
    return (
      <div className=" bg0">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="loginContainer">
          <div className="signup-form  bg-blue " style={{ opacity: "0.8" }}>
            <form>
              <h2 className="text-center" style={{ color: "white" }}>
                Log in <i class="fa fa-grav" aria-hidden="true"></i>
              </h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="📧 Email"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="🔐 Password"
                  id="myInput"
                />
                <label className="float-left form-check-label">
                  <input type="checkbox" /> Show Password
                </label>
              </div>
              <br />
              <div className="form-group">
                <Link
                  to="/card"
                  style={{ textDecoration: "none", float: "center" }}
                >
                  <button type="submit" className="btn btn-primary btn-block">
                    <i class="fa fa-leaf" aria-hidden="true"></i> Log in
                  </button>
                </Link>
              </div>
              <br />
              <div className="form-group">
                <label className="float-left form-check-label">
                  <input type="checkbox" /> Remember me{" "}
                  <i class="fa fa-rss" aria-hidden="true"></i>
                </label>
                <br />
              </div>
              <Link
                to="/forgotpassword"
                className="float-left"
                style={{ float: "left" }}
              >
                <b style={{ float: "left" }}> Forgot Password 🥺?</b>
              </Link>
              <br></br> <br></br>
              <p className="text-center">
                <Link
                  to="/register"
                  style={{ textDecoration: "none", float: "left" }}
                >
                  <h5>
                    <i class="fa fa-cogs" aria-hidden="true"></i> Create an
                    Account
                  </h5>
                </Link>
              </p>
            </form>

            <br />
            <br />
            <br />
            <Link to="/">
              <button
                type="Submit"
                className="btn btn primary btn-success"
                style={{ float: "center" }}
              >
                <i class="fa fa-replay" aria-hidden="true"></i>Back
              </button>
            </Link>
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
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
