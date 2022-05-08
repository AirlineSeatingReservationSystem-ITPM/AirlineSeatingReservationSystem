import React, {Component} from 'react';
import axios from 'axios';
// import content from '../../../SysBackend/models/content';
// import content from '../../../SysBackend/models/content';

export default class bookingtable extends Component {
  
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
        <img src ="/images/exhome3.png" alt=""/>
       
        


      <div className="container">
      <br/>
 

        
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <h3 class="home-title">
  <span>Recently Added Bookings</span>
  <span> SkyLine Airways | Bookings</span>
</h3>
            
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.Searchfunc}>

            </input>
          </div>
        </div>
        <p>All Content</p>
        <table className = "table table-hover">

          
          <thead class="thead-dark">
          <tr class="bg-info">
              <th scope="col">Booking No</th>
              <th scope="col">Travel Class</th>
              <th scope="col">Destination Airport</th>
              {/* <th scope="col">Description</th> */}
              {/* <th scope="col">Meeting Link</th> */}
              <th scope="col">Depart Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.bookingform.map((bookingform, index) =>(
            <tr key = {index}>
                 <th scope="row">{index+1}</th>
                 <td class="table-light">
                     <a href= {`/bookinglist/${bookingform._id}`} style={{textDecoration:'none'}}>

                     
                     </a>
                     {bookingform.TravelClass}
                     
                     </td> 
                     <td >{bookingform.DestinationAirport}</td> 
                 {/* <td>{contents.LectureDescription}</td> 
                 <td>{contents.MeetingLink}</td>  */}
                 <td >{bookingform.DepartDate}</td> 
                  <td>
                    <a className = "btn btn-outline-success" href ={`/bookinglist/${bookingform._id}`}>
                    <i class="far fa-file-alt"></i>&nbsp;Edit
                       </a>
                       &nbsp;
                       <a className = "btn btn-outline-danger" href ="#" onClick={()=>this.onDelete(bookingform._id)}>
                       <i class="fas fa-eraser"></i>&nbsp;Delete
                       </a>

                  </td>


            </tr>

          ))}


          </tbody>
        </table>
        
        <button className="btn btn-primary"><a href="/bookingform" style={{textDecoration:'none', color:'white'}}>Book a New Flight</a></button>

       


    
      </div>
      </div>
    )
  }



}