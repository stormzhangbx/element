import request from '@/utils/request'

export function select (id) {
  return request({
    method: 'get',
    url: '/api/user',
    params: {
      id
    }
  })
}

export function getCode () {
  return request({
    method: 'get',
    url: '/icity/sys/getCheckCode'
  })
}
export default { select, getCode }
