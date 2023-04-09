import React, { useState, useEffect } from 'react'
import Style from './Toolbar.module.css'

import Navigation from '../Navigation/Navigation'

const Toolbar = () => {
    const [showShadow, displayShadow] = useState(false);
    const shadowThreshold = window.innerHeight - 5;
    useEffect(() => {
        function toggleShadow() {
            const position = window.pageYOffset;
            if (position > shadowThreshold && showShadow === false) {
                displayShadow(true)
            } else if (position < shadowThreshold && showShadow === true) {
                displayShadow(false)
            }
        }
        function watchScroll() {
            window.addEventListener('scroll', toggleShadow)
        }
        watchScroll()
        
        return () => {
            window.removeEventListener('scroll', toggleShadow);
        }
    });

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }



    return (
        <div className={showShadow ? [Style.toolbar, Style['toolbar-shadow']].join(' ')
            : Style.toolbar}>
            <div className={Style.profile_picture} onClick={scrollToTop} />
            <Navigation />
        </div>
    )
}

export default Toolbar; 