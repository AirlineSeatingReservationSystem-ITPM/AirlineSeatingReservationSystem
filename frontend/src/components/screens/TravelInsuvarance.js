import React from "react";
import {Link} from "react-router-dom";
import "./TravelInsuvarance.css";

export default function TravelInsuvarance(){
    return(
    <div>
       <div>
          <Link to = "/">
             <button type="submit" className="btn btn-primary btn-info" variant="info" style={{float:"right"}}><i class="fa fa-reply" aria-hidden="true"></i>Logout</button>
            </Link>
          </div>
        <div>
             
    
            {/* <center><img src = "chandimaa.png" style={{width:"75%"}}/></center>  */}
            {/* <form> */}
            <div className="bgs"> 
            <div className="signup-forms" style={{opacity:"0.8"}}>
            <br></br><br></br><br></br><br></br>    
            <form >

                <h4 style={{color:"white"}}>....TRAVEL INSUARANCE....</h4>
                {/* {error && <span className="error-message" style={{color:"red"}}>{error}</span>}  {/ternary operator/} */}
                <p><center>
                <br></br>
                <br></br>
                <h4 className="Front">Whether you're traveling to Sri Lanka or traveling abroad from Sri Lanka, protect yourself and you travel plans with our comprehensive and exhaustive policy designed to ensure that no matter where you're travelling to, we've got you covered! pack your luggage with the essentials after insuring yourself with the best travel insurance that's just a click away to explore the world before you. Push your boundaries, whether you're surfing in Arugam bay or hiking in the Alps, and rest easy knowing that we're there for you.  </h4>



                <br></br>
                <div className="form-actions">
                  <div className="button1">
                  <Link to="/InsuranceFull">
                    <button className="btn btn-primary btn-lg col-sm-4">
                    Full Guide
                    </button>
                    </Link>
                    <br />
                    
                    <div className="button1">
                  <Link to="/HomeSc">
                    <button className="btn btn-warning btn-lg col-sm-4">
                      Visit Home
                    </button>
                    </Link>
                    </div>
                  </div>
                  </div>
                <br></br><br></br></center></p>
                {/* <hr /> */}

                
            </form>
            
            
        </div>
       </div>
            
        
        </div>
        
    </div>    
    
       
    
    )
}