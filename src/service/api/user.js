import ajax from '../../utils/axiosHttp'

function login (data) {
  let options = {
    method: 'POST',
    contentType: 'json',
    data
  }
  return ajax('/ols/app/login', options)
}

export default {
  login
}
