import React from 'react'
import Style from './Home.module.css'
import signature from '../../Assets/signature-cropped.png'

const Home = () => {
    return (
        <div id="home" className={Style.home}>
            <div >
                <span className={Style['background-container']} role="img" aria-hidden="true" alt="Antonio Calabrese"> </span>
            </div>
            <div className={Style.text}>
                <p className={Style.header}>
                    <span id={Style.H} className={[Style.animated, Style['slide-in-right']].join(' ')}>H</span><span id={Style.I} className={[Style['animated-fast'], Style['slide-in-left']].join(' ')}>i<span className={Style.highlight}>,</span></span>
                </p>
                <p className={Style.header}>
                    <span id={Style.name} className={[Style['animated-fast'], Style['slide-in-right']].join(' ')}>
                        I<span className={Style.highlight}>'</span>M ANTONIO<span className={Style.highlight}>.</span>
                    </span>
                </p>
                <p className={Style['sub-header']}>
                    <span id={Style['first-sub-header']} className={[Style['animated-fast'], Style['slide-in-left']].join(' ')}>
                        SOFTWARE DEVELOPER<span className={Style.highlight}>.</span>
                    </span>
                </p>
                <p className={Style['sub-header']}>
                    <span id={Style['second-sub-header']} className={[Style['animated-fast'], Style['slide-in-left']].join(' ')}>SURFER<span className={Style.highlight}>.</span></span>
                </p>
            </div>
            <div className={Style.signature}>
                <img src={signature} alt="Signature" />
            </div>
        </div>
    )
}

export default Home;