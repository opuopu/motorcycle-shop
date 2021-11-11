import React,{createContext} from 'react'
import Usefirebase from '../hooks/Usefirebase';


export   const authcontext  =  createContext()

const Authprovider = ({children}) => {

    const firebase = Usefirebase()
    return (
       <authcontext.Provider value={firebase}>
{children}
       </authcontext.Provider>
    );
};
export default Authprovider
