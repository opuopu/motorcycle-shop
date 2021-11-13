import React, { useState } from 'react';

const Managesingle = (props) => {
 
    const{name,image,details,price,_id} = props.product || {}

    return (
        <div className="col-md-6 ">
           <div className="order cart shadow">   
                  <img  src={image} alt="" />      
        <h5 className="names">{name}</h5>
        <p style={{width:'70%',margin:'0 auto'}}>{details} </p>
        <h5 className="price">{price}</h5>
        <button className="book-btn" onClick={()=>props?.handledelete(_id)}>delete product</button>
               
                     </div> 
        </div>
    );
};

export default Managesingle;