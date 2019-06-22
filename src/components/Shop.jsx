import React from 'react'
import PropTypes from 'prop-types';
import MaxOffer from "./MaxOffer";

const Shop = ({logo, name, address, city, zipCode, currency, maxOffer}) => {
    return(
        <div>
            <img src={logo} alt={name}/>
            <div>
                <p>{name}</p>
                <p>{address}</p>
                <p>{zipCode} {city}</p>
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
