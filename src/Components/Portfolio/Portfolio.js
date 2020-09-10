import React, { PureComponent } from 'react'
import Style from './Portfolio.module.css'
import ComingSoon from '../ComingSoon/ComingSoon'
import Project from '../UI/CardElement/CardElement'
import Aux from '../UI/Aux/Aux'
import ApiClient, { API_ENDPOINTS } from '../../ApiClient/ApiClient'
import ReactGA from 'react-ga'

class Portfolio extends PureComponent {
    state = {
        loading: false,
        projects: undefined
    };

    onProjectSelectedHandler = (element) => {
        ReactGA.event({
            category: "Project check out",
            action: "Click on project item: " + element['name'],
        });
        window.open(element['url'], '_blank');
    }

    componentDidMount() {
        this.setState({ loading: true });
        ApiClient.get(API_ENDPOINTS.PROJECTS)
            .then((response) => {
                this.setState({ projects: response.data, loading: false });
            });
    }

    render() {
        const projects = [];
        if (this.state.projects !== undefined && this.state.loading !== true) {
            projects.push(Object.keys(this.state.projects).map((element, index) => {
                return <Project clicked={() => this.onProjectSelectedHandler(this.state.projects[element])} project={this.state.projects[element]} key={index} />
            }));
        }
        return (
            <Aux>
                <div id="portfolio" className={Style['portfolio']}>
                    {projects}
                </div>
                <ComingSoon />
            </Aux>

        )
    }
}

export default Portfolio;