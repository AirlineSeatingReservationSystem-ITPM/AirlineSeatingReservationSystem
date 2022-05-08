import React, {Component} from 'react';
import axios from 'axios';
// import content from '../../../SysBackend/models/content';
// import content from '../../../SysBackend/models/content';

export default class specialbookings extends Component {
  
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
        <div className="container" style={{ height: "50%",  width: "50%", backgroundColor: "#4287f5" }} >
           <center><h1>Special Bookings</h1></center>
        <h4>Regardless of the type, tickets contain the following information:[1]

The passenger's name
The issuing airline
A ticket number, including the airline's three-digit code[2] at the start of the number
The cities between which the ticket is valid for travel
Flight for which the ticket is valid (unless the ticket is "open")
Baggage allowance. (Not always visible on a printout but recorded electronically for the airline)
Fare. (Not always visible on a printout but recorded electronically for the airline)
Taxes. (Not always visible on a printout but recorded electronically for the airline)
The "Fare Basis", an alphabetic or alphanumeric code that identifies the fare
Restrictions on changes and refunds. (Not always shown in detail, but referred to)
Dates for which the ticket is valid
"Form of payment", i.e. details of how the ticket was paid for, which will in turn affect how it would be refunded.
The exchange rate used to calculate any international parts of the fare and tax
A "Fare Construction" or "Linear" showing the breakdown of the total fare
Times on airline tickets are generally for the local time zone where the flight will be at that moment.

A ticket is generally only good on the airline for which it was purchased. However, an airline can endorse the ticket, so that it may be accepted by other airlines, sometimes on a standby basis or with a confirmed seat. Usually the ticket is for a specific flight. It is also possible to purchase an 'open' ticket, which allows travel on any flight between the destinations listed on the ticket. The cost of this is greater than a ticket for a specific flight. Some tickets are refundable. However, the lower cost tickets are usually not refundable and may carry many additional restrictions.

The carrier (airline) is represented by a standardized two-character alphanumeric code. In the example above, Thai Airways is TG. The departure and destination cities are represented by International Air Transport Association airport codes. In the example above, Munich is MUC and Bangkok is BKK. The International Air Transport Association is the standard setting organization.

Only one passenger can use a ticket. If multiple passengers are traveling together, the tickets are linked together by the same record locator or reservation number, which are assigned, if the tickets were purchased at the same time. If not, most airlines can cross-reference the tickets together in their reservation systems. This allows all members in a party to be processed in a group, allowing seat assignments to be together (if available at the time of the assignment).</h4>
      </div>
    )
  }



}