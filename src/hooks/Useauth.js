
import { useContext } from "react"
import { authcontext } from "../context/Authprovider"



const Useauth = () =>{
    return  useContext(authcontext)
 }
 
 export default Useauth