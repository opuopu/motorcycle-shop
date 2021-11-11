import React from 'react';
import { Link } from 'react-router-dom';
import Useauth from '../../../../hooks/Useauth';
import { useHistory } from 'react-router';

const Products = (props) => {
    const history = useHistory()
    const {admin} = Useauth()
    const{image,name,price,details,_id} = props.product || {}
    return (
        <div className="col-md-4">
            <div className="cart shadow">
                <img src={image} alt="" />
                <h5 className="names">{name}</h5>
                <p style={{width:'70%', margin:'0 auto'}}>{details}</p>
                <h5 className="price">{price}</h5>
     <Link to={`/buy/${_id}`}> <button className="book-btn">purchase now</button></Link>
            </div>
        </div>
    );
};

export default Products;