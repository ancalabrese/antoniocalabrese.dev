import React from 'react'
import Style from './CardElement.module.css'


const CardElement = (props) => {
    return (
        <div className={Style.card}>
            <div className={Style['card-header']}></div>
            <div className={Style['card-title']}>
                <span className={Style.title}>
                    <p>Traffic Simulator</p>
                </span>
                {/* <div className={Style['language-box']}>
                    <p>Ruby</p>
                </div> */}
            </div>
        </div>
    );
}

export default CardElement; 
