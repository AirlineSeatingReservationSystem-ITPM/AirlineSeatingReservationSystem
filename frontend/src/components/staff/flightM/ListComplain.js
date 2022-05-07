import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableRow from "./ComTableRow";
import { Link } from "react-router-dom";

export default class ComplainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8085/complain")
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <TableRow obj={res} key={i} />;
    });
  }

  render() {
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                  <Link className="nav-link" to="/add-flightM">
                    <i class="fa fa-plus-square" aria-hidden="true"></i> Add
                    Shcedule
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/display-flightM">
                    <i class="fa fa-plane" aria-hidden="true"></i>Display
                    Shcedule
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/complains-flightM">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>{" "}
                    Display Complains
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
        {/* <Link to = "/generateflight-pdf">
        <div>
              <button className="info__button" type="primary" style={{float:"right"}}><i class="fa fa-cogs" aria-hidden="true"></i> Generate Report</button> 
          </div>
        </Link> */}
        <div className="bg4"></div>
        <br />
        <h1 style={{ fontcolor: "red" }}>🚩Complain List🚩</h1>
        <div className="table-wrapper container">
          <Table
            striped
            bordered
            hoverstyle={{
              background: "#171717",
              padding: "10px 10px 10px 10px",
              opacity: "0.9",
            }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
