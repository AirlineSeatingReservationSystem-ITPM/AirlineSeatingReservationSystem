import React from "react";
import Cards from "react-credit-cards";
import "./CreditCard.scss";
import "./CardStyles.css";
import axios from "axios";
import "../../PaymentManagement/CreditCard/Card.css";
import Swal from "sweetalert2";

export default class UpdateCard extends React.Component {
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

    const id = this.props.match.params.id;

    const { cvc, expiry, name, number } = this.state;

    const data = {
      cvc: cvc,
      expiry: expiry,
      name: name,
      number: number,
    };

    axios.put(`/payment/update/${id}`, data).then((res) => {
      if (res.data.success) {
        this.setState({
          cvc: "",
          expiry: "",
          name: "",
          number: "",
        });
      }
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Card Details added Successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/Payment/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          number: res.data.Payment.number,
          name: res.data.Payment.name,
          expiry: res.data.Payment.expiry,
          cvc: res.data.Payment.cvc,
        });

        console.log(this.state.Payment);
      }
    });
  }

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
          <div className="cardContainer">
            <form >
              <h3>Please enter your card details below</h3>

              <div className="form-group">
                <h6>Enter Card Number:</h6>
                <input
                  type="tel"
                  name="number"
                  className="form-control"
                  pattern="[\d| ]{16,22}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                  value={this.state.number}
                />
                <small>E.g.: 49..., 51..., 36..., 37...</small>
              </div>

              <div className="form-group">
                <h6>Enter Card Holder Name:</h6>
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
                  <h6>Enter Expiration Date:</h6>
                  <input
                    type="tel"
                    name="expiry"
                    className="form-control"
                    placeholder="MM/YY"
                    pattern="\d\d/\d\d"
                    required
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    value={this.state.expiry}
                  />
                </div>

                <div className="col-6">
                  <h6>Enter CVC Number:</h6>
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
                  <button className="btn btn-primary btn-lg col-sm-4" onClick={this.handleSubmit}>
                    Update Card
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
