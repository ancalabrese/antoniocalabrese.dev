import React from 'react'
import SocialFAB from '../UI/SocialMediaButton/SocialMediaButton'
import Style from './Contacts.module.css'
import EmailIcon from '@material-ui/icons/Email';
import Instagram from '@material-ui/icons/Instagram'
import Linkedin from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'
import Twitter from '@material-ui/icons/Twitter'


const Contacts = () => {
    return (
        <div className={Style.contacts}>
            <p>If you wish to talk or contribute connect with me!</p>
            <div className={Style.email}>
                
                <SocialFAB haref="mailto:antobiobust@gmail.com" target="_blank">
                    <EmailIcon className={Style['email-icon']} /></SocialFAB> antoniobust@gmail.com
                
            </div>
            <div className={Style['social-fabs']}>
                <SocialFAB link="https://www.linkedin.com/in/antonio-calabrese/">
                    <Linkedin />
                </SocialFAB>
                <SocialFAB link="https://github.com/antoniobust">
                    <GitHub />
                </SocialFAB>
                <SocialFAB link="https://www.instagram.com/antonio_bust">
                    <Instagram />
                </SocialFAB>
                <SocialFAB link="https://twitter.com/antonioBust91">
                    <Twitter />
                </SocialFAB>
            </div>
        </div >
    )
}

export default Contacts;