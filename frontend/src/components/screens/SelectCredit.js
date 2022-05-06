import React from "react";
import {Link} from "react-router-dom";
import "./SelectCredit.css"


export default function mainHome(){
    return(
        <div style={{minHeight: "80vh"}}> 
            <img src ="/images/stud.png" alt=""/>
            <center>
            
            {/* <h2>Welcome to Imax Institute Students Section</h2> */}
            </center>
            <br/>
           
            <h2><u>Please Select Your Preference</u></h2>

                <center>
                <br></br>
                <br></br>
                <a href="/CreditCard2" class="exambutton2" role="button" >Checkout With New Card</a>
                <br></br>
                <br></br>
                <a href="/CreditCardDetails2" class="exambutton2" role="button " >Checkout Using Existing Card</a>
                <br></br>
              
            
                </center>

        </div>
    )
}
