import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Style from './NavItem.module.css'


const NavItem = (props) => {
    return (
        <div>
            <NavLink to={props.link} className={Style.navItem}
                activeClassName={Style.navItemActive}>
                {props.children}
            </NavLink>
        </div>
    )
}
export default NavItem;