import React from 'react'
import Style from './Toolbar.module.css'
import mainStyle from '../../../mainStyle.module.css'
import Navigation from '../Navigation/Navigation'
import logo from '../../../Assets/pic1.jpg'


const Toolbar = (props) => {
    return (
        <header className={Style.toolbar}>
            <div className={Style.profile_picture}></div>
            <Navigation />

        </header>
    )
}

export default Toolbar; 