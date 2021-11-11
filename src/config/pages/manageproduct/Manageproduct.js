import React, { useEffect, useState } from 'react';
import { Container,Spinner } from 'react-bootstrap';
import Managesingle from './Managesingle';

const Manageproduct = () => {
    const [products,setproduct] = useState([])
    const [loading,setloading] = useState(false)
    useEffect(()=>{
        setloading(true)
fetch(`https://intense-chamber-13019.herokuapp.com/getproducts`)
.then(res =>res.json())
.then(data =>{ 
    setproduct(data)
    setloading(false)
})
    },[])
  


    const handledelete = (id) =>{
        fetch(`https://intense-chamber-13019.herokuapp.com/delete/item/${id}`,{
            method:'DELETE'
    
          })
          .then(res =>res.json())
          .then(data =>{
            const confirm = window.confirm('are you want to sure delete?')
            if(confirm){
           
              const restorder = products?.filter(data => data._id !==id)
              setproduct(restorder)
            }
          })
    }
    return (
        <div className='mains'>
            <Container>
                <h1 className="main-title text-center my-4">Manage Product</h1>
<div className="row g-5 ms-3 my-5">
    {
      loading ?   <Spinner className="spins p-0" animation="border" variant="danger" /> :  products?.map(product => <Managesingle key={product._id}product ={product} handledelete={handledelete}></Managesingle>)
    }
</div>

            </Container>
        </div>
    );
};

export default Manageproduct;