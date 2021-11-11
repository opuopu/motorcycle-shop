import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/services/footer/Footer';
import Login from './Login'

const Loginhome = () => {
    return (
        <div>
            <Header></Header>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default Loginhome;