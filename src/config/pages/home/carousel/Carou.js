import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carou = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/L68mZVFB/slider2-h1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>R1V5 UPTO 30% OFF</h3>
      <p>WE’RE ALWAYS WORKING HARD TO BRING CUSTOMER SATISFACTION</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/jd3vsRhQ/slider1-h1-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-white fw-bold">Racing motor upto 30% off</h3>
      <p>WE’RE ALWAYS WORKING HARD TO BRING CUSTOMER SATISFACTION</p>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
        </div>
    );
};

export default Carou;