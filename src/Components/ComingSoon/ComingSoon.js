import React from 'react'
import Style from './ComingSoon.module.css'
import DiscSpinner from '../UI/DiscSpinner/DiscSpinner'
const ComingSoon = (props) => {
    return (
        <div id="#coming-soon" className={Style['coming-soon']}>
            <p><b>COOL STUFF COMING SOON, STAY TUNED!</b></p>
            <DiscSpinner />
        </div>
    )
}

export default ComingSoon;