import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';




export default class CreateContent extends Component {
  

  constructor(props){
    super(props);
    this.state={
      
      TravelClass:"",
      DepartingAirport:"",
      DestinationAirport:"",
      Adults:"",
      Infants:"",
      Childrens:"",
      DepartDate:"",
      ReturnDate:""
    
   
     
         


    }
    
    

  }

  

  handleInputChange = (e) =>{

    const {name,value} = e.target;

    this.setState({

      ...this.state,
      [name]:value

    })

  }

  onSubmit = (e) =>{

    e.preventDefault();
    const isValid = this.validate();

        if(isValid){


        

    const {TravelClass,DepartingAirport,DestinationAirport,Adults,Infants,Childrens,DepartDate,ReturnDate}  = this.state;

    const data ={
      
      TravelClass:TravelClass,
      DepartingAirport:DepartingAirport,
      DestinationAirport:DestinationAirport,
      Adults:Adults,
      Infants:Infants,
      Childrens:Childrens,
      DepartDate:DepartDate,
      ReturnDate:ReturnDate

    }

    console.log(data)

    axios.post("http://localhost:8080/bookingform/add",data).then((res) =>{

      if(res.data.success){
        this.setState(
          {
          TravelClass:"",
          DepartingAirport:"",
          DestinationAirport:"",
          Adults:"",
          Infants:"",
          Childrens:"", 
          DepartDate:"",
          ReturnDate:""
          }
          
        )
        
        
      }
      
    


    })
    

   
    
    
   

  }

  }

  handleSubmit = event => {

    event.preventDefault();
    const isValid = this.validate();
    if(isValid) {
      console.log(this.state);
    }

    Swal.fire({

      position: "top-end",

      icon: "success",

      title: "Card Details added successfully",

      showConfirmButton: false,

      timer: 1500,

    });

  };



  render(){

    return(
      
      
      <div  className="container" style={{ height: "50%",  width: "54%", backgroundColor: "#4287f5" }} >
          {/* <div>
  <img src ="/images/exm2.png" alt=""/>
</div > */}
<center>





  
<h1 style={{ color: 'white' }}>Booking Section</h1>
    <br></br>
    </center>
    <div class="form-group"> <label for="form_need">Please Specify The Travel Class*</label> 
      <form class="cls1">

      <select style={{width:700}} class="form-select" aria-label="Default select example" placeholder="name@example.com" value={this.state.ExamName} name="ExamName" onChange= {this.handleInputChange}>
        
      <option selected>Select The Preffered Travel Class</option>
        <option value="First Class">First Class</option>
        <option value="Business Class">Business Class</option>
        <option value="Economy Class">Economy Class</option>
      </select>
      <br/>
      </form>

     

      <div className="form-group">

                <h6>Destination Airport:</h6>

                <input

                  type="text"

                  name="DestinationAirport"

                  className="form-control"

                  onChange={this.handleInputChange}

                  value={this.state.DestinationAirport}

                />

              </div>

              <div className="form-group">

              <h6>Departing Airport:</h6>

              <input

                type="text"

                name="DepartingAirport"

                className="form-control"

                onChange={this.handleInputChange}

                value={this.state.DepartingAirport}

              />

              </div>

              <div className="form-group">

                <h6>Adults:</h6>

                <input

                  type="text"

                  name="Adults"

                  className="form-control"

                  onChange={this.handleInputChange}

                  value={this.state.Adults}

                />

              </div>

    
     
     

              <div className="form-group">

              <h6>Infants:</h6>

              <input

                type="text"

                name="Infants"

                className="form-control"

                onChange={this.handleInputChange}

                value={this.state.Infants}

              />

              </div>

              <div className="form-group">

                <h6>Childrens:</h6>

                <input

                  type="text"

                  name="Childrens"

                  className="form-control"

                  onChange={this.handleInputChange}

                  value={this.state.Childrens}

                />

                </div>

                <div className="form-group">

              <h6>Depart Date:</h6>

              <input

                type="text"

                name="DepartDate"

                className="form-control"

                onChange={this.handleInputChange}

                value={this.state.DepartDate}

              />

              </div>
              <div className="form-group">

                <h6>Return Date:</h6>

                <input

                  type="text"

                  name="ReturnDate"

                  className="form-control"

                  onChange={this.handleInputChange}

                  value={this.state.ReturnDate}

                />

              </div>
              <div class="cls1">
        <br></br>
        <a class="btn btn-primary" href="/successPage" role="button">Book Now</a>
        
        </div>
            


     
        


    

      <br></br>


              
              </div>
              </div>
             
     
    
      )
  }
}