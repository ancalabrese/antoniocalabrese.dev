import React from 'react'
import Style from './CardElement.module.css'


const CardElement = (props) => {
    return (
        <div className={Style.card} onClick={props.clicked}>
            <div className={Style['card-header']} >
                <img className={Style['project-img']} alt={props.project.name} src={props.project.smallImage}/>
            </div>

            <div className={Style['card-title']}>
                <span className={Style.title}>
                    <p>{props.project.name}</p>
                </span>
                <span className={Style.description}>
                    <p>{props.project.shortDescription}</p>
                </span>
                {/* <div className={Style['language-box']}>
                    <p>Ruby</p>
                </div> */}
            </div>
        </div>
    );
}

export default CardElement; 
