import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Useauth from '../../../hooks/Useauth';

const Myorder = () => {
    const [myorder,setmoyorder] = useState([])
    const {user} = Useauth()

    useEffect(()=>{
        fetch(`https://intense-chamber-13019.herokuapp.com/queryorder?email=${user?.email}`)
        .then(res =>res.json())
        .then(data =>setmoyorder(data))
    },[user?.email])

    const handledelete = (id) =>{
      fetch(`https://intense-chamber-13019.herokuapp.com/delete/${id}`,{
        method:'DELETE'

      })
      .then(res =>res.json())
      .then(data =>{
        const confirm = window.confirm('are you want to sure delete?')
        if(confirm){
          const restorder = myorder.filter(data => data._id !==id)
          setmoyorder(restorder)
        }
      })

    }
    return (
        <div>
         <Container>
         <h3 className="text-center bg-primary text-white py-2 fw-bold">My order</h3>
         <Table responsive striped bordered hover variant="secondary">
         
  <thead>
    <tr>
      <th>#</th>
      <th>name</th>
      <th>email</th>
      <th>product name</th>
      <th>address</th>
      <th>price</th>
      <th>status</th>
      <th>cancel</th>
    </tr>
  </thead>
  {
      myorder?.map((order,index) =>  <tbody key={order?._id}>
        <tr>
          <td>{index}</td>
          <td>{order?.name}</td>
          <td>{order?.email}</td>
          <td>{order?.productsname}</td>
          <td>{order?.adress}</td>
          <td>{order?.productsprice}</td>
          <td>{order?.status}</td>
          <td className="text-danger " onClick={()=>handledelete(order?._id)}><i className="fas fa-trash-alt"></i></td>
        </tr>
      
      </tbody>)
  }
 
</Table>

         </Container>
        </div>
    );
};

export default Myorder;