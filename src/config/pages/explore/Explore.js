import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Allproducts from './Allproducts';

const Explore = () => {
    const [products,setproducts] = useState([])
    const [loading,setloading] = useState(false)

    useEffect(()=>{
        setloading(true)
        fetch('https://intense-chamber-13019.herokuapp.com/getproducts')
        .then(res =>res.json())
        .then(data =>{
            setloading(false)
            setproducts(data)})
    },[])
    return (
        <div className="mains">
            <h1 className="main-title text-center my-5" style={{margin:' 0 auto',display:'block'}}>explore all product</h1>
            <Container>
                <div className="grid">
                    <div className="row g-3 ms-4 my-5">
                        {
                          loading ?  <Spinner className="spins" animation="border" variant="success" />  : products?.map(product => <Allproducts key={product._id} product={product}></Allproducts>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Explore;