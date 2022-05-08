import React from "react";
import {Link} from "react-router-dom";
import "./TravelInsuvarance.css"


export default function TravelInsuvarance(){
    return(
        <div style={{minHeight: "80vh"}}> 
            <img src ="/images/stud.png" alt=""/>
            <center>
            
            {/* <h2>Welcome to Imax Institute Students Section</h2> */}
            </center>
            <br/>
           
            <h2><u>TRAVEL INSUARANCE</u></h2>

                <center>
                <br></br>
                <br></br>
                <h4 className="Front">Whether you're traveling to Sri Lanka or traveling abroad from Sri Lanka, protect yourself and you travel plans with our comprehensive and exhaustive policy designed to ensure that no matter where you're travelling to, we've got you covered! pack your luggage with the essentials after insuring yourself with the best travel insurance that's just a click away to explore the world before you. Push your boundaries, whether you're surfing in Arugam bay or hiking in the Alps, and rest easy knowing that we're there for you.  </h4>



                <br></br>
                <br></br><br></br>
               
                
                

                <div className="form-actions">
                  <div className="button1">
                  <Link to="/InsuranceFull">
                    <button className="btn btn-primary btn-lg col-sm-4">
                      Full Guide
                    </button>
                    </Link>
                    &nbsp; <br />
                    
                    <div className="button1">
                  <Link to="/HomeSc">
                    <button className="btn btn-warning btn-lg col-sm-4">
                      Visit Home
                    </button>
                    </Link>
                    </div>
                </div>
                </div>
                    
                 
                
                <br></br>
              
            
                </center>
     </div>

        
    )
}