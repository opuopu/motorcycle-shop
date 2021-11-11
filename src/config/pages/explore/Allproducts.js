import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Allproducts = (props) => {
    const {image,name,details,price,_id} = props.product ||{}
    return (
        <div className="col-md-4">
       
               <div className="cart shadow ">
               <img src={image} alt="" />
                <h5 className="names">{name}</h5>
                <p style={{width:'70%', margin:'0 auto'}}>{details}</p>
                <h5 className="price">{price}</h5>
      <Link to={`/buy/${_id}`}> <button className="book-btn">purchase now</button></Link>
               </div>
  
        </div>
    );
};

export default Allproducts;