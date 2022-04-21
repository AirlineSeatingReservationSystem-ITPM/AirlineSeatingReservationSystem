import { useEffect} from "react";


const PrivateFlightStaff = ()=>{

    useEffect(()=>{
        if(!localStorage.getItem("authTokenStaff")){  //push a user if he already logged in
            history ("/staff-flightM");
        }

    } , [history])  //dependency array

    const logoutHandler = ()=>{
        localStorage.removeItem("authTokenStaff");
        history("/staff-login-flightM");
    }

    return(

            <div style={{backgroundColor:"green" , color : "white"}}>
                <img src="thaulla1.png" style={{width:"60px"}}/>
                <button onClick = {logoutHandler} style={{float:"right"}} className="btn btn-warning"><i class="fa fa-reply-all" aria-hidden="true"></i> Logout</button>
                <marquee width="100%" direction="left" >
                <i class="fa fa-heartbeat" aria-hidden="true"></i> Welcome to the Flight Shceduling System
                </marquee>
            </div>

    )

}

export default PrivateFlightStaff;