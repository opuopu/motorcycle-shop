import React, { useEffect, useState } from 'react';
import { Container, Modal, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';
import Useauth from '../../../hooks/Useauth';
import './Buy.css'

const Buyproduct = () => {
    const [loading,setloading] = useState(false)
    const{id} = useParams()
    const {user} = Useauth()
    const [single,setsingle] = useState({})
    const history = useHistory()
   
    console.log(single);
    useEffect(()=>{
        setloading(true)
fetch(`https://intense-chamber-13019.herokuapp.com/single/${id}`)
.then(res =>res.json())
.then(data =>{
    
    setsingle(data)
    setloading(false)
})
    },[id])
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
   .then(res =>res.json())
.then(data => {
 if(data.acknowledged){
history.push('/dashboard')
 }
})        



    };
    return (
        <div>
            <h1 className=" main-title text-center my-5">Purchase Motorcycle</h1>

            <Container>
                <div className="grid">
                    <div className="d-flex align-items-center justify-content-around flex-column flex-lg-row">
                        <div className="">
                           {loading ?   <Spinner className="spins" animation="border" variant="danger" /> : <div className="cart shadow p-4" >
                                <img src={single?.image} alt="" />
                                  <h5 className="names">{single?.name}</h5>
                                  <p >{single?.details}</p>
                                  <h5 className="price">{single?.price}</h5>
                    
                            </div>}
                        </div>
                        {/* 
                         */}
                         <div className="mt-2">

                
                  




                         <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">you name</label> <br />
   { user?.displayName && <input defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="your name" />} <br /> 
   <label htmlFor="">your email</label> <br />
    {  user?.email &&   <input defaultValue={user?.email} {...register("email",)}  placeholder="your email" />} <br /> 
    <label htmlFor="">product name</label> <br />
      { single?.name && <input defaultValue={single?.name} {...register("productsname",  )}  placeholder="products name"  />} <br />
      <label htmlFor="">product price</label> <br />
     { single?.price &&  <input defaultValue={single?.price} {...register("productsprice",  )}  placeholder="products price"  />} <br /> 
     <label htmlFor=""> address</label> <br />
      <input {...register("adress", )}  placeholder="address" /> <br />
      <label htmlFor="">your number</label> <br />
      <input type="number" {...register("number", )} placeholder='enter your number' /> <br />
       <input className="book-btn mb-5 mt-3 mx-auto" type="submit" value="purchase now" />
     </form>

                         </div>
                    </div>
                </div>
            </Container>
        </div>
    );
                        }
export default Buyproduct;