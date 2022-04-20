import React, { Component } from 'react'  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
import axios from 'axios';  
import jsPDF from 'jspdf';  
import "./Chatbotflight.css" 
import html2canvas from 'html2canvas';  
import path from "path"
import { Link } from 'react-router-dom';
  
export default class Flights extends Component {  
  constructor(props) {  
    super(props)  
    this.state = {  
      FlightData: []  
  
    }  
  }  
  printDocument() {  
    const input = document.getElementById('pdfdiv');  
    html2canvas(input)  
      .then((canvas) => {
        var img = new Image();
        img.src = path.resolve('airplane.png');

        var img1 = new Image();
        img1.src = path.resolve('cms.png');
         
        const doc = new jsPDF('p', 'mm', 'a4')  
        doc.addImage(img, 'JPEG', 120, 20 , 30 , 30);
        doc.addImage(img1, 'JPEG', 80, 20 , 30 , 30); 
         
        doc.setTextColor(255 , 0 , 0)
        doc.setFontSize(28);
        doc.text(85, 10, 'Sky Airways')
        doc.setTextColor(0 , 0 , 255)
        doc.setFontSize(16);
        doc.text(10, 70, 'Flight Sheduling Management')
        doc.setTextColor(0 , 255 , 0)
        doc.setFontSize(12);
        doc.text(145, 85, 'Signature :')
        //Date
        var m_names = new Array("January", "February", "March", 
                          "April", "May", "June", "July",
                          "August", "September", 
                          "October", "November", "December");

        var today = new Date();
        var seconds = today.getSeconds();
        var minutes = today.getMinutes();
        var hours = today.getHours();
        var curr_date = today.getDate();
        var curr_month = today.getMonth();
        var curr_year = today.getFullYear();

        today = m_names[curr_month] + " " + curr_date + "/ " + curr_year + " | " + hours + "h : " + minutes + "min : " + seconds + "sec";
        var newdat = today;
        doc.setTextColor(0 , 0 , 0)
        doc.setFontSize(11);
        doc.text(130, 93, newdat); 
        var imgHeight = canvas.height * 200 / canvas.width;  
        const imgData = canvas.toDataURL('image/png');    
        doc.addImage(imgData, 'JPEG', 5 , 100, 200, imgHeight);  
        const date = Date().split(" ");
        // we use a date string to generate our filename.
        const dateStr = "FlightShedulingManagement_" + date[0] + date[1] + date[2] + date[3] + date[4];
        doc.save(`report_${dateStr}.pdf`);
      });  
  }  
  
  componentDidMount() {  
    axios.get('http://localhost:8070/flight').then(response => {  
      console.log(response.data);  
      this.setState({  
        FlightData: response.data  
      });  
    });  
  }  
  render() {  
    console.log(this.state.FlightData);  
    return (  
      <div>  
        <TableContainer id="pdfdiv" className="txt" component={Paper}>  
          <Table stickyHeader aria-label="sticky table">  
            <TableHead>  
              <TableRow>  
                <TableCell align="right">ID</TableCell>  
                <TableCell align="right">Flight</TableCell>  
                <TableCell align="right">Date</TableCell>  
                <TableCell align="right">Destination</TableCell>  
                <TableCell align="right">Sheduled Time</TableCell>  
                <TableCell align="right">Assign Plane Type</TableCell>
                <TableCell align="right">Capacity</TableCell>
                <TableCell align="right">Seats Reserved</TableCell>
                <TableCell align="right">Available Classes</TableCell>  
              </TableRow>  
            </TableHead>  
            <TableBody>  
              {  
                this.state.FlightData.map((p, index) => {  
                  return <TableRow key={index}>  
                    <TableCell align="right">{p.id}</TableCell>  
                    <TableCell align="right">{p.flight}</TableCell>  
                    <TableCell align="right">{p.date}</TableCell>  
                    <TableCell align="right">{p.destinaton}</TableCell>
                    <TableCell align="right">{p.sheduleddeparturetime}</TableCell>  
                    <TableCell align="right">{p.assignplanetype}</TableCell>  
                    <TableCell align="right">{p.capacity}</TableCell> 
                    <TableCell align="right">{p.seatsreserved}</TableCell>
                    <TableCell align="right">{p.availableclasses}</TableCell>
                        
                  </TableRow>  
                })  
              }  
            </TableBody>  
          </Table> 
         
        </TableContainer>  <br/><br/>
        <div>
            <button className="info__button" onClick={this.printDocument} variant="contained" color="primary" style={{marginLeft:"85px"}}>  
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF  
            </button>
            <Link to = "/edit-flightM">
                <button className="btn btn-danger"  variant="contained" color="primary" style={{float:"right"}}>  
                <i class="fa fa-reply" aria-hidden="true"></i> Go Back  
                </button>
            </Link>

        </div>

        <br/><br/><br/><br/><br/><br/>
  
      </div>  
  
    );  
  }  
}  
  
