import Axios from 'axios'

const ApiClient = Axios.create({
    baseURL: 'https://personalwebsite-eaf2d.firebaseio.com/'
});

 export const API_ENDPOINTS = {
    PROJECTS : '/Projects.json',
    SOCIAL : '/Social.json'
};

export default ApiClient; 
