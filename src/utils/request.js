import axios from 'axios'
import Config from '@/settings'
// import { Notification, MessageBox } from 'element-ui'
import { Notification } from 'element-ui'

const service = axios.create({
  baseURL: '/',
  timeout: Config.timeout
})

service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(response => {
  console.log('response', response)
  // 对响应数据做点什么
  const code = response.status
  if (code < 200 || code > 300) {
    Notification.error({
      title: response.message
    })
  } else {
    return response.data
  }
}, error => {
  console.log(error)
  for (const key in error) {
    console.log(key)
  }
  console.log(error.config)
  console.log(error.request)
  console.log(error.response)
  console.log(error.isAxiosError)
  console.log(error.toJSON)
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default service
