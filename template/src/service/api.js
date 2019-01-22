import server from '../utils/axios';
import { baseUrl } from '../config'

export const ezrPost = (url, data) => {
    return server({
        url: baseUrl+url,
        method: 'POST',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        data: data
    })
}
export const ezrGet = (url, data) => {
    return server({
        url: baseUrl + url,
        method: 'GET',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
}