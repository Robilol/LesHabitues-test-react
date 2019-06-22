import React from 'react'
import PropTypes from 'prop-types';


const MaxOffer = ({price, currency}) => {

    let shortcode = "";

    if (currency === "EUR") {
        shortcode = "€"
    }

    return(
        <p className="max-offer">up to {price} {shortcode} offered</p>
    );
};
export default MaxOffer

MaxOffer.propTypes = {
    price: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};
