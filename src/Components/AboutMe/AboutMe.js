import React from 'react'
import Style from './AboutMe.module.css'
import Aux from '../Aux/Aux'

const AboutMe = (props) => {
    return (
        <div className={Style['about-me']}>
            <p><b>Hello World!! :)</b></p>
            <p>I'm Antonio, I was born {new Date().getFullYear() - 1991} years ago in the sunnny Apulia, Italy &#127774;🏖 currently based in London.</p>
            <p>I like creating stuff, whether is with code or bolts and screws.</p>
            <p>I hope you enjoy my projects, if you wish to talk or contribute <a href="#">connect with me!</a></p>
        </div>
    )

}

export default AboutMe;