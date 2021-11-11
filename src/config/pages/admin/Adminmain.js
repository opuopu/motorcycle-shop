import React from 'react';
import Header from '../Shared/Header'
import Footer from '../Shared/services/footer/Footer';
import Admin from './Makeadmin'

const Adminmain = () => {
    return (
        <div>
        <Header></Header>
        <Admin></Admin>
        <Footer></Footer>
        </div>
    );
};

export default Adminmain;