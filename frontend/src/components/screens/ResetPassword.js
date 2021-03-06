import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Reset.css";
import "./Register.css";
import { useParams } from "react-router-dom";

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { token } = useParams();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);

      return setError("Password did not match");
    }

    try {
      const { data } = await axios.put(
        `http://localhost:8085/api/auth/passwordreset/${token}`,
        { password },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000); //5s
    }
  };

  return (
    <div className="bg2">
      <div className="signup-form  bg-dark " style={{ opacity: "0.8" }}>
        <form onSubmit={resetPasswordHandler}>
          <h2 className="text-center" style={{ color: "white" }}>
            Reset Password <i class="fa fa-retweet" aria-hidden="true"></i>
          </h2>
          {error && <span className="badge bg-warning">{error}</span>}
          {success && (
            <span className="badge bg-success">
              {success + " "}
              <Link to="/" style={{ color: "yellow" }}>
                Login here
              </Link>
            </span>
          )}
          <div className="form-group">
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="🔏 New Password"
              required="required"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="🔐 Confirm Password"
              required="required"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              <i class="fa fa-cog" aria-hidden="true"></i> Reset
            </button>
          </div>
        </form>
      </div>
      <Link to="/login">
        <button
          type="submit"
          className="btn btn-primary btn-success"
          style={{ float: "right" }}
        >
          <i class="fa fa-reply" aria-hidden="true"></i> Back
        </button>
      </Link>
    </div>
  );
};

export default ResetPasswordScreen;
