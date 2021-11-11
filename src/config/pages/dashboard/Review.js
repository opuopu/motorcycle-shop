import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Useauth from '../../../hooks/Useauth';
import './review.css'
import ReactStars from "react-rating-stars-component";

const Review = () => {
    const {user} = Useauth()
    const { register, handleSubmit } = useForm();
    const [rating,setrating] = useState(0)
    const [success,setsuccess] = useState(false)
    console.log(rating);
    const onSubmit = data =>{
          setsuccess(false)

       const newdata = {...data,
                   rating:rating
    }                  

 fetch(`https://intense-chamber-13019.herokuapp.com/review`,{
     method:'POST',
     headers:{
         'content-type':'application/json'
     },
     body:JSON.stringify(newdata)
 })
 .then(res=>res.json())
 .then(data => {
    if(data.acknowledged){
setsuccess(true)
    }
 })
    }
    
const ratingChanged = (newRating) => {

    setrating(newRating)
  };
    return (
        <div className="">
            <h3 className="main-title text-center">review now</h3>
      
           <div className=" d-flex justify-content-center mt-2 mb-0">
       
           <ReactStars
       
       count={5}
     className="star"
        
       onChange={ratingChanged}
     
       size={30}
       activeColor="#ffd700"
    />
           </div>
         
            <form className="text-center mt-3" onSubmit={handleSubmit(onSubmit)}>
               
                <label htmlFor="">your name</label> <br />
            { user?.displayName &&  <input  className="input mb-3" defaultValue={user?.displayName} {...register("name")} />} <br /> 
       
         
            <label htmlFor="">enter review</label> <br />
            <textarea defaultValue='write something here' className="review-box" {...register("review")} /> <br /> 
            <input type="submit" className="book-btn" value="submit review" />
            </form>
               <p className="text-center text-info fw-bold my-2">review successfully added</p>
        </div>
    );
};

export default Review;