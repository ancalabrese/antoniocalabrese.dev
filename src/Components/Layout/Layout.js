import React, { Component } from 'react'
import Toolbar from '../UI/Toolbar/Toolbar'
import AboutMe from '../AboutMe/AboutMe'
import Style from './Layout.module.css'
import ComingSoon from '../ComingSoon/ComingSoon'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'

class Layout extends Component {

    render() {
        return (
            <div className={Style.layout}>
                <Toolbar className={Style.layoutElement} />
                {/* <div className={Style['main-content']}> */}
                    <main>
                        <Home/>
                        <AboutMe />
                        <ComingSoon />
                    </main>
                    <footer>
                        {/* <Contact /> */}
                    </footer>
                {/* </div> */}
            </div>
        )
    }
}

export default Layout;