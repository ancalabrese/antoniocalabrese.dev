import React from 'react'
import Style from './CardElement.module.css'


const CardElement = (props) => {
    return (
        <div className={Style.card} onClick={props.expandProjectHandler}>
            <div className={Style['card-header']} />
        
            <div className={Style['card-title']}>
                <span className={Style.title}>
                    <p>{props.title}</p>
                </span>
                {/* <div className={Style['language-box']}>
                    <p>Ruby</p>
                </div> */}
            </div>
        </div>
    );
}

export default CardElement; 
