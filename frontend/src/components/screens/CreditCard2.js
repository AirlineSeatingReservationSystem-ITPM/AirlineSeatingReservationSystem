import React, { useState } from "react";
import Cards from "react-credit-cards";
import "./CreditCard.scss";
import "./CardStyles.css";
import axios from "axios";
import "../../PaymentManagement/CreditCard/Card.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
    };
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { cvc, expiry, focus, name, number } = this.state;

    const data = {
      cvc: cvc,
      expiry: expiry,
      focus: focus,
      name: name,
      number: number,
    };

    axios.post("/payment/add", data).then((res) => {
      if (res.data.success) {
      }
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Card details are included",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  render() {
    return (
      <div className="background" style={{ backgroundColor: "#eeedff" }}>
        <div id="Payment">
          <div className="App-payment">
            <h1 className="h1">Card Information</h1>
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
              cardName={this.state.cardName}
            />
            <div className="cardContainer">
              <form onSubmit={this.handleSubmit}>
                <div class="headercard">
                  <h3>🔴Please enter your card details below👇</h3>
                </div>
                <div className="form-group">
                  <div class="namecard">
                    <h6>Enter Card Number:</h6>
                  </div>
                  <input
                    type="tel"
                    name="number"
                    className="form-control"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    pattern="[\d| ]{16,22}"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    value={this.state.number}
                  />
                </div>

                <div className="form-group">
                  <div className="hodercard">
                    <h6>Enter Card Holder Name:</h6>
                  </div>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    value={this.state.name}
                  />
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="expcard">
                      <h6>Enter Expiration Date:</h6>
                    </div>
                    <input
                      type="tel"
                      name="expiry"
                      className="form-control"
                      placeholder="MM/YY                                       📅"
                      pattern="\d\d/\d\d"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      value={this.state.expiry}
                    />
                  </div>

                  <div className="col-6">
                    <div className="cvccard">
                      <h6>Enter CVC Number:</h6>
                    </div>
                    <input
                      type="tel"
                      name="cvc"
                      className="form-control"
                      placeholder="CVC                                           💳"
                      pattern="\d{3,4}"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      value={this.state.cvc}
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <div className="button1">
                    <button className="btn btn-primary btn-lg col-sm-4">
                      Pay
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
