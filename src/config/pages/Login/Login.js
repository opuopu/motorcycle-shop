import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link,useLocation,useHistory } from 'react-router-dom';
import Useauth from '../../../hooks/Useauth';

const Login = () => {
    const location = useLocation()
    const history = useHistory()

    const{googlesign,signinuser,error} = Useauth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {console.log(data)
        signinuser(data?.email,data?.password,location,history)
        
    };

    return (
        <div>
             <Container>
<div className="row align-items-center">
    <div className="col-md-5">
  <h3 className="text-danger fw-bold text-start my-2">Login now</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">enter email</label> <br />
      <input className="my-2" {...register("email",{ required: true})} placeholder="enter your email" /> <br />
      <label htmlFor="">enter password</label> <br />
      <input  className="my-2" type="password" {...register("password",{ required: true} )} placeholder="enter your password" /> <br />

      <p className="text-danger my-2">{error}</p>
     
      <input  className="book-btn" type="submit" value="login now" />
    </form>
<p>---------------------google sign in---------------------</p>
<button className="book-btn bg-primary border-0 text-white" onClick={()=>googlesign(location,history)}>google sign in</button> <br />
<p className="text-dark fw-bold">new here? <Link to="/register" style={{textDecoration:'none'}}>sign up</Link></p>
    </div>
    <div className="col-md-7">
        <img className="img-fluid" src="https://i.postimg.cc/W4WsjJJ2/mobile-login-concept-illustration-114360-83.jpg" alt="" />
    </div>
</div>


             </Container>

        </div>
    );
};

export default Login;