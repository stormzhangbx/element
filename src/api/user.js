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

export default { select }
