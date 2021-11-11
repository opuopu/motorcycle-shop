import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const Manageorder = () => {
    const[orders,setorder] = useState([])
    const [toogle,settoogle] = useState(false)
    useEffect(()=>{
fetch('https://intense-chamber-13019.herokuapp.com/allorder')
.then(res => res.json())

.then(data => setorder(data))
    },[toogle])

    const updatestatus = id =>{
settoogle(false)
fetch(`https://intense-chamber-13019.herokuapp.com/update/${id}`,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },

})
.then(res =>res.json())
.then(data =>{
    if(data.modifiedCount){
        settoogle(true)
     

    }
    else{

    }
})
    }
    return (
        <div className="mains">
            <h1 className="main-title text-center my-5">manage order</h1>
            <Container>
         <Table responsive striped bordered hover variant="success">
  <thead>
    <tr>
      <th>#</th>
      <th>name</th>
      <th>email</th>
      <th>product name</th>
      <th>address</th>
      <th>price</th>
      <th>status</th>

    </tr>
  </thead>
  {
      orders?.map((order,index) =>  <tbody key={order?._id}>
        <tr>
          <td>{index}</td>
          <td>{order?.name}</td>
          <td>{order?.email}</td>
          <td>{order?.productsname}</td>
          <td>{order?.adress}</td>
          <td>{order?.productsprice}</td>
         {
             order?.status === 'shipped' && <td className="text-primary fw-bold">shipped</td> || 
            <div className="d-flex"> <td>{order?.status}</td>  <td className='bg-danger approve p-1 text-white mt-1 ms-1 ' onClick={()=>updatestatus(order?._id)}>approve</td></div>
         }
        
        </tr>
      
      </tbody>)
  }
 
</Table>

         </Container>
        </div>
    );
};

export default Manageorder;