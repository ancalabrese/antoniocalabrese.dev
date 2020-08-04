import React from 'react'
import Style from './Home.module.css'
import signature from '../../Assets/signature.png'

const Home = () => {
    return (
        <div className={Style.home}>
            <div className={Style.text}>
                <p className={Style.header}>Hi<span>,</span></p>
                <p className={Style.header}> I<span>'</span>M ANTONIO<span>.</span></p>
                <p className={Style['sub-header']}>SOFTWARE DEVELOPER<span>.</span></p>
                <p className={Style['sub-header']}>SURFER<span>.</span></p>
            </div>
            <div className={Style.background} />
            <div className={Style.signature}>
                <img src={signature} alt="Signature"/>
            </div>
        </div>
    )
}

export default Home;