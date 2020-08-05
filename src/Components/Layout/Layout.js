import React, { Component } from 'react'
import Toolbar from '../UI/Toolbar/Toolbar'
import AboutMe from '../AboutMe/AboutMe'
import Style from './Layout.module.css'
import ComingSoon from '../ComingSoon/ComingSoon'
import Contacts from '../Contacts/Contacts'
import Home from '../Home/Home'

class Layout extends Component {

    render() {
        return (
            <div className={Style.layout}>
                <Toolbar className={Style.layoutElement} />
                {/* <div className={Style['main-content']}> */}
                <Home />
                <main>
                    <AboutMe />
                    <ComingSoon />
                    <Contacts />
                </main>




            </div>
        )
    }
}

export default Layout;