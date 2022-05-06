import {Navigate} from "react-router-dom";

 function PrivateUserStaffRoute({children}){
     const isAuthenticated=true;
     if(isAuthenticated){
         return children;
     }
     return <Navigate to="/login"/>; 
 }

export default PrivateUserStaffRoute;