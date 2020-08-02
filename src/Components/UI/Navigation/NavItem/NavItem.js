import React, { Component } from 'react'
import Style from './NavItem.module.css'


const NavItem = (props) => {
    return (
        <div className={Style.nav_item}>
            <a haref={props.link}>{props.children}</a>
        </div>
    )
}
export default NavItem;