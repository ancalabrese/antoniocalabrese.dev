import React, { Component } from 'react'
import Style from './Navigation.module.css'
import NavItem from './NavItem/NavItem'

class Navigation extends Component {

    render() {
        return (
            <nav className={Style.navigation}>
                <NavItem link="#contacts">Contacts</NavItem>
                <NavItem link="#projects">Projects</NavItem>
                <NavItem link="#about-me">About me</NavItem>
                <NavItem link="#home">Home</NavItem>
            </nav>
        )
    }
}

export default Navigation;