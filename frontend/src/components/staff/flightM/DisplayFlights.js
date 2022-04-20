import React , {useState , useEffect} from 'react';
import '../../../styles.css';
import {Link} from "react-router-dom";
import axios from 'axios';


const  DisplayFlights = () => {
  
  const [data, setData] = useState([])
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      await axios.get("http://localhost:8085/flights").then((res) =>  setData(res.data)).catch(() => null)
    })()
  }, [])
  
  const filteredData = data?.filter(el => el?.destination?.toLowerCase().indexOf(query.toLowerCase()) >= 0);

  return (
   <div style={{color:"blue"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"red"}}><b>Flight Sheduling Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to = "/staff-home"><i class="fa fa-fw fa-home"></i>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to = "/add-flightM"><i class="fa fa-plus-square" aria-hidden="true"></i> Add Shedule</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to = "/display-flightM"><i class="fa fa-plane" aria-hidden="true"></i> Display Shedule</Link>
          </li>
          {/* <li className="nav-item">
              <Link className="nav-link active" to = "#"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit schedule</Link>
            </li> */}
          {/* <li className="nav-item">
                <Link className="nav-link" to = "/complaints-flightM"><i class="fa fa-comments" aria-hidden="true"></i> Help</Link>
              </li> */}
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}} onChange={(e) => setQuery(e.target.value)} value={query}/>
          <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
        </form>
      </div>
    </div>
  </nav>
    <div className="App">
      <h1>All Flights</h1>

      {/* Fetch data from API
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Flights
        </button>
        <br />
      </div> */}

      {/* Display data from API */}
      <div className="students"style={{width:"100%",marginLeft:"50px"}}>
           {filteredData.length === 0 ?(<div className="alert alert-danger" style={{marginLeft:"50px"}}>
                                   <center>Data is not found
                                    </center> <br/><br/><br/><br/><br/><br/><br/>
                               </div>
                           ):(filteredData.map(i => 
            <p>
                 <div className="student"style={{width:"95%" }} >
                  
   
                   <div className="details">
                     <div >
                       <div style={{float:"right"}}>
                         {/* <img src ={"images/" + i.photo} style={{width:"200px" , height:"200px"}}
                         className = "border border-danger rounded-circle"
                         /> */}
                       </div>
                    <p >✔️<b style={{color:"red"}}>ID   : </b>{i.id}</p>
                    <p >✈️<b style={{color:"green"}}>Flight  : </b>{i.flight}</p>
                    <p >📅<b style={{color:"blue"}}>Date: </b>{i.date}</p>
                    <p >🏳️‍🌈<b style={{color:"purple"}}>Destination: </b>{i.destination}</p>
                    <p >🕐<b style={{color:"red"}}>Sheduled Departure time   : </b>{i.sheduleddeparturetime}</p>
                    <p >🛩️<b style={{color:"green"}}>Assign Planetype   : </b>{i.assignplanetype}</p>
                    <p >💺<b style={{color:"blue"}}>Capacity   : </b>{i.capacity}</p>
                    <p >💺<b style={{color:"purple"}}>Seats reserved   : </b>{i.seatsreserved}</p>
                    <p >✨<b style={{color:"red"}}>Available classes   : </b>{i.availableclasses}</p>
                  </div>
                
                  <a href="/edit-flightM"><button className="btn btn-secondary">Edit</button></a>
                  
    
                </div>
              </div>
            </p>
                           ))}
          </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
   </div>
  );

}

export default DisplayFlights;