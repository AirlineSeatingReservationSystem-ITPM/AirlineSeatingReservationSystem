import React from "react";
import {Link} from "react-router-dom";
import "./Medical.css";

export default function MediCare(){
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
            <br></br><br></br><br></br><br></br><br></br>    
            <form >

                <h4 style={{color:"#000099"}}><b>👩‍⚕️..Medical Assistance..👩‍⚕️</b></h4>
                {/* {error && <span className="error-message" style={{color:"red"}}>{error}</span>}  {/ternary operator/} */}
                <p><center>
                <br></br>
                <br></br>
                <h4 className="Front" style={{textAlign:"justify"}}><b> The Medical Information Form (MEDIF) and Frequent Travellers Medical Card (FREMEC)
If your health is in doubt or need special assistance, please complete the Medical Information Form (MEDIF) to make us aware of your needs so that we can offer special assistance on your journey and/or evaluate whether it’s safe for you to travel.</b><br></br><br></br>
  <p style={{color:"#000099",textAlign:"justify"}}><b>   🩺 Part 1. of the MEDIF should be filled in by the passenger or a ticket office agent on behalf of the passenger.</b></p><br></br> 

  <p style={{color:"#000099",textAlign:"justify"}}><b>🩺   Part 2 should be completed by the passenger’s doctor.</b></p><br></br><br></br>


  <p style={{textAlign:"justify"}}><b> On completion, both part 1 and 2 should be handed over to the nearest Sky Airways  ticket office at least 48 hours before the flight to process your request. Please note that we may contact you or your doctor for further information/clarification on your condition if required.

Sky Airways must be notified immediately of any change in the passengers condition PRIOR to travel.Plese send an email to skyflight123@gmail.com and make a Phone call 011 22 22 333 for further information</b></p></h4>



                <br></br>
                <div className="form-actions">
                  <div className="button1">
                  {/* <Link to="/InsuranceFull">
                    <button className="btn btn-primary btn-lg col-sm-4">
                      Full Guide
                    </button>
                    </Link> */}
                    &nbsp;  
                    
                     
                  </div>
                  </div>
                 </center></p>
                 

                
            </form>
             
            
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       </div>
            
        
        </div>
        {/* <br></br><br></br><br></br><br></br><br></br>  */}
    </div>    
    
       
    
    )
}