
import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class ViewTemplate extends Component {

    constructor(props){
        super(props);
        this.getAll = this.getAll.bind(this);
        this.state =  {
            templates : []
        }
        this.deleteTemplate = this.deleteTemplate.bind(this);
    }

    async componentDidMount(){
        axios.get("http://localhost:5000/api/").then((res) => {
            this.setState({templates : res.data})
            console.log(res.data);
        })
    }

    deleteTemplate(id) {
        axios.delete("http://localhost:5000/api/" + id).then((res) => {
          console.log(res.data);

          
        })
        this.setState({

            templates: this.state.templates.filter((el) => el._id !== id),
      
          });
    }
    

    getAll(){
        return this.state.templates.map((file) => {
           return(
               
               <tr key={file._id}>
                   <td>{file.templatename}</td>
                   <td>{<a href={"http://localhost:5000/" + file.filePath} target="_blank" >{file.fileName}</a>}</td>
                   <td><Button onClick={() => this.deleteTemplate(file._id)} variant="info">Delete</Button></td>
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
               <h4 style={{textAlign:"center"}}>Templates Details</h4>
                <br></br>
                <Table striped bordered hover variant="dark" >
                    
                    <thead>
                        <tr>
                            <th>Template Name</th>
                            <th>Templates</th>
                            <th>Delete</th>
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

export default ViewTemplate