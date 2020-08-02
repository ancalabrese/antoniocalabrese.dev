import React, { Component } from 'react'
import Style from './Navigation.module.css'
import NavItem from './NavItem/NavItem'

class Navigation extends Component {

    render() {
        return (
            <nav className={Style.navigation}>
                <NavItem link="#">About me</NavItem>
                <NavItem link="#">Projects</NavItem>
                <NavItem link="#">Contact me</NavItem>
            </nav>
        )
    }
}

export default Navigation;