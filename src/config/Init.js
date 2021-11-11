import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config";


const Initialize = () =>{
return  initializeApp(firebaseConfig);
}
export default Initialize