import React from 'react';
import  './Address.css';

const Address = (props) => {
    return (
        <div className="view-details">
            <h3>Name:-{props.user.name}</h3>
            <h3>City:-{props.user.address.city}</h3>
            <h3>Email:-{props.user.email}</h3>
            <h3>Phone:-{props.user.phone}</h3>
            <h3>Website:-{props.user.website}</h3>
            <img src={props.user.image} alt=""/>
        </div>
    );
};

export default Address;