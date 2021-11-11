import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import Useauth from '../../../hooks/Useauth';

const Register = () => {
    const history = useHistory()
    const {registerUser,error} = Useauth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {console.log(data)
        registerUser(data.email, data.password,data.name,history)
        console.log(data.email);
        

    };

    return (
        <div className="mains">
            <Container>
                <div className="row">
                    <div className="col-md-5">
                       
                    <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-danger fw-bold">Sign up here</h3>
                        <label htmlFor="">enter name</label> <br />
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="enter your name" /> <br /> 
      <label htmlFor="">enter gmail</label> <br />
      <input {...register("email",{ required: true})} placeholder="enter email"/> <br /> 
      <label htmlFor="">enter password</label> <br />
      <input type="password" {...register("password",{ required: true} )} placeholder="enter password" /> <br />
      <p className="text-danger my-2">{error}</p>
      <input className="my-3 book-btn" type="submit" value="register now" />
    </form>

    <p className="text-info fw-bold">already signup?<Link to="/login" style={{textDecoration:'none'}}> login now</Link> </p>
                    </div>
                    <div className="col-md-7">
                        <img className="img-fluid" src="https://i.postimg.cc/W4WsjJJ2/mobile-login-concept-illustration-114360-83.jpg" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;