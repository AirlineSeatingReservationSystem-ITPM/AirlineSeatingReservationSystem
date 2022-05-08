import React, {cloneElement, Component} from 'react';
import axios from 'axios';


export default class bookinglist extends Component {
  constructor(props){
    super(props);

    this.state={
        bookings:{}

    };

  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/bookingform/${id}`).then((res) =>{

      if(res.data.success){

        this.setState({

          bookings:res.data.bookings

        });

        console.log(this.state.bookings);

      }

    });
  }

  render(){

    const {TravelClass,DepartingAirport,DestinationAirport,Adults,Infants,Childrens,DepartDate,ReturnDate} = this.state.bookings;


    return (

      
      
        <div style={{marginTop:'100px'}}>

          <div>
            <center>
            <h2>Added Contents</h2>
            </center>
            <br></br>
          </div>
    
          <h4>{TravelClass}</h4>
         
          <hr/>
          <dl class="row">
            <br></br>
            <br></br>
            <dt className="col-sm-3">Exam Name - </dt>
            <dd className="col-sm-9">{TravelClass}</dd>

            <br></br>
            <br></br>

            <dt className="col-sm-3">Lecture Title </dt>
            <dd className="col-sm-9">{DepartingAirport}</dd>

            <br></br>
            <br></br>

            <dt className="col-sm-3">LectureSubtitile - </dt>
            <br></br>
            <br></br>
            <dd className="col-sm-9">{DestinationAirport }</dd>

           

            <dt className="col-sm-3">Lecture Description - </dt>
            <dd className="col-sm-9">{Adults}</dd>

            <br></br>
            <br></br>

            <dt className="col-sm-3">Meeting Links - </dt>
            <dd className="col-sm-9">{Infants}</dd>

            <br></br>
            <br></br>

           
            <dt className="col-sm-3">Reference Link - </dt>
            <dd className="col-sm-9">{Childrens}</dd>

            <br></br>
            <br></br>

           
            <dt className="col-sm-3">Reference Link - </dt>
            <dd className="col-sm-9">{DepartDate}</dd>

            <br></br>
            <br></br>

           
            <dt className="col-sm-3">Reference Link - </dt>
            <dd className="col-sm-9">{ReturnDate}</dd>
            
            </dl>



          
        </div>
     

      
    )
  }
}