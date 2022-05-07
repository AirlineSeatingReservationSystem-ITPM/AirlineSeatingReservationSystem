import React, { useState , useEffect} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";


const Edit = () => {

  const [id, setId] = useState("")
  const [flight, setFlight] = useState("")
  const [date, setDate] = useState("")
  const [destination, setDestination] = useState("")
  const [sheduleddeparturetime, setSheduledDepartureTime] = useState("");
  const [assignplanetype, setAssignPlaneType] = useState("")
  const [capacity, setCapacity] = useState("")
  const [seatsreserved, setSeatsReserved] = useState("")
  const [availableclasses, setAvailableClasses] = useState("")

  const [data, setData] = useState([])

  const ID = useParams();

  const onChangeDate = (e) => {
    setDate(e.target.value)
  }

  useEffect(() => {
    (async ()=> {
      await axios.get(`http://localhost:8085/flights/get/${ID?.id}`).then((res) => {
        setId(res.data.id)
        setFlight(res.data.flight)
        setDate(res.data.date)
        setDestination(res.data.destination)
        setSheduledDepartureTime(res.data.sheduleddeparturetime)
        setAssignPlaneType(res.data.assignplanetype)
        setCapacity(res.data.capacity)
        setSeatsReserved(res.data.seatsreserved)
        setAvailableClasses(res.data.availableclasses)
      }).catch(() => null)
    })()
  } ,[])

  const onSubmit = async(e) => {
    e.preventDefault()

    await axios.put(`http://localhost:8085/flights/update/${ID?.id}` , {id , flight , date , destination , sheduleddeparturetime , assignplanetype , capacity , seatsreserved , availableclasses})
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
                        <Link className="nav-link active" to = "/edit-flightM"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit shedule</Link>
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
                <h1>👉Need to Update ?🤔 </h1>
                <Form onSubmit={onSubmit}>
               
                    <Form.Group controlId="Id">
                    <Form.Label style={{float:"left",color:"black"}}>ID</Form.Label>
                    <Form.Control type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="✍🏻 Edit Id" required />
                    </Form.Group><br></br>

                    <Form.Group controlId="Flight">
                    <Form.Label style={{float:"left",color:"black"}}>Flight</Form.Label>
                    <Form.Control type="text" value={flight} onChange={(e) => setFlight(e.target.value)} placeholder="✍🏻 Edit Flight" required/>
                    </Form.Group><br></br>

                    <Form.Group controlId="Date">
                    <Form.Label style={{float:"left",color:"black"}}>Date</Form.Label>
                    <Form.Control type="text" value={date} onChange={onChangeDate} placeholder="✍🏻 Edit Date" required/>
                    </Form.Group><br></br>

                    <Form.Group controlId="Destination">
                    <Form.Label style={{float:"left",color:"black"}}>Destination</Form.Label>
                    <Form.Control type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="✍🏻 Edit Destination" required/>
                    </Form.Group><br></br>

                    <Form.Group controlId="Sheduleddeparturetime ">
                    <Form.Label style={{float:"left",color:"black"}}>Sheduled Departure time </Form.Label>
                    <Form.Control type="time" value={sheduleddeparturetime } onChange={(e) => setSheduledDepartureTime(e.target.value)} placeholder="✍🏻 Edit Sheduled departure time " required />
                    </Form.Group><br></br>

                    <Form.Group controlId="Assignplanetype">
                    <Form.Label style={{float:"left",color:"black"}}>Assign Plane Type</Form.Label>
                    <Form.Control type="text" value={assignplanetype} onChange={(e) => setAssignPlaneType(e.target.value)} placeholder="✍🏻 Edit Assign plane type" required />
                    </Form.Group><br></br>

                    <Form.Group controlId="Capacity ">
                    <Form.Label style={{float:"left",color:"black"}}>Capacity </Form.Label>
                    <Form.Control type="text" value={capacity } onChange={(e) => setCapacity(e.target.value) } placeholder="✍🏻 Edit capacity " required />
                    </Form.Group><br></br>

                    <Form.Group controlId="Seatsreserved ">
                    <Form.Label style={{float:"left",color:"black"}}>Seats Reserved </Form.Label>
                    <Form.Control type="text" value={seatsreserved } onChange={(e) => setSeatsReserved(e.target.value) } placeholder="✍🏻 Edit Seats reserved " required />
                    </Form.Group><br></br> 


                    <Form.Group controlId="Availableclasses  ">
                    <Form.Label style={{float:"left",color:"black"}}>Available Classes  </Form.Label>
                    <Form.Control type="text" value={availableclasses } onChange={(e) => setAvailableClasses(e.target.value)  } placeholder="✍🏻 Edit Available classes  " required />
                    </Form.Group>

                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Flight Details
                    </Button>
                    <Link to = "/edit-flightM">
             <button type="submit" className="btn btn-primary btn-success" style={{float:"right"}}><i class="fa fa-reply" aria-hidden="true"></i>Back</button>
            </Link>
                </Form><br/><br/><br/><br/>
                </div>
                <br/><br/>
        </div>
        
       );
  

}

export default Edit;