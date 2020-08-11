import React from 'react'
import Style from './Portfolio.module.css'
import ComingSoon from '../ComingSoon/ComingSoon'
import DiscSpinner from '../UI/DiscSpinner/DiscSpinner'

const Portfolio = () => {
    return (
        <div id="portfolio" className={Style['portfolio']}>
            <ComingSoon >
            </ComingSoon>
        </div>
    )
}

export default Portfolio;