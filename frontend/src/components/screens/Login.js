import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import "./Register.css";

const LoginScreens = () => {
  const history = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      //push a user if he already logged in
      //   history("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8085/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      localStorage.setItem("name", data.username);

      history("/displayUsers");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000); //5s
    }
  };

  const showPassword = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  return (
    <div className=" bg0">
      <button className="btn btn-danger">
        <i class="fa fa-user-circle" aria-hidden="true"></i>{" "}
        <Link
          to="/staff-login"
          style={{ textDecoration: "none", color: "white" }}
        >
          Staff
        </Link>
      </button>
      <marquee width="10%" direction="left">
        <font style={{ color: "white" }}>
          <i class="fa fa-hand-o-left" aria-hidden="true"></i> if you are a
          staff member please login here
        </font>
      </marquee>

      <div className="signup-form  bg-blue " style={{ opacity: "0.8" }}>
        <form onSubmit={loginHandler}>
          <img src={"airplane.png"} style={{ width: "100px" }} />
          <h2 className="text-center" style={{ color: "white" }}>
            Log in <i class="fa fa-grav" aria-hidden="true"></i>
          </h2>
          {error && <span className="badge bg-warning">{error}</span>}
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="📧 Email"
              required="required"
              pattern="[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="🔐 Password"
              required="required"
              id="myInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="float-left form-check-label">
              <input type="checkbox" onClick={showPassword} /> Show Password
            </label>
          </div>
          <br />
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              <i class="fa fa-leaf" aria-hidden="true"></i> Log in
            </button>
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
          <Link to="/register" style={{ textDecoration: "none", float:"left"} }>
            <h5>
              <i class="fa fa-cogs" aria-hidden="true"></i> Create an Account
            </h5>
          </Link>
        </p>
        </form>
       
      </div>
    </div>
  );
};

export default LoginScreens;
