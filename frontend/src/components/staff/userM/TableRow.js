import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import axios from "axios";
import Table from "react-bootstrap/esm/Table";

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    axios
      .delete(
        "http://localhost:8085/api/auth/deleteUserById/" + this.props.obj._id
      )
      .then((res) => {
        alert("User successfully deleted!");
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.username}</td>
        <td>{this.props.obj.email}</td>

        {/* <td><img src ={"images/" + this.props.obj.photo} style={{width:"100px" , height:"100px"}} 
                className = "border border-danger rounded-circle"
                /></td> */}
        <td style={{ width: "250px" }}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Link
                className="edit-link"
                to={`/edit-userM/${this.props.obj._id}`}
              >
                <button size="sm" variant="success" className="btn btn-warning">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
                </button>
              </Link>
            </div> &nbsp;&nbsp;

            <div>
              <button
                size="sm"
                onClick={this.deleteStudent}
                variant="danger"
                className="btn btn-danger"
              >
                <i class="fa fa-window-close" aria-hidden="true"></i> Delete
              </button>
            </div>&nbsp;&nbsp;
            <div>
              <a href="/edit-userM">
                <button type="submit" size="sm" className="btn btn-primary">
                  <i class="fa fa-refresh" aria-hidden="true"></i> Refresh
                </button>
              </a>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}
