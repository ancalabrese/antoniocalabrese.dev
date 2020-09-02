import React, { Component } from 'react'
import Style from './Portfolio.module.css'
import ComingSoon from '../ComingSoon/ComingSoon'
import Project from '../UI/CardElement/CardElement'

class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio" className={Style['portfolio']}>
                <Project>

                </Project>
                <Project>

                </Project>
                <Project>

                </Project>
                <Project>

                </Project>
                <ComingSoon />
            </div>

        )
    }
}

export default Portfolio;