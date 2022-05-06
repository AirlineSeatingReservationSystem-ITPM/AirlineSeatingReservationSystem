import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
import "./RefundRequests.css"


export default function RefundRequests(){
    return(
        <div className="RefundRequests">
          

          <div
        className="container"
        style={{ width: "50%", backgroundColor: "#F0D6C0" }}
      >
        <br />
        <br />
        <h1>📝RefundRequest✍🏻</h1>

        <form >
          <div className="cmb-3">
            <label
              for="id"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the Name"
              name="id"
              
              
              required
            />
            <br></br>
            <label
              for="name"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Passport Number
            </label>
            <input
              type="text"
              placeholder="Enter PassportNumber"
              className="form-control"
              name="name"
             
             
              required
            />
            <br></br>
            <label
              for="type"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Reference number
            </label>
            <input
              type="type"
              placeholder="Enter Referance Number"
              className="form-control"
              name="type"
              
             
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
              
              
              required
            />
            <br></br>
            <label
              for="Phone Number"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter your Phone"
              className="form-control"
              name="email"
              
              
              required
            />
             <br></br> 
            <label
              for="email"
              style={{ float: "left", color: "black" }}
              className="form-label"
            >
              Description
            </label>


            <input
              type="text"
              placeholder="Enter your email address"
              className="form-control"
              name="email"
              
              
              required
            />
          </div>

          <br />
          <div>
            
            {/*decision*/}
            <button
              type="submit"
              className="btn btn-primary mt-3"
              
            >
              <i class="fa fa-upload" aria-hidden="true"></i>{" "}
              
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





            <br/><br/><br/><br/>

        </div>
    )
}