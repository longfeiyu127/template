var _ = require('lodash')

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
  if (_.isArray(keys)) {
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

module.exports = {
  get: _get,
  set: _set,
  clear: _clear,
  remove: _remove
}
