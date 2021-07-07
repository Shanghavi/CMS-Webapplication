import React, { Component } from 'react';
import axios from "axios";
import Navbar from './Navbar';
import { toast } from 'react-toastify';


class CreateTemplate extends Component {

    constructor(props){

        super();
        this.state = {
            templatename: "",
            selectedFile: null, 
           
        }
        this.onFileChange = this.onFileChange.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
        this.onChangeTemplatename = this.onChangeTemplatename.bind(this);
      
    }

    onChangeTemplatename(e) {
        this.setState({ templatename: e.target.value})
    }

     onFileChange = (event) => {
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
    };

    // On file upload (click the upload button)
     onFileUpload = () => {
        const formdata = new FormData();
        formdata.append("file", this.state.selectedFile);
        formdata.append("templatename", this.state.templatename);
        console.log(this.state.selectedFile);
        axios.post("http://localhost:5000/api/template", formdata)
        .then((res) => {console.log(res)
        toast.success("Template details added successfully") ; 
        
        }).catch(err => {
            toast.error(err.response.data);
        })
    };
   
    
   
      
      render() {
        return ( 
            <div>
            <Navbar/>
            <div className="container" style={{width:"500px"}}>
            <br></br>
            <br></br>
            <h3 style={{textAlign:"center"}}>Create New Template</h3>
                <div className="form-group"> 
                        <label>Template name: </label>
                        <input
                         type="text" required
                         className="form-control"
                         value={this.state.templatename}
                         onChange={this.onChangeTemplatename}
                       />
                </div>
                <br></br>
               

                <div className="form-group">
                    <input type="file" onChange={this.onFileChange} />
                    <br></br>
                    <br></br>
                    <button onClick={this.onFileUpload} className="btn btn-info">Submit</button>
                </div>
            </div>
        </div>
          
        );
      
    }
}
 
export default CreateTemplate;