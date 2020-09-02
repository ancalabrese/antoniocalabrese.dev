import React from 'react'
import Style from './Portfolio.module.css'
import ComingSoon from '../ComingSoon/ComingSoon'
import DiscSpinner from '../UI/DiscSpinner/DiscSpinner'
import Aux from '../UI/Aux/Aux'

const Portfolio = () => {
    return (
        <Aux>
            <div id="portfolio" className={Style['portfolio']}>
            </div>
            <ComingSoon />
        </Aux>
    )
}

export default Portfolio;