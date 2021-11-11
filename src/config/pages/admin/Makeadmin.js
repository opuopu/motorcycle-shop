import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Makeadmin = () => {
    const [email,setemail] = useState('')
    const [added,setadded] = useState(false)
 console.log(email);
    const handleblur = e =>{
setemail(e.target.value)
    }
    const handlesubmit = e => {
        setadded(false)
const user = {email}
console.log(user);
fetch(`https://intense-chamber-13019.herokuapp.com/user/admin`,{
    method:'PUT',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(user)

})
.then(res =>res.json())
.then(data =>{
if(data.modifiedCount){
 setadded(true)
}
})
e.preventDefault()
    }
    return (
        <div className="mains">
       <h1 className="main-title my-5 text-center ">Make a admin</h1>
        <form className="text-center" onSubmit={handlesubmit}>
                 <label htmlFor="">enter email</label> <br />
 <input type="email"  onBlur={handleblur} placeholder='enter email' /> <br />
   
      <input  className='my-3 book-btn' type="submit" value="add a admin" />
    </form>
    {
           added &&  <p className="text-center fw-bold text-info">admin successfully added</p>
       }
         
        </div>
    );
};

export default Makeadmin;