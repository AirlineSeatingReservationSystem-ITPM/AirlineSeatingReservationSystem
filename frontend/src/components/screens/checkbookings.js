import React, {Component} from 'react';
import axios from 'axios';
// import content from '../../../SysBackend/models/content';
// import content from '../../../SysBackend/models/content';

export default class checkbookings extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      bookingform:[]
    };


  }

  componentDidMount(){
    this.retrieveBookings();
  }

  retrieveBookings(){
    axios.get("http://localhost:8080/bookingform/").then (res =>{

    if(res.data.success){

      this.setState({
        bookingform:res.data.existingBookings
      });

      console.log(this.state.bookingform)


    }
  

    })
  }  

  onDelete = (id)=>{

    axios.delete(`http://localhost:8080/bookingform/delete//${id}`).then((res) =>{
      alert("Question Deleted");
      this.retrieveBookings();
    })
  }
  // Search Data


  // filterData(bookingform, SearchQry){
  //   const result = bookingform.filter((contents)=>
  //   bookingform.TravelClass.toLowerCase().includes(SearchQry) ||
  //   bookingform.DepartingAirport.toLowerCase().includes(SearchQry) ||
  //   bookingform.DestinationAirport.toLowerCase().includes(SearchQry)

    
  //   )
  //   this.setState({bookingform:result})

  // }
  // Searchfunc = (e) =>{
  //   const SearchQry = e.currentTarget.value;
    
  //   axios.get("/bookingform").then(res =>{
  //     if(res.data.success){

  //       this.filterData(res.data.existingBookings,SearchQry)

  //     }
  //   })
    
  // }

  render (){
    return (
        <div>
            
        <br></br><br></br><br></br> <br></br><br></br><br></br>
       <center> <h2>Please Fill The Search Form</h2></center>
       <br></br>
        <div className="container" style={{ height: "50%",  width: "50%", backgroundColor: "#4287f5" }} >
            <br></br>
            
<form>
  <div class="form-group">
    <label for="formGroupExampleInput">Booking Reference Number</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ex: FC398934"/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Booked Date</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ex: 2021/05/21"/>
    <button type="search" class="btn btn-primary">Search</button>
    
    <br></br>
    
  </div>
  
</form>



      </div >
      
      </div>
    )
  }



}