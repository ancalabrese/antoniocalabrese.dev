import React from 'react'
import { HashLink } from 'react-router-hash-link';
import Style from './NavItem.module.css'


const NavItem = (props) => {
    return (
        <div>
            <HashLink to={props.link} className={Style.navItem} smooth>
            {props.children}
            </HashLink>
        </div >
    )
}
export default NavItem;