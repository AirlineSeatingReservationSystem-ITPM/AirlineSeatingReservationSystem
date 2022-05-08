import React from "react";
import {Link} from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs(){
    return(
    <div>
       <div>
          <Link to = "/">
             <button type="submit" className="btn btn-primary btn-info" variant="info" style={{float:"right"}}><i class="fa fa-reply" aria-hidden="true"></i>Logout</button>
            </Link>
          </div>
        <div>
             
            <div className="bgs"> 
            <div className="signup-forms" style={{opacity:"0.8"}}>
            
            <form >

                <h2 style={{color:"#000066"}}> <b>ABOUT US </b></h2>
                
                <p><center>
                <br></br>

                <h4 className="Front" style={{textAlign:"justify"}}> We help you search and compare the best flight from hundreds of airlines, agents and travel providers.<br></br><br></br>

               <i>SKYLINE AIRWAYS</i>  is a global flight search and travel deals website. We use innovative technology to make finding the best value flight quick and easy. Our extensive range of partners, great deals and travel content should make us the natural starting point for your travel research.

                <br></br>  <br></br> <i>SKYLINE AIRWAYS</i>  independent subsidiary of Booking Holdings. We now see more than 120 million people visit our sites and apps globally each year, using our proprietary and independent technology to search,
                compare and explore the inventory of thousands of travel partners, from the smallest travel agents to the biggest airlines.

                <br></br>  <br></br> Whether you already know where and when you want to travel, or can be a bit flexible and are seeking some inspiration,<i>SKYLINE AIRWAYS</i>  is the perfect place to search for and plan the best trip. 
                </h4>

                </center></p>
              
            </form>
            
            
        </div>
        
       </div>
            
        
        </div>
        
    </div>    
    
       
    
    )
}