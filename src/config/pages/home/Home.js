import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Useauth from '../../../hooks/Useauth';
import Review from '../dashboard/Review';
import Products from '../Shared/services/Products';
import Carou from './carousel/Carou';
import './home.css'
import Reviews from './review/review';



const Home = () => {
    const [products,setproducts] = useState([])
    const [loading,setloading] = useState(false)
    console.log(products);
    const {user,Signout} = Useauth()
    console.log(user);

    useEffect(()=>{
        setloading(true)
        fetch('https://intense-chamber-13019.herokuapp.com/getservice')
        .then(res =>res.json())
        .then(data =>{
            
            setproducts(data)
        setloading(false)})
    },[])
    return (

    
        <div> 
         <Carou></Carou>

         {/* 
         
          */}
          <Container>
              <h1 className="text-center main-title my-5">Our products</h1>
              <div className="grid">
  <div className="row g-4 ms-4">
      {
       loading ? <Spinner className="spins" animation="border" variant="success" /> :   products?.map(product => <Products key={product._id} product={product}></Products>)
      }
  </div>
              </div>
          </Container>


          <div className="review-part">
              <h1 className="main-title text-center my-5">buyer review</h1>
            <Container>
             <Reviews></Reviews>
            </Container>

            <div className="home-last">
               <div className="middle">
               <p className="car-p">Founded in 1990, Akrapovic is a leading brand that manufactures premium quality motorcycle exhaust systems. Based on personal experience in the field, Igor Akrapovič- the founder of the company designed his own exhaust systems.</p> <br /> <br />

               <img className="founder-img" src='https://demo.fieldthemes.com/fsport17/img/cms/home1/avt1-testi-h1.jpg' alt="" /> 
               <h5 className="caro-h5">founder & ceo</h5>
               <p className="text-white fw-bold">motorvally co limited</p>
               </div>
            </div>
          </div>
        </div>
    );
};

export default Home;