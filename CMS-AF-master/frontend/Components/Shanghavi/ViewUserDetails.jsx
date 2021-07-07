import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Navbar from './Navbar';


class ViewUser extends Component {

    constructor(props){
        super(props);
        this.getAll = this.getAll.bind(this);
        this.state =  {
           customer : []
        }
       
    }

    async componentDidMount(){
        axios.get("http://localhost:5000/api/user/getuser/").then((res) => {
            this.setState({customer : res.data})
            console.log(res.data);
        })
    }

    
    
    

    getAll(){
        return this.state.customer.map((customer) => {
           return(
               
               <tr key={customer._id}>
                   <td>{customer.email}</td>
                   <td>{customer.name}</td>
                   <td>{customer.phone}</td>
                   <td>{customer.city}</td>
                   <td>{customer.state}</td>
                   <td>{customer.country}</td>
                   <td>{customer.qualification}</td>
                   
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
               <h4 style={{textAlign:"center"}}>View User Details</h4>
                <br></br>
                <Table striped bordered hover variant="dark" >
                    
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Qualification</th>
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

export default ViewUser