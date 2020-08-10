import React from 'react'
import Style from './ComingSoon.module.css'

const ComingSoon = (props) => {
    return (
        <div id="#coming-soon" className={Style['coming-soon']}>
            <p><b>COOL STUFF COMING SOON, STAY TUNED!</b></p>
            {props.children}
        </div>
    )
}

export default ComingSoon;