import Axios from 'axios'

const ApiClient = Axios.create({
    baseURL: 'https://personalwebsite-eaf2d.firebaseio.com/'
}); 

export default ApiClient; 