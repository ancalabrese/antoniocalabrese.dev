import React from 'react'
import Style from './CardElement.module.css'


const CardElement = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default CardElement; 
