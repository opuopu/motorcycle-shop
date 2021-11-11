import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Useauth from '../../../hooks/Useauth';

const Modal = (props) => {
 
    const {user} = Useauth()
    // const [single,setsingle] = useState({})
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
    
        const newdata = {...data,
       status:'pending',
     
      }
      console.log(newdata);
  
      fetch('https://intense-chamber-13019.herokuapp.com/orders',{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(newdata)
      })
     
          
  
      };
    return (
        <div>


        </div>
    );
};

export default Modal;