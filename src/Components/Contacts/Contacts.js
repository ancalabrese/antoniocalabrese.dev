import React, { PureComponent } from 'react'
import SocialFAB from '../UI/SocialMediaButton/SocialMediaButton'
import Style from './Contacts.module.css'
import { EmailRounded, Instagram, LinkedIn, GitHub, Twitter } from '@mui/icons-material'
import ApiClient, { API_ENDPOINTS } from '../../ApiClient/ApiClient'

class Contacts extends PureComponent {
    state = {
        loading: false,
        links: undefined
    }
    componentDidMount() {
        this.setState({ loading: true });
        ApiClient.get(API_ENDPOINTS.SOCIAL)
            .then(response => {
                this.setState({ links: response.data, loading: false });
            })
    }

    render() {
        return (
            <div id="contacts" className={Style.contacts}>
                <p>If you wish to talk or contribute connect with me!</p>
                <div className={Style.email}>

                    <SocialFAB href={this.state.links === undefined ? "#" : "mailto:".concat(this.state.links.gmail.url)} target="_blank">
                        <EmailRounded className={Style['email-icon']} /></SocialFAB> antoniobust@gmail.com

                </div>
                <div className={Style['social-fabs']}>
                    <SocialFAB link={this.state.links === undefined ? "#" : this.state.links.linkedin.url}>
                        <LinkedIn />
                    </SocialFAB>
                    <SocialFAB link={this.state.links === undefined ? "#" : this.state.links.github.url}>
                        <GitHub />
                    </SocialFAB>
                    <SocialFAB link={this.state.links === undefined ? "#" : this.state.links.ig.url}>
                        <Instagram />
                    </SocialFAB>
                    <SocialFAB link={this.state.links === undefined ? "#" : this.state.links.twitter.url}>
                        <Twitter />
                    </SocialFAB>
                </div>
            </div >
        )
    }
}

export default Contacts;