import axios from 'axios'

const axiosApi = ({ req }) => {
    if ( typeof window === 'undefined') {
        // We are on the server
        return axios.create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/',
            headers: req.headers
        })
    } else {
        // we are on the browser
        return axios.create({
            baseURL: 'http://moreezus.shop/',
        })
    }
}

export default axiosApi