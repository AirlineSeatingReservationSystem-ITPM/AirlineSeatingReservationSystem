import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles.css";
import "./EditUser.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EditProfile() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:8085/api/auth/getUserById/${id}`
      );
     
      setUsername(data.username);
      setEmail(data.email);
      setPhoto(data.photo);
    };

    fetchData();
  }, []);

  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8085/api/auth/editUser/${id}`, {
        username,
        email,
        photo,
      });
      alert("Successfully Update the User");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top"></nav>
      <center>
        <div className="App">
          <h1>Edit Profile</h1>

          {/* Fetch data from API */}

          {/* Display data from API */}

          <div className="student" style={{ width: "40%" , marginLeft:"500px"}}>
            <div className="details" >
              <div>
                <h2>User Account Info</h2>
                <center>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <button
                        style={{
                          background: "#171717",
                          color: "white",
                          padding: "50px",
                          borderRadius: "45%",
                          fontSize: "40px",
                        }}
                      >
                        {username.substring(0, 1).toUpperCase()}
                      </button>
                    </div>
                    <div>
                      <form onSubmit={updateHandler}>
                        <table>
                          <th>
                            
                            <tr>
                              <td>Username :</td>
                              <td>
                                {" "}
                                <input
                                  type="text"
                                  value={username}
                                  required
                                  onChange={(e) => setUsername(e.target.value)}
                                />
                                <br />
                              </td>
                            </tr>
                            <tr>
                              <td>Email : </td>
                              <td>
                                <input
                                  type="text"
                                  value={email}
                                  required
                                  onChange={(e) => setEmail(e.target.value)}
                                />{" "}
                                <br />
                              </td>
                            </tr>
                          </th>
                          <th>
                            <tr>
                              <td></td>

                              <td>
                                <br />
                              </td>
                            </tr>
                          </th>
                          <tr>
                            <td>
                              <input
                                type="submit"
                                className="update-form .btn"
                                value={"Update"}
                                required
                              />{" "}
                              <br />
                            </td>
                          </tr>
                        </table>
                      </form>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
{/* 
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /> */}
          <Link to="/displayUsers">
          <button
            type="submit"
            className="btn btn-primary btn-primary"
            style={{ float: "none" }}
          >
            <i class="fa fa-reply" aria-hidden="true"></i>Back
          </button>
        </Link>

          
          <br />
          <br />
        </div>
      </center>
    </div>
  );
}
