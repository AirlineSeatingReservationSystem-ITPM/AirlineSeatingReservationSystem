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
        axios.delete('http://localhost:8085/RefundRequests/delete/' + this.props.obj._id)
            .then((res) => {
                alert('Your work done Successfully!!!!')
            }).catch((error) => {
               alert(error)
            })
            
    };

    
    


    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.passport}</td>
                <td>{this.props.obj.reference}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.description}</td>
               
                {/* <td><img src ={"images/" + this.props.obj.photo} style={{width:"100px" , height:"100px"}} 
                className = "border border-danger rounded-circle"
                /></td> */}
                <td style={{width:"250px"}}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div> 
                    {/* <Link className="edit-link" to={`/edit-flightM/${this.props.obj._id}`}>
                        <button size="sm"  variant="warning" className="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                    </Link > */}
                    </div>&nbsp;&nbsp;
                     
                    <div> 
                        <button size="sm" onClick={this.deleteStudent} variant="check" className="btn btn-warning"><i class="fa fa-check" aria-hidden="true" ></i> Approve</button>
                        <a href="/refundrequest-paymentM"></a></div>&nbsp;&nbsp;

                        <div> 
                        <button size="sm" onClick={this.deleteStudent} variant="danger" className="btn btn-danger"><i class="fa fa-window-close" aria-hidden="true" ></i> Decline</button>
                        <a href="/refundrequest-paymentM"></a></div>&nbsp;&nbsp;

                        <div>
                    
                    
              <a href="/RefundRequestsview">
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