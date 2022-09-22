import request from './request'

export default {
    $post(url, data){
        return request({url, data, method: 'POST'})
    },
}