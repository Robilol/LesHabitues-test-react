import React from 'react'
import PropTypes from 'prop-types';

interface IProps {
    price: string,
    currency: string
}

const MaxOffer: React.FunctionComponent<IProps> = ({price, currency}) => {

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
