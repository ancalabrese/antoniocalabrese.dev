import React from 'react'
import Style from './Toolbar.module.css'
import mainStyle from '../../../mainStyle.module.css'
import Navigation from '../Navigation/Navigation'
import logo from '../../../Assets/acLogo.png'

const Toolbar = (props) => {
    return (
        <div className={Style.toolbar}>
            <div className={Style.profile_picture} />
            <Navigation />
        </div>
    )
}

export default Toolbar; 