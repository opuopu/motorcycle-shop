import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/services/footer/Footer';
import Register from './Register';

const Registrationhome = () => {
    return (
        <div>
            <Header></Header>
            <Register></Register>
            <Footer></Footer>
        </div>
    );
};

export default Registrationhome;