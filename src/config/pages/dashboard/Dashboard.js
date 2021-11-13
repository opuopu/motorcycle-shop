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
import Adminroute from '../Login/Adminroute';
import Manageordermain from '../managerorder/Manageordermain'
import Manageproductmain from '../manageproduct/Manageproductmain';
import Makeadmin from '../admin/Makeadmin';
import Addservice from '../addservice/Addservice';
import Dashome from './Dashome';
import Manageproduct from '../manageproduct/Manageproduct';
import Manageorder from '../managerorder/Manageorder';
  
const Dashboard = () => {
    const {Signout,admin} = Useauth()
    let { path, url } = useRouteMatch();
    return (
        <div>
               <h1 className="dash text-center bg-info">User Dashboard</h1>
    <Container>
                <div className="">
             
                    <div className="row">
                        <div className="col-md-5">
                            <div className=" sidebar shadow-sm">
           
                          
                            { admin? <Link to={`${url}/manageorder`}> <h5 className="btn">manageorder</h5></Link> : <Link to={`${url}/myorder`}> <h5 className="btn  ">my order</h5></Link>} <br />
                          { admin ? <Link to={`${url}/manageproduct`}> <h5 className="btn">manageproduct</h5></Link> :  <Link to={`${url}/pay`}> <h5 className="btn   btns  ">pay now</h5></Link>} <br />
                           { admin?  <Link to={`${url}/makeadmin`}> <h5 className="btn ">make admin</h5></Link> :  <Link to={`${url}/review`}> <h5 className="btn ">review now</h5></Link>}  <br />
                                  {admin ? <Link to={`${url}/addproduct`}> <h5 className="btn ">add product</h5></Link> : ' '} <br />

                            <Link to="/home"> <h5 className="btn btns    ">back home</h5></Link> <br />


                            <button  className=" btnm my-2 btn-danger" onClick={Signout}>log out</button> 
                               </div>
                        </div>

    <div className="col-md-7 m-0 p-0">
    <Switch>
        <Route exact path={`${path}/`}>
        <Dashome></Dashome>
        </Route>
        <Privateroute path={`${path}/myOrder`}>
            <Myorder></Myorder>
      </Privateroute>
        <Privateroute path={`${path}/pay`}>
       <Pay></Pay>
      </Privateroute>
        <Privateroute path={`${path}/review`}>
<Review></Review>
      </Privateroute>
      <Adminroute path={`${path}/makeadmin`} >
             <Makeadmin></Makeadmin>  
      </Adminroute>
      <Adminroute path={`${path}/manageproduct`} >
          <Manageproduct></Manageproduct>
      </Adminroute>
      <Adminroute path={`${path}/addproduct`} >
   <Addservice></Addservice>
      </Adminroute>
      <Adminroute path={`${path}/manageorder`} >
   <Manageorder></Manageorder>
      </Adminroute>
      </Switch>
                        </div>
    
                       
                    </div>
                </div>
                </Container>
        </div>
    );
};

export default Dashboard;