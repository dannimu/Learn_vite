//封装axios 请求
import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: '/', // url = base url + request url
    timeout: 30000, // request timeout (ms)
})

// request interceptor
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.error(error)
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default service