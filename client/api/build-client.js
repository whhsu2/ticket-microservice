import axios from 'axios'

const axiosApi = ({ req }) => {
    if ( typeof window === 'undefined') {
        // We are on the server
        return axios.create({
            baseURL: 'http://www.moreezus.shop/',
            headers: req.headers
        })
    } else {
        // we are on the browser
        return axios.create({
            baseURL: '/',
        })
    }
}

export default axiosApi