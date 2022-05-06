//flighs report
import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core//Paper";
import axios from "axios";
import jsPDF from "jspdf";
//import "./Report.css";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

export default class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ReportData: [],
    };
  }
  printDocument() {
    const input = document.getElementById("pdfdiv");
    html2canvas(input).then((canvas) => {
      var img = new Image();
      const doc = new jsPDF("p", "mm", "a4");
      doc.setTextColor(255, 0, 0);
      doc.setFontSize(28);
      doc.setTextColor(0, 0, 255);
      doc.setFontSize(16);
      doc.text(10, 70, "Flight Scheduling Management");
      doc.setTextColor(0, 255, 0);
      doc.setFontSize(12);
      doc.text(145, 85, "Signature :");
      //Date
      var m_names = new Array(
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      );

      var today = new Date();
      var seconds = today.getSeconds();
      var minutes = today.getMinutes();
      var hours = today.getHours();
      var curr_date = today.getDate();
      var curr_month = today.getMonth();
      var curr_year = today.getFullYear();

      today =
        m_names[curr_month] +
        " " +
        curr_date +
        "/ " +
        curr_year +
        " | " +
        hours +
        "h : " +
        minutes +
        "min : " +
        seconds +
        "sec";
      var newdat = today;
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(130, 93, newdat);
      var imgHeight = (canvas.height * 200) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
      const date = Date().split(" ");
      // we use a date string to generate our filename.
      const dateStr =
        "FlightSchedulingManagement_" +
        date[0] +
        date[1] +
        date[2] +
        date[3] +
        date[4];
      doc.save(`report_${dateStr}.pdf`);
    });
  }

  componentDidMount() {
    axios.get("http://localhost:8085/flights").then((response) => {
      console.log(response?.data);
      this.setState({
        ReportData: response?.data,
      });
    });
  }
  render() {
    console.log(this.state?.FlightData);
    return (
      <div>
        <TableContainer id="pdfdiv" className="txt" component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Flight</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Departure Time</TableCell>
                <TableCell align="right">Assign Planetype</TableCell>
                <TableCell align="right">Capacity</TableCell>
                <TableCell align="right">Seats Reserved</TableCell>
                <TableCell align="right">Available Classes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state?.ReportData?.map((p, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="right">{p.id}</TableCell>
                    <TableCell align="right">{p.flight}</TableCell>
                    <TableCell align="right">{p.date}</TableCell>
                     
                    <TableCell align="right">{p.sheduleddeparturetime}</TableCell>
                    <TableCell align="right">{p.assignplanetype}</TableCell>
                    <TableCell align="right">{p.capacity}</TableCell>
                    <TableCell align="right">{p.seatsreserved}</TableCell>
                    <TableCell align="right">{p.availableclasses}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>{" "}
        <br />
        <br />
        <center>
          <div>
            <button
              className="info__button"
              onClick={this.printDocument}
              variant="contained"
              color="primary"
            >
              <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF
            </button>
            <br />

            <Link to={`/staff-flightM-Home`}>
              <button
                variant="contained"
                color="primary"
                style={{ float: "right", background: "lightgreen" }}
              >
                <i class="fa fa-reply" aria-hidden="true"></i> Go Back
              </button>
            </Link>
          </div>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <br />
          <span style={{ color: "white" }}>{"Copyright © "}</span>

          <span style={{ color: "lightcoral" }}>Sky Airways</span>

          <span style={{ color: "white" }}>
            {" " + new Date().getFullYear() + " . "}
          </span>
        </center>
      </div>
    );
  }
}