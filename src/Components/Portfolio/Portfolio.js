import React, { Component } from 'react'
import Style from './Portfolio.module.css'
import ComingSoon from '../ComingSoon/ComingSoon'
import Project from '../UI/CardElement/CardElement'
import ApiClient from '../../ApiClient/ApiClient'

class Portfolio extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div id="portfolio" className={Style['portfolio']}>
                {/* <div />
                <div />
                <div />
                <div /> */}

                <Project>
                </Project>

                <Project>
                </Project>
                <Project>

                </Project>

                <Project>
                </Project>

                <Project>
                </Project>
                <Project>
                </Project>
                

                {/* <ComingSoon /> */}
            </div>

        )
    }
}

export default Portfolio;