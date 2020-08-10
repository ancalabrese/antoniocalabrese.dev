import React from 'react'
import Style from './Portfolio.module.css'
import ComingSoon from '../ComingSoon/ComingSoon'

const Portfolio = () => {
    return (
        <div id="portfolio" className={Style['portfolio']}>
            <ComingSoon />
        </div>
    )
}

export default Portfolio;