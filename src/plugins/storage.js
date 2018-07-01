// let _ = require('lodash')

/**
 * [nameKey 命名空间]
 * @type {String}
 */
let nameKey = 'rhol-'

function _get (key) {
  let data = JSON.parse(sessionStorage.getItem(nameKey + key))
  return data && data.data
}

function _set (key, value) {
  let data = {
    data: value
  }
  try {
    sessionStorage.setItem(nameKey + key, JSON.stringify(data))
  } catch (e) {
    // console.log(e);
  }
}

function _remove (keys) {
  if (Array.isArray(keys)) {
    keys.map(function (item) {
      sessionStorage.removeItem(nameKey + item)
    })
  } else if (typeof (keys) === 'string') {
    sessionStorage.removeItem(nameKey + keys)
  }
}

function _clear () {
  sessionStorage.clear()
}

// cookie
function _setCookie (name, value) {
  const Days = 0.5
  const exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}
function _getCookie (name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}
function _delCookie (name) {
  const exp = new Date()
  exp.setTime(exp.getTime() - 1)
  const cval = _getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

export default {
  getSessionStorage: _get,
  setSessionStorage: _set,
  clearSessionStorage: _clear,
  removeSessionStorage: _remove,
  setCookie: _setCookie,
  getCookie: _getCookie,
  delCookie: _delCookie
}
