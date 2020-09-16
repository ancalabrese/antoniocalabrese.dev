import React from 'react'
import Style from './Toolbar.module.css'

import Navigation from '../Navigation/Navigation'

const Toolbar = (props) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={Style.toolbar}>
            <div className={Style.profile_picture} onClick={scrollToTop} />
            <Navigation />
        </div>
    )
}

export default Toolbar; 