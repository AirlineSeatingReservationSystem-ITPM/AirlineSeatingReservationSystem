import React from "react";
import {Link} from "react-router-dom";


export default function Home(){
    return(
    <div>
       
       <div>
          <Link to = "/">
             <button type="submit" className="btn btn-primary btn-info" style={{float:"right"}}><i class="fa fa-reply" aria-hidden="true"></i>Logout</button>
            </Link>
          </div>

        <div>

            <center><img src = "users.jpg" style={{width:"65%"}}/></center>
        
        </div>
        
    </div>    
    
       
       
    )
}