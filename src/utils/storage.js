// var _ = require('lodash')

/**
 * [nameKey 命名空间]
 * @type {String}
 */
var nameKey = 'rhol-'

/**
 * [_get 获取 localstroage 值]
 * @param  {[String]}   key [key 值]
 * @return {[All]}       [value 值]
 */
function _get (key) {
  var data = JSON.parse(sessionStorage.getItem(nameKey + key))
  return data && data.data
}

/**
 * [_set 存储 localstroage 值]
 * @param  {[String]}   key   [key 值]
 * @param  {[All]}   value [value 值]
 */
function _set (key, value) {
  var data = {
    data: value
  }
  try {
    sessionStorage.setItem(nameKey + key, JSON.stringify(data))
  } catch (e) {
    // console.log(e);
  }
}

/**
 * [_remove 删除内存中的数据]
 * @param  {[Object]}   keys [内存中的 key]
 */
function _remove (keys) {
  if (Array.isArray(keys)) {
    keys.map(function (item) {
      sessionStorage.removeItem(nameKey + item)
    })
  } else if (typeof (keys) === 'string') {
    sessionStorage.removeItem(nameKey + keys)
  }
}

/**
 * [_clear 清除所有的缓存数据]
 */
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
