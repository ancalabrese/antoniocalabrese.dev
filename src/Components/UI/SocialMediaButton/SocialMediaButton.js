import React from 'react'
import Style from './SocialMediaButton.module.css'
import ReactGA from 'react-ga'

const SocialMediaButton = (props) => {

    const onLinkClick = (link) => {
        ReactGA.event({
            category: "Social media reach out",
            action: "Click on contact item: " + link,
        });

        window.open(link, '_blank');
    }


    return (
        <div className={Style.fab} onClick={() => onLinkClick(props.link)}>
            {props.children}
        </div>
    );
}

export default SocialMediaButton;