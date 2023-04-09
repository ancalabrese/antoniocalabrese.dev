import React from 'react'
import Style from './DiscSpinner.module.css'

const DiscSpinner = () => {
    return(
    <div className={Style["lds-ripple"]}>
        <div />
        <div />
    </div>)
}

export default DiscSpinner;