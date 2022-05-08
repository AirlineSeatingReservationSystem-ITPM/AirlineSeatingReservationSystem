import React from "react";
import {Link} from "react-router-dom";
import "./mainhome.css"


export default function mainHome(){
    return(
        <div style={{minHeight: "80vh"}}> 
            <img src ="/images/stud.png" alt=""/>
            <center>
            
            {/* <h2>Welcome to Imax Institute Students Section</h2> */}
            </center>
            <br/>
           
            <h2>Please Select Your Preference</h2>

                <center>
                <br></br>
                <br></br>
                <a href="/bookingform" class="exambutton2" role="button" >Book a Flight</a>
                <br></br>
                <br></br>
                <a href="/checkbooking" class="exambutton2" role="button " >Check Flight Status</a>
                <br></br>
                <br></br>
                <a href="/bookingtable" class="exambutton2" role="button" >Check Bookings</a>
                <br></br>
                <br></br>
                <a href="/specialbookings"  class="exambutton2" role="button" >Special Bookings</a>
                <br></br>
                <br></br>
                <a href="/freeCard/add"  class="exambutton2" role="button" >Special Assistance</a>
                <br></br>
                <br></br>   
                <div classs="container p-5">
	<div class="row no-gutters">
		<div class="col-lg-5 col-md-12">
			
		</div>
	</div>
</div>
                </center>

        </div>
    )
}








