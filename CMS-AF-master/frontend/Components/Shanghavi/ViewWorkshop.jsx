import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Navbar from './Navbar'



class ViewResearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
 
    };
    this.getAll = this.getAll.bind(this);
  }

  async componentDidMount() {
    axios.get("http://localhost:5000/api/workshop/getworkshop").then((res) => {
        this.setState({ details: res.data.data});
      console.log(res.data.data);
      
    });
  }
  
  getAll() {
    return this.state.details.map((info) => {
      return (
        <tr key={info._id}>

          <td>{info.wtitle}</td>
          <td>
            <a href={"http://localhost:5000/" + info.filePath} target="_blank">
              {info.fileName}
            </a>
          </td>
          
          <td>{info.date}</td>
          <td>{info.venue}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
      <Navbar/>
      
      <br></br>
      <h4 style={{textAlign:"center"}}>View Workshop Details</h4>
      <br></br>
      <Table striped bordered hover variant="dark" >
          <thead>
            <tr>
           
              <th>Topic</th>
              <th>FileName</th>
             
              <th>Date</th>
            <  th>Venue</th>

            </tr>
          </thead>
          <tbody>{this.getAll()}</tbody>
        </Table>
      </div>
    );
  }
}

export default ViewResearch;
