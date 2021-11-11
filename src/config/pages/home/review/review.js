import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Allreview from './Allreview';

const Reviews = () => {
    const [review,setreview] = useState([])
    useEffect(()=>{
        fetch(`https://intense-chamber-13019.herokuapp.com/getreview`)
        .then(res =>res.json())
        .then(data =>setreview(data))
    },[])

    return (
        <div>
        <Container>
             
           <div className="row g-4">
           {
                review?.map(single => <Allreview key={single._id} review={single}></Allreview>)
            }
           </div>
        </Container>
        </div>
    );
};

export default Reviews;