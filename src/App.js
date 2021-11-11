import logo from './logo.svg';
import './App.css';
import Authprovider from './context/Authprovider';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';

import Register from './config/pages/Login/Register';

import Privateroute from './config/pages/Login/Privateroute/Privateroute';

import Addservice from './config/pages/addservice/Addservice';

import Dashboard from './config/pages/dashboard/Dashboard';
import Homemain from './config/pages/home/Homemain';
import Exploremain from './config/pages/explore/Exploremain';

import Adminroute from './config/pages/Login/Adminroute';
import Adminmain from './config/pages/admin/Adminmain';
import Manageordermain from './config/pages/managerorder/Manageordermain';
import Manageproductmain from './config/pages/manageproduct/Manageproductmain';

import Buymain from './config/pages/buyproduct/Buymain';

import Loginhome from './config/pages/Login/Loginhome';
import Registrationhome from './config/pages/Login/Registrationhome';
import Notfound from './config/pages/notfound/Notfound';
import Myorder from './config/pages/dashboard/Myorder';
import Pay from './config/pages/dashboard/Pay';

function App() {
  return (
      
<Authprovider>
<BrowserRouter>

<Switch>
<Route exact path='/'>
<Homemain></Homemain>
</Route>
<Route path='/home'>
<Homemain></Homemain>
</Route>

<Privateroute path="/buy/:id">
<Buymain></Buymain>
</Privateroute>
<Route exact path="/explore">
<Exploremain></Exploremain>
</Route>
<Privateroute path="/dashboard">
<Dashboard></Dashboard>
</Privateroute>

<Route exact path="/register">
<Registrationhome></Registrationhome>
</Route>
<Route exact path="/login">
<Loginhome></Loginhome>
</Route>
<Adminroute path="/addservice">
<Addservice></Addservice>
</Adminroute>
<Adminroute  path="/makeadmin">
<Adminmain></Adminmain>
</Adminroute>
<Adminroute path="/manageorder">
<Manageordermain></Manageordermain>
</Adminroute>
<Adminroute path="/manageproduct">
<Manageproductmain></Manageproductmain>
</Adminroute>
<Route  path="*">
<Notfound></Notfound>

</Route>
</Switch>

</BrowserRouter>

</Authprovider>

  );
}

export default App;
