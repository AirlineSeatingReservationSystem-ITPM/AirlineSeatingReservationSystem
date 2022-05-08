import {useState , useEffect} from "react";
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";
import "./Register.css";

const RegisterScreen = ()=>{
    const history = useNavigate();
    // const [name , setName] = useState("");
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [confirmpassword , setConfirmPassword] = useState("");
    const [email , setEmail] = useState("");
  
    const [error , setError] = useState("");

    useEffect(()=>{
        if(localStorage.getItem("authToken")){  //push a user if he already logged in
          //  history("/login");
        }
    } , [history])

    const registerHandler = async (e)=>{
        e.preventDefault();

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        if(password !== confirmpassword){
            setPassword("");
            setConfirmPassword("");
            setTimeout(()=>{
                setError("");
            } , 5000);

            return setError("Password did not match");

        }

        try {
            const {data} = await axios.post("http://localhost:8085/api/auth/register" , { username , email , password} , config);

            localStorage.setItem("authToken" , data.token);

            history("/");

        } catch (error) {
            setError(error.response.data.error);
            setTimeout(()=>{
                setError("");
            } , 5000); //5s
        }
    }

    return(
       <div className="bg"> 
            <div className="signup-form" style={{opacity:"0.8"}}>
            <form onSubmit = {registerHandler}>
                <h2 style={{color:"white"}}>Sign Up</h2>
                {error && <span className="error-message" style={{color:"red"}}>{error}</span>}  {/*ternary operator*/}
                <p>Please fill in this form to create an account!</p>
                <hr />

                {/* <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user"></span>
                            </span>                    
                        </div>
                        <input type="text" className="form-control" name="name" placeholder="name" required="required" 
                        value = {name} onChange = {(e)=>setName(e.target.value)}
                        />
                    </div>
                </div> */}

                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user-circle"></span>
                            </span>                    
                        </div>
                        <input type="text" className="form-control" name="username" placeholder="Username" required="required" 
                        value = {username} onChange = {(e)=>setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                            </span>                    
                        </div>
                        <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}" 
                        value = {email} onChange = {(e)=>setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>                    
                        </div>
                        <input type="password" className="form-control" name="password" placeholder="Password" required="required" 
                        value = {password} onChange = {(e)=>setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>                    
                        </div>
                        <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" 
                        value = {confirmpassword} onChange = {(e)=>setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>

                {/* <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user-circle"></span>
                            </span>                    
                        </div>
                        <input type="text" className="form-control" name="passportno" placeholder="passportno" required="required" 
                        value = {passportno} onChange = {(e)=>setPassportNo(e.target.value)}
                        />
                    </div>
                </div> */}

                <div className="form-group">
                    <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                </div>

            {/* </form> */}
            <div style={{color:"#000066"}} className="text-center"><h5><b>Already have an account 🧐?</b></h5> <Link to="/" style={{color : "white" ,textDecoration:"none" , backgroundColor:"#000066"}}><i class="fa fa-mouse-pointer" aria-hidden="true"></i> <b>Login here</b></Link></div>
            </form>
        </div>
        <br></br> <br></br> <br></br> <br></br> <br></br>   <br></br> <br></br> <br></br> <br></br> <br></br>

            
            {/* <div style={{color:"#000066"}} className="text-center"><h5><b>Already have an account 🧐?</b></h5> <Link to="/" style={{color : "white" ,textDecoration:"none" , backgroundColor:"#000066"}}><i class="fa fa-mouse-pointer" aria-hidden="true"></i> <b>Login here</b></Link></div>
 
            </form>
        
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
 
            </form>   
        </div> */}
       
 
       </div>
    )
}

export default RegisterScreen;