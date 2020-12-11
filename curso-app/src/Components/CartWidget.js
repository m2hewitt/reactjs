import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cartwidget = () => {

    return (
        <div style={{ padding: 30, color: "white" }}> <FontAwesomeIcon icon={faShoppingCart} size="lg" /> </div>
    )
};

export default Cartwidget;
