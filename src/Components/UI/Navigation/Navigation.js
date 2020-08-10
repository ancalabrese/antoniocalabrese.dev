import React, { Component } from 'react'
import Style from './Navigation.module.css'
import NavItem from './NavItem/NavItem'

class Navigation extends Component {

    render() {
        return (
            <nav className={Style.navigation}>
                <ul>
                    <li><NavItem link="#about-me">About me</NavItem></li>
                    <li><NavItem link="#projects">Portfolio</NavItem></li>
                    <li><NavItem link="#contacts">Contacts</NavItem></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;