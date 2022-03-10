import React from 'react'
import Style from './AboutMe.module.css'
import ReactGA from 'react-ga'

const AboutMe = (props) => {
    const clickHandler = (link) => {
        ReactGA.event({
            category: "CV check",
            action: "CV checked",
        });

        window.open(link, '_blank', 'noopener', 'me', 'noreferrer');
    }
    
    return (
        <div id="about-me" className={Style['about-me']}>
            <span className={[Style['color-animated'], Style['hello-world']].join(' ')}><p>Hello World!! :)</p></span>

            <span className={Style['sub-header']}><p>.~/$ cout &lt;&lt; whoami().condensed();</p></span>

            <div className={Style['animated-typewriter']}>
                <span><p>I'm Antonio</p></span>
                <span><p>I was born {new Date().getFullYear() - 1991} years ago in the sunnny <a target="_blank" rel="noopener noreferrer" href='https://www.google.com/maps/place/72100+Brindisi+BR,+Italia/@40.6422249,17.9009941,13z/data=!3m1!4b1!4m5!3m4!1s0x13467a3bc980ec6d:0x110cef7cc03daf9!8m2!3d40.6327278!4d17.9417616' className={Style['color-animated']}>Apulia, Brindisi Italy</a> &#127774;🏖</p></span>
                <span><p>I'm an Android Enterprise Parnter Engineer @Google.</p></span>
            </div>
            {/* <div className={Style['animated-typewriter']}>
                <span><p>I like creating stuff with code or bolts and screws.</p></span>
            </div> */}
            <div className={Style['animated-typewriter']}>
                <span><p>I hope you like my projects, if you want to get in touch <a href="#contacts" className={Style['color-animated']}>connect with me!</a></p></span>
                <span><p>If you want to hire me here is my <a href="#cv" onClick={() => clickHandler('https://drive.google.com/file/d/1moPy6O5y4-QvHeFGBvhiVQ8PoMlTFWr-/view?usp=sharing')} className={Style['color-animated']}>CV!</a></p></span>
            </div>
        </div>
    )

}

export default AboutMe;