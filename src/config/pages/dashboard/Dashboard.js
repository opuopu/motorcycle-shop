import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Useauth from '../../../hooks/Useauth';
import Myorder from './Myorder';
import Pay from './Pay';
import Review from './Review';
import './dashboard.css'
import Privateroute from '../Login/Privateroute/Privateroute';
  
const Dashboard = () => {
    const {Signout} = Useauth()
    let { path, url } = useRouteMatch();
    return (
        <div>
               <h1 className="dash text-center bg-info">User Dashboard</h1>
      <Container>
                <div className="grid">
             
                    <div className="row align-items-center  ">
                        <div className="col-md-5">
                            <div className="sidebar shadow-sm">
                            <Link to={`${url}`}> <button className="btn my-2 btn-primary">my order</button></Link> <br />
                            <Link to={`${url}/pay`}> <button className="btn my-2   btns   btn-success">pay now</button></Link> <br />
                            <Link to={`${url}/review`}> <button className="btn my-2 btn-info">review now</button></Link> <br />
                            <Link to="/home"> <button className="btn btns   my-2 btn-warning">back to home</button></Link> <br />
                            <button  className="btn btns  my-2 btn-danger" onClick={Signout}>log out</button> 
                               </div>
                        </div>
                        <div className="col-md-7">
                        <Switch>
        <Privateroute exact path={path}>
               <Myorder></Myorder>
        </Privateroute>
        <Privateroute path={`${path}/pay`}>
         <Pay></Pay>
        </Privateroute>
        <Privateroute path={`${path}/review`}>
     <Review></Review>
        </Privateroute>
      </Switch>
                        </div>
                    </div>
                </div>
                </Container>
        </div>
    );
};

export default Dashboard;