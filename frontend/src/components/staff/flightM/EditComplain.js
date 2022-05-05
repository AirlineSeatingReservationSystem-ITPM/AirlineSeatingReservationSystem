import React, { useState , useEffect} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";


const Edit = () => {

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [description, setDescription] = useState("")
  const [email, setEmail] = useState("");
   

  const [data, setData] = useState([])

  const ID = useParams();

  const onChangeDate = (e) => {
    setData(e.target.value)
  }

  useEffect(() => {
    (async ()=> {
      await axios.get(`http://localhost:8085/complain/get/${ID?.id}`).then((res) => {
        setId(res.data.id)
        setName(res.data.name)
        setType(res.data.type)
        setDescription(res.data.description)
        setEmail(res.data.email)
         
      }).catch(() => null)
    })()
  } ,[])

  const onSubmit = async(e) => {
    e.preventDefault()

     await axios.put(`http://localhost:8085/complain/update/${ID?.id}` , {id , name , type , description , email })
       .then((res) => {
        alert('Flight successfully updated')
      }).catch((error) => {
         alert(error)
       })
      // Redirect to Flight List 
    // this.props.history.push('/edit-flightM')
    
  }
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
                <div className="container-fluid">
                  <a className="navbar-brand" href="#" style={{color:"red"}}><b>Flight Scheduling Management System</b></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
                      <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to = "/staff-flightM-home"><i class="fa fa-fw fa-home"></i>Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to = "/add-flightM"><i class="fa fa-plus-square" aria-hidden="true"></i> Add shedule</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to = "/display-flightM"><i class="fa fa-plane" aria-hidden="true"></i> Display shedule</Link>
                      </li>
                      <li className="nav-item">
              <Link className="nav-link" to = "/complains-flightM"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Display Complains</Link>
            </li>
                      <li className="nav-item">
                        <Link className="nav-link active" to = "/editcomplain-flightM"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Reply Complain</Link>
                      </li>
                    </ul>
                    <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}}/>
                      <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
                    </form>
                  </div>
                </div>
              </nav>
            
                <div className="form-wrapper container" style={{width:"50%",backgroundColor:"#b3ffff"}}><br/><br/>
                <h1>👉Complain Deatails ?🤔 </h1>
                <Form onSubmit={onSubmit}>
               
                    <Form.Group controlId="Id">
                    <Form.Label style={{float:"left",color:"black"}}>ID</Form.Label>
                    <Form.Control type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="✍🏻 Edit Id" required />
                    </Form.Group><br></br>

                    <Form.Group controlId="Name">
                    <Form.Label style={{float:"left",color:"black"}}>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="✍🏻 Edit Name" required/>
                    </Form.Group><br></br>

                    <Form.Group controlId="Type">
                    <Form.Label style={{float:"left",color:"black"}}>Type</Form.Label>
                    <Form.Control type="text" value={type} onChange={(e)=> setType(e.target.value)} placeholder="✍🏻 Edit Type" required/>
                    </Form.Group><br></br>

                    <Form.Group controlId="Description">
                    <Form.Label style={{float:"left",color:"black"}}>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="✍🏻 Edit Description" required/>
                    </Form.Group><br></br>

                    <Form.Group controlId="Email ">
                    <Form.Label style={{float:"left",color:"black"}}>Email</Form.Label>
                    <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="✍🏻 Edit Email " required />
                    </Form.Group><br></br>

                     

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Flight Details
                    </Button>
                    <Link to = "/editComplain-flightM">
             <button type="submit" className="btn btn-primary btn-success" style={{float:"right"}}><i class="fa fa-reply" aria-hidden="true"></i>Back</button>
            </Link>
                </Form><br/><br/><br/><br/>
                </div>
                <br/><br/>
        </div>
        
       );
  

}

export default Edit;