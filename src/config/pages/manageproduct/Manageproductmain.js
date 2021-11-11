import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/services/footer/Footer';
import Manageproduct from './Manageproduct';

const Manageproductmain = () => {
    return (
        <div>
            <Header></Header>
            <Manageproduct></Manageproduct>
            <Footer></Footer>
        </div>
    );
};

export default Manageproductmain;