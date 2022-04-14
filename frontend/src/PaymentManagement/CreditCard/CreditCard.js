import React, { useState } from "react";
import Cards from "react-credit-cards";
import "./CreditCard.scss";
import "./CardStyles.css";
import axios from "axios";

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
  };

  render() {
    return (
      <div id="Payment">
        <div className="App-payment">
          <h1 className="h1">Card Information</h1>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                value={this.state.number}
              />
              <small>E.g.: 49..., 51..., 36..., 37...</small>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Card Holder Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                value={this.state.name}
              />
            </div>

            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  value={this.state.expiry}
                />
              </div>

              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
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
                <button className="btn btn-primary btn-lg col-sm-4">PAY</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
