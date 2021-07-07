import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Navbar from './Navbar';
import { Button } from 'react-bootstrap';


class ViewConference extends Component {

    constructor(props){
        super(props);
        this.getAll = this.getAll.bind(this);
        this.state =  {
           conference : []
        }
       
    }

    async componentDidMount(){
        axios.get("http://localhost:5000/api/getconference/").then((res) => {
            this.setState({conference : res.data})
            console.log(res.data);
        })
    }

    
    
    

    getAll(){
        return this.state.conference.map((conference) => {
           return(
               
               <tr key={conference._id}>
                   <td>{conference.name}</td>
                   <td>{conference.date}</td>
                   <td>{conference.topic}</td>
                   <td>{conference.description}</td>
                   <td>{conference.venue}</td>
                   <td>{conference.type}</td>
                   <td>{conference.conductor}</td>
                   <td><Button variant="success">Approved</Button></td>
                   <td><Button variant="danger">Rejected</Button></td>
               </tr>
           )
       })
   }
f

  
    render() {
        return (
          
            <div>  
                <Navbar/>
                <br></br>
               <h4 style={{textAlign:"center"}}>View Conference Details</h4>
                <br></br>
                <Table striped bordered hover variant="dark" >
                    
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Topic</th>
                            <th>Description</th>
                            <th>venue</th>
                            <th>Type</th>
                            <th>Conductor</th>
                           
                        </tr>
                        
                    </thead>
                    <tbody>
                    {this.getAll()}
                    </tbody>
                </Table>
            </div>
        )
    }
   
}

export default ViewConference