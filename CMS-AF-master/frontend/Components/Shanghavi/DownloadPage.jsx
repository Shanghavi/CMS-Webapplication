import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Table from 'react-bootstrap/Table'


class DownloadPage extends Component {

    constructor(props){
        super(props);
        this.getAll = this.getAll.bind(this);
        this.state =  {
            templates : []
        }
    }

    async componentDidMount(){
        axios.get("http://localhost:5000/api/").then((res) => {
            this.setState({templates : res.data})
            console.log(res.data);
        })
    }

    getAll(){
        return this.state.templates.map((file) => {
           return(
               <tr key={file._id}>
                   <td>{file.templatename}</td>
                   <td>{<a href={"http://localhost:5000/" + file.filePath} target="_blank" >{file.fileName}</a>}</td>
                   
               </tr>
           )
       })
   }
    render() {
        return (
            <div>
               <h4>Download Templates</h4>
                <br></br>
                <container>
                <Table striped bordered hover variant="light" >
                    
                    <thead>
                        <tr>
                            <th>Template Name</th>
                            <th>Templates</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.getAll()}
                    </tbody>
                </Table>
                </container>
            </div>
        )
    }
}

export default DownloadPage