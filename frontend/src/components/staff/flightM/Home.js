import React from "react";
import {Link} from "react-router-dom";
import "./Home.css";

export default function Home(){
    return(
    <div>
       <div>
          <Link to = "/">
             <button type="submit" className="btn btn-primary btn-success" style={{float:"right"}}><i class="fa fa-reply" aria-hidden="true"></i>Logout</button>
            </Link>
          </div>
        <div>
             
    
            {/* <center><img src = "chandimaa.png" style={{width:"75%"}}/></center>  */}
            {/* <form> */}
            <div className="bg"> 
            <div className="signup-form" style={{opacity:"0.8"}}>
            <br></br><br></br><br></br><br></br><br></br>   
            <form >

                <h2 style={{color:"white"}}>....Welcome Flight Management....</h2>
                {/* {error && <span className="error-message" style={{color:"red"}}>{error}</span>}  {/ternary operator/} */}
                <p>🙏Ayubowan from Sri Lanka🙏</p>
                <hr />

                 
            </form>
             
            
        </div>
       </div>
            
        
        </div>
        
    </div>    
    
       
    
    )
}