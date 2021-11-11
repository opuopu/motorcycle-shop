import { Carousel } from 'bootstrap';
import React from 'react';
import ReactStars from "react-rating-stars-component";

const Allreview = (props) => {
    const {name,review,rating} = props.review || {}
    return (
        <div className='col-md-3 my-3'>
              <div className=" py-4 px-3 shadow ">
                  <h5 className="names text-danger"> {name}</h5>
                  <p>{review}</p>
                  <ReactStars 
             edit={false}
      value={rating}
       size={28}
       activeColor="#ffd700"
    />





              </div>
        </div>
    );
};

export default Allreview;