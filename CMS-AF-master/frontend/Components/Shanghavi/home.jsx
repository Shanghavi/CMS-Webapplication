import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const Home = (props) => { 
    
    return(
     <div>
             <Navbar/>
             <br></br>
          <div style={{textAlign:"right"}}>
             <button onClick = {( ) => {
                         localStorage.clear();
                         props.history.push('/login');
                         }} className = "btn btn-secondary">Logout</button>
         </div>    
  <br></br>

    <div >
      <table style={{ textAlign :"center"}}>
        <td > 
    <tr ><Card.Body style={{ width: '30rem' }}>
      <Card.Text >
      <Link to="/template"><button className = "btn btn-secondary" type="submit" style={{ width: '18rem'}} >Add Template Details</button></Link> 
      </Card.Text>
    </Card.Body> 
    </tr>
  <tr>
    
    <Card.Body >
      <Card.Text>
      <Link to="/viewtemplate"><button className = "btn btn-secondary" size="lg" type="submit" style={{ width: '18rem' }}>View Template Details</button></Link>  
      </Card.Text>
    </Card.Body>
   </tr>
   <tr>
    <Card.Body >
      <Card.Text>
      <Link to="/viewconference"><button className = "btn btn-secondary" size="lg" type="submit" style={{ width: '18rem' }}>View Conference Details</button> </Link> 
      </Card.Text>
    </Card.Body>
    </tr>
     </td>
     <td>
       <tr>
    <Card.Body >
      <Card.Text>
      <Link to="/viewuser"><button className = "btn btn-secondary" size="lg" type="submit" style={{ width: '18rem' }}> View User Details</button> </Link> 
      </Card.Text>
    </Card.Body>
</tr>
<tr>
    <Card.Body >
      <Card.Text>
      <Link to="/viewresearch"><button className = "btn btn-secondary" size="lg" type="submit" style={{ width: '18rem' }}>View Research Paper Details</button> </Link> 
      </Card.Text>
    </Card.Body>
 </tr>   
 <tr>
    <Card.Body >
      <Card.Text>
      <Link to="/viewworkshop"><button className = "btn btn-secondary" size="lg" type="submit" style={{ width: '18rem' }}>View Workshop Details</button> </Link> 
      </Card.Text>
    </Card.Body>
    </tr>
    </td>
    </table>
</div>
        
        </div>
    )

    }

export default Home;
