import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../Shared/Header';
import Footer from '../Shared/services/footer/Footer';

const Addservice = () => {
    const [posts,setposts] = useState(false)
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        setposts(false)
    fetch(`https://intense-chamber-13019.herokuapp.com/addservice`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res =>res.json())
    .then(data =>{
        if(data.acknowledged){
            setposts(true)
            reset()
        }


    })
    
    }
    return (
        <div className="mains">
            <Header></Header>
            <h1 className="main-title text-center my-5">Add a Product</h1>
            <Container>
            <form className="text-center mb-4" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">upload image</label> <br />
      <input {...register("image",{ required: true})} placeholder="enter image link" /> <br />
      <label htmlFor="">product name</label> <br />
      <input {...register("name",{ required: true} )}placeholder="enter product name" /> <br />
      <label htmlFor="">enter product details</label> <br />
      <input  {...register("details",{ required: true} )} placeholder="enter product details" /> <br />
      <label htmlFor="">product price</label> <br />
      <input  {...register("price",{ required: true} )} placeholder="enter product price" /> <br />
      <input className="book-btn my-3" type="submit" value="add service" />
    </form>
     {
         posts && <p className="text-center text-info fw-bold">product successfully added</p>
     }
    </Container>
    <Footer></Footer>
        </div>
    );
};

export default Addservice;