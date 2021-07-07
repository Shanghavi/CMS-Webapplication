import React from "react";
import { Link } from "react-router-dom";


        const Navbar = (props) => {
        return (
            <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link className="navbar-brand">Welcome to Admin page</Link>
            <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li></li>
                        <li className="navbar-item">
                        <Link to="/Home" className="nav-link">Home</Link>
                        </li>
                        <br></br>
                        <li className="navbar-item">
                        <Link to="/template" className="nav-link">Add Template</Link>
                        </li>
                        <br></br>
                        <li className="navbar-item">
                        <Link to="/viewtemplate" className="nav-link">View Templates</Link>
                        </li>
                        <br></br>
                        
                        <br></br>
                        <li className="navbar-item">
                        <Link to="/viewconference" className="nav-link">View Conference</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/viewuser" className="nav-link">View Users</Link>
                        </li>
                       <li className="navbar-item">
                        <Link to="/viewresearch" className="nav-link">View Researchpapers</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/viewworkshop" className="nav-link">View Workshops</Link>
                        </li>
                    
                    </ul>
                </div>

            </nav>
           
                </div>
                
                
        )
  }
    

export default Navbar;