import React, { Component } from 'react'
import Style from './Portfolio.module.css'
import ComingSoon from '../ComingSoon/ComingSoon'
import Project from '../UI/CardElement/CardElement'
import ApiClient, { API_ENDPOINTS } from '../../ApiClient/ApiClient'

class Portfolio extends Component {
    state = {
        loading: false,
        projects: undefined
    };

    onProjectSelectedHandler = (id) => {

    }

    componentDidMount() {
        this.setState({ loading: true });
        ApiClient.get(API_ENDPOINTS.PROJECTS)
            .then((response) => {
                console.log(response);
                this.setState({ projects: response.data, loading: false });
            });
    }

    render() {
        let projects = <ComingSoon />;
        if (this.state.loading != true || this.state.projects != undefined) {
            // projects.push(
            // Object.keys(this.state.projects).map(
            // k => {
            //     return this.state.projects[k]
            //         .map((element, index) => {
            //             return <Project key={index} projectSelectedHandler={this.onProjectSelectedHandler(index)} title={element.title} />
            //         });
            // }
            // )
            // );
        }
        return (
            <div id="portfolio" className={Style['portfolio']}>
                {projects}
            </div>

        )
    }
}

export default Portfolio;