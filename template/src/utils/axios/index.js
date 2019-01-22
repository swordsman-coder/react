import axios from 'axios'
import { baseUrl } from '../../config'
import { notification } from 'antd';
import { login } from '../Session'
const Axios = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  responseType: "json",
  withCredentials: true // 是否允许带cookie这些
})
const openNotificationWithIcon = (desc) => {
  notification.error({
    message: 'error',
    description: desc,
  });
};
Axios.interceptors.response.use(data => {
  console.log('data',data.data);
  if (data.data.status_code !== 200) {
    openNotificationWithIcon(data.data.error)
    if (data.data.status_code === 401){
      setTimeout(() => {
        login()
      }, 2000);
    }
    return Promise.reject(data.data);
  }else{
    return Promise.resolve(data.data);
  }
}, err => {
  return Promise.reject(err);
})

export default Axios;
