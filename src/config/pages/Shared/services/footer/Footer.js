import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css'
 
 const Footer = () => {
     return (
        <div className="footer-main p-5">
        <Container>
            <div className="row footer-m ">
                

            
                <div className="col-md-6">
<h1 className="footer-t fw-bold text-white mb-4">Motorcycle vally</h1>
<p className=" text-white fw-bold"> Book online and receive instant confirmation.</p>

                </div>
                <div className="col-md-3">
               
                </div>
                <div className="col-md-3">
<h2 className="text-white fw-bold">address</h2>
<h5 className=" text-white">motorcycle vally co limited</h5>
<p className="text-white fw-bold">dhaka,uttara,bangladesh</p>

                </div>
                <div className="footer-last row mt-5 pb-3">
                  <div className="col-md-6 d-flex">
                  <p className=" text-white col-md-6">Copyright © 2021 vally |</p>
                       <p className="mx-3 text-white"><i className="fab fa-facebook"></i> </p>
                    <p className="text-white"><i className="fab fa-twitter"></i></p>
                    <p className=" mx-3 text-white"><i className="fab fa-youtube"></i></p>
                  </div>
                    <div className="d-flex col-md-6 justify-content-end ">
                 
                    <img className="mx-4" width="70px" height="40px" src="https://i.postimg.cc/tRnBxtBp/amex-new.png" alt="" />
                   <img className="mx-4" width="70px" height="40px" src="https://i.postimg.cc/fbFgGH8q/bkash-new.png" alt="" />
                   <img className="" width="70px" height="40px" src="https://i.postimg.cc/3JFr3p5F/visa-new.png" alt="" />
                   <img className="mx-4" width="70px" height="40px" src="https://i.postimg.cc/65jSV5dN/nogod-new.png" alt="" />

                    </div>
                </div>
             
            </div>
           
        </Container>
    </div>
     );
 };
 
 export default Footer;