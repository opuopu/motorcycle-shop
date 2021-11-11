import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/services/footer/Footer';

const Notfound = () => {
    return (
        <div>
            <Header></Header>
        <div className="errors">
                    
        <h1 className="text-info fw-bold">404 NOT FOUND</h1>
        <p className="text-danger">page not found.. back to home sir</p>
     <Link to="/home">   <button className="book-btn">back to home</button></Link>
        </div>

            <Footer></Footer>
        </div>
    );
};

export default Notfound;