
import React, { useState , useEffect} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";


const Edit = () => {
//  const [paymentid, setPaymentId] = useState("");
  const [number, setNumber] = useState("")
  const [name, setName] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")
 
   const [data, setData] = useState([])

  const ID = useParams();

   const onChangeData = (e) => {
     setData(e.target.value)
   }

  useEffect(() => {
    (async ()=> {
      await axios.get(`http://localhost:8085/Payment/get/${ID?.id}`).then((res) => {
        setNumber(res.data.number)
        setName(res.data.name)
        setExpiry(res.data.expiry)
        setCvc(res.data.cvc)
        
      }).catch(() => null)
    })()
  } ,[])

  const onSubmit = async(e) => {
    e.preventDefault()

    await axios.put(`http://localhost:8085/Payment/update/${ID?.id}` , {number , name , expiry , cvc})
      .then((res) => {
        alert('Card successfully updated')
      }).catch((error) => {
        alert(error)
      })
      // Redirect to Flight List 
    // this.props.history.push('/edit-flightM')
    
  }
    return (
        <div>
            
                <div className="form-wrapper container" style={{width:"50%",backgroundColor:"#d7f29d"}}><br/><br/>
                <h1>👉Need to Update ?🤔 </h1>
                <Form onSubmit={onSubmit}>
               
                    <Form.Group controlId="number">
                    <Form.Label style={{float:"left",color:"black"}}>Number</Form.Label>
                    <Form.Control type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="✍🏻 Edit Number" required />
                    </Form.Group><br></br>

                    <Form.Group controlId="name">
                    <Form.Label style={{float:"left",color:"black"}}>Holder Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="✍🏻 Edit Name" required/>
                    </Form.Group><br></br>

                    <Form.Group controlId="expiry">
                    <Form.Label style={{float:"left",color:"black"}}>Expiry</Form.Label>
                    <Form.Control type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="✍🏻 Edit Expiry" required/>
                    </Form.Group><br></br>

                    <Form.Group controlId="cvc">
                    <Form.Label style={{float:"left",color:"black"}}>CVC</Form.Label>
                    <Form.Control type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="✍🏻 Edit CVC" required/>
                    </Form.Group><br></br>

                   
                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Update Card Details
                    </Button>
                    <Link to = "/CreditCardDetails">
             <button type="submit" className="btn btn-primary btn-success" style={{float:"right"}}><i class="fa fa-reply" aria-hidden="true"></i>Back</button>
            </Link>
                </Form><br/><br/><br/><br/>
                </div>
                <br/><br/>
        </div>
        
       );
  

}

export default Edit;



