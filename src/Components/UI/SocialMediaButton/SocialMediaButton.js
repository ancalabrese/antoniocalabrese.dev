import React from 'react'
import Style from './SocialMediaButton.module.css'

const SocialMediaButton = (props) => {

    const onLinkClick = (link) => {
        // ReactGA.event({
        //     category: 'User',
        //     action: 'Click on contact item: ' +url
        // });
        window.open(link, '_blank');
    }


    return (
        <div className={Style.fab} onClick={() => onLinkClick(props.link)}>
            {props.children}
        </div>
    );
}

export default SocialMediaButton;