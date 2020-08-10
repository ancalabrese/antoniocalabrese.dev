import React, { Component } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import AboutMe from '../../AboutMe/AboutMe'
import Style from './Layout.module.css'
import Portfolio from '../../Portfolio/Portfolio'
import Contacts from '../../Contacts/Contacts'
import Home from '../../Home/Home'

class Layout extends Component {

    render() {
        return (
            <div className={Style.layout}>
                <header>
                    <Toolbar className={Style.layoutElement} />
                </header>
                <main>
                    <Home />
                    <AboutMe />
                    <Portfolio />
                    <Contacts />
                </main>
            </div>
        )
    }
}

export default Layout;