import React from 'react'
import SocialMediaButton from '../UI/SocialMediaButton/SocialMediaButton'
import Style from './Contacts.module.css'


const SocialMedia = () => {
    return (
        <div className={Style.contacts}>
            <SocialMediaButton />
            <SocialMediaButton />
        </div>
    )
}

export default SocialMedia;