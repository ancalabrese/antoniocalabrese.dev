import React from 'react'
import Style from './AboutMe.module.css'

const AboutMe = (props) => {
    return (
        <div id="about-me" className={Style['about-me']}>
            <span className={[Style['color-animated'], Style['hello-world']].join(' ')}><p>Hello World!! :)</p></span>

            <span className={Style['sub-header']}><p>.~/$ cout &lt;&lt; whoami().condensed();</p></span>

            <div className={Style['animated-typewriter']}>
                <span><p>I'm Antonio</p></span>
                <span><p>I was born {new Date().getFullYear() - 1991} years ago in the sunnny Apulia, Italy &#127774;🏖</p></span>
            </div>
            <div className={Style['animated-typewriter']}>
                <span><p>I like creating stuff with code or bolts and screws.</p></span>
            </div>
            <div className={Style['animated-typewriter']}>
                <span><p>I hope you like my projects, if you want to get in touch <a href="#contacts" className={Style['color-animated']}>connect with me!</a></p></span>
            </div>
        </div>
    )

}

export default AboutMe;