import React , {useState , useEffect} from 'react';
import '../../../styles.css';
import {Link} from "react-router-dom";
import axios from 'axios';


const  Display = () => {
  
  const [data, setData] = useState([])
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      await axios.get("http://localhost:8085/RefundRequests").then((res) =>  setData(res.data)).catch(() => null)
    })()
  }, [])
  
  const filteredData = data?.filter(el => el?.name?.toLowerCase().indexOf(query.toLowerCase()) >= 0);

  return (
   <div style={{color:"blue"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"red"}}><b>Payment Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
        <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to = "/staff-paymentM"><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to = "/RefundRequestsview"><i class="fa fa-users" aria-hidden="true"></i> List Refunds</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to = "/RefundRequestsview"><i class="fa fa-users" aria-hidden="true"></i> Display Refunds</Link>
            </li>
            
          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"60%"}} onChange={(e) => setQuery(e.target.value)} value={query}/>
          <button className="btn btn-outline-success" type="submit"><i class="fa fa-fw fa-search"></i>Search</button>
        </form>
      </div>
    </div>
  </nav>
    <div className="App">
      <h1>All Refunds</h1>

     

      {/* Display data from API */}
      <div className="students"style={{width:"100%",marginLeft:"50px"}}>
           {filteredData.length === 0 ?(<div className="alert alert-danger" style={{marginLeft:"50px"}}>
                                   <center>Data is not found. Please search Correctly.
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
                    <p >✔️<b style={{color:"red"}}>Name: </b>{i.name}</p>
                    <p >✈️<b style={{color:"green"}}>Passport: </b>{i.passport}</p>
                    <p >📅<b style={{color:"blue"}}>Referance: </b>{i.reference}</p>
                    <p >📧<b style={{color:"purple"}}>Email: </b>{i.email}</p>
                    <p >☎️<b style={{color:"red"}}>Phone: </b>{i.phone}</p>
                    <p >📖<b style={{color:"green"}}>Discription: </b>{i.description}</p>
                   
                  </div>
                
                  <a href="/RefundRequestsview"><button className="btn btn-secondary">List</button></a>
                  
    
                </div>
              </div>
            </p>
                           ))}
          </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
   </div>
  );

}

export default Display;