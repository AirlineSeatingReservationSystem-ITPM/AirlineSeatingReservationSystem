import React, { Component } from 'react';
import { Link} from 'react-router-dom';
//import Button from 'react-bootstrap/Button';
//import { Button } from 'react-bootstrap';
import axios from 'axios';
import Table from 'react-bootstrap/esm/Table';


export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:8085/flights/delete/' + this.props.obj._id)
            .then((res) => {
                alert('Shedule successfully deleted!')
            }).catch((error) => {
               alert(error)
            })
            
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.flight}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.destination}</td>
                <td>{this.props.obj.sheduleddeparturetime}</td>
                <td>{this.props.obj.assignplanetype}</td>
                <td>{this.props.obj.capacity}</td>
                <td>{this.props.obj.seatsreserved }</td>
                <td>{this.props.obj.availableclasses }</td>

                {/* <td><img src ={"images/" + this.props.obj.photo} style={{width:"100px" , height:"100px"}} 
                className = "border border-danger rounded-circle"
                /></td> */}
                <td style={{width:"250px"}}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div> 
                    <Link className="edit-link" to={`/edit-flightM/${this.props.obj._id}`}>
                        <button size="sm"  variant="warning" className="btn btn-success"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                    </Link >
                    </div>&nbsp;&nbsp;
                     
                    <div> 
                        <button size="sm" onClick={this.deleteStudent} variant="danger" className="btn btn-danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Delete</button>
                        <a href="/edit-flightM"></a></div>&nbsp;&nbsp;


                        <div>
              <a href="/edit-flightM">
                <button type="submit" size="sm" className="btn btn-primary">
                  <i class="fa fa-refresh" aria-hidden="true"></i> Refresh
                </button>
              </a>
            </div>
            </div>
                    
                </td>
            </tr>
        );
    }
}