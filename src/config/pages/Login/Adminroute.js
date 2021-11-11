import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router';
import { Route } from 'react-router';
import Useauth from '../../../hooks/Useauth';


const Adminroute = ({children,...rest}) => {
  const history = useHistory()
    const {user,isLoading,admin} = Useauth()

  
        return (
            <div className="private-main">
    {
        !admin  ?  <div className="py-5 my-5"><Spinner className="text-center m-auto d-block "  animation="border" variant="success" /> 
       <h3 className="text-center py-2 text-primary">loading............</h3>
      </div>  :
    
    
          <Route
          
          {...rest}
          render={({ location }) =>
         admin ? (
                 children
               ) : (
                 <Redirect
                   to={{
                     pathname: "/",
                     state: { from: location }
                   }}
                 />
               )
             }
          >
          
          </Route>
    }
          </div>
    );
};

export default Adminroute;