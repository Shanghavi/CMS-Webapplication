import React, { Component } from 'react';
import Register from './Components/Shanghavi/register'
import Login from './Components/Shanghavi/login'
import Home from './Components/Shanghavi/home';
import Navbar from './Components/Shanghavi/Navbar';
import { Switch , Route } from 'react-router-dom';
import ProtectedRouter from './Components/Shanghavi/protected';
import CreateTemplate from "./Components/Shanghavi/CreateTemplate";
import ViewTemplate from './Components/Shanghavi/ViewTemplate';
import ViewConference from './Components/Shanghavi/ViewConference';
import ViewUserDetails from './Components/Shanghavi/ViewUserDetails';
import ViewResearch from './Components/Shanghavi/ViewResearch';
import ViewWorkshop from './Components/Shanghavi/ViewWorkshop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DownloadPage from './Components/Shanghavi/DownloadPage';

const App = () => {

    return(
        <div>
        
          <Switch>
              <Route exact path = "/" component = {Login}/>
              <Route exact path = "/register" component = {Register}/>
              <Route exact path="/login" component = {Login}/>
              <Route exact path="/home" component = {Home}/>
              <Route exact path="/template" component = {CreateTemplate}/>
              <Route exact path="/viewtemplate" component = {ViewTemplate}/>
              <Route exact path="/viewconference" component = {ViewConference}/>
              <Route exact path="/viewuser" component = {ViewUserDetails}/>
              <Route exact path="/viewresearch" component = {ViewResearch}/>
              <Route exact path="/viewworkshop" component = {ViewWorkshop}/>
              <Route exact path="/downloadtemplate" component = {DownloadPage}/>
              <ProtectedRouter exact path= "/Navbar" component = {Navbar} />
          </Switch>
          <ToastContainer/>
        </div>
  )
}

export default App;
