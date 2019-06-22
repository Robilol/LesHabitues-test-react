import React from 'react'
import PropTypes from 'prop-types';
import MaxOffer from "./MaxOffer";

const Shop = ({logo, name, address, city, zipCode, currency, maxOffer}) => {
    return(
        <div className="shop">
            <img src={logo} alt={name} className="logo"/>
            <div className="infos">
                <p className="name">{name}</p>
                <p className="address">{address}</p>
                <p className="address-city">{zipCode} {city}</p>
                <MaxOffer price={maxOffer} currency={currency}/>
            </div>
        </div>
    );
};
export default Shop

Shop.propTypes = {
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    maxOffer: PropTypes.string.isRequired,
};
