import Vue from 'vue'

// 电话加空格
Vue.filter('tel', function(val, flag) {
  let valArr = val.split('')
  let result = valArr.map((item, index, arr) => {
    return index === 3 || index === 7 ? ' ' + item : item
  })
  let res = result.join('')
  return res
})

// 提取性别
Vue.filter('sex', function(val, flag) {
  let sex = val % 2 === 0 ? '女性' : '男性'
  return sex
})

