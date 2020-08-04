import React from 'react'
import Style from './SocialMediaButton.module.css'

const SocialMediaButton = (props) => {
    return (
        <div className={Style.fab}>
            <a href={props.link}></a>
        </div>
    );
}

export default SocialMediaButton;