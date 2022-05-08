import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class CreditCardDetails2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Payment: [],
    };
  }

  componentDidMount() {
    this.retrievePayment();
  }

  retrievePayment() {
    axios.get("http://localhost:8085/Payment").then((res) => {
      if (res.data.success) {
        this.setState({
          Payment: res.data.existingPayment,
        });
        console.log(this.state.Payment);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`/Payment/delete/${id}`).then((res) => {
      alert("Card removed successfully");
      this.retrievePayment();
    });
  };

  // handleSearchArea = (e) =>{

  //   const searchkey= e.currentTarget.value;

  //   axios.get("/").then(res =>{
  //     if(res.data.success){

  //       this.filterData(res.data.existingPayment,searchkey)

  //     }
  //   })

  // }

  render() {
    return (
      <div className="background" style={{ backgroundColor: "#dce7f7" }}>
        <div className="container">
          <p>
            <h2>✤✤View Added Cards✤✤</h2>
          </p>
          <table class="table table-hover">
            <thead class="table table-bordered table-dark">
              <tr>
                <th scope="col">
                  <h3>No</h3>
                </th>
                <th scope="col">
                  <h3>Card Type</h3>
                </th>
                <th scope="col">
                  <h3>Card Number</h3>
                </th>
                <th scope="col">
                  <h3>&nbsp;&nbsp;Holder Name</h3>
                </th>
                <th scope="col">
                  <h3>Expire Date</h3>
                </th>
                <th scope="col">
                  <h3>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Action
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.Payment.map((Payment, index) => (
                <tr>
                  <th scope="row">
                    <h4>&nbsp;&nbsp;{index + 1}&nbsp;</h4>
                  </th>
                  <td>
                    <h5>&nbsp;&nbsp;Visa</h5>&nbsp;
                  </td>
                  <td>
                    <h5>xxxx-xxxx-xxxx-5698</h5>
                  </td>
                  <td>
                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;{Payment.name}</h5>
                  </td>
                  <td>
                    <h5>&nbsp;&nbsp;{Payment.expiry}</h5>
                  </td>
                  <td>
                  <Link to="/Paymentdone">
                  <button className="btn btn-primary">
                        Select Card
                      </button>
                      </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/SelectCredit">
            <button
              type="Submit"
              className="btn btn primary btn-success"
              style={{ float: "none" }}
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
          <br />
          <br />
        </div>
      </div>
    );
  }
}

{
  /* <div className="container">
          <br />
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>ADDED ALL CARDS</h4>
            </div>
            <div className="col-lg-3 mt-2 mb-2"></div>
          </div>

          <div className="col-lg-3 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="search medicine"
              name="searchquery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
            

          <table className="table" id="content">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Card Number</th>
                <th scope="col">Card Holder Name</th>
                <th scope="col">Expiration Date</th>
                <th scope="col">Action</th>
              </tr>

             
            </thead>
            <tbody>
              {this.state.Payment.map((Payment, index) => (
                <tr key={index}>
                  <th scope="row"> {index+1}</th>
                  <td><a href={`/Payment/${Payment._id}`} style = {{textDecoration:'none'}}>
                   
                      {Payment.number}
                      </a>
                  </td>
                  <td>{Payment.name}</td>
                  <td>{Payment.expiry}</td>
                   {  <td>
                    <a className="btn btn-warning" href={`/edit/${Payment._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-danger"
                      href="#"
                      onClick={() => this.onDelete(Payment._id)}
                    >
                      <i className="fas fa-trash-alt"></i>&nbsp;Delete
                    </a> 
                  </td> } 
                </tr>
              ))}
            </tbody>
          </table>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div> */
}
