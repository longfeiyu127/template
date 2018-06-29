import store from '@/plugins/store'
export function routerBeforeEachFunc (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  const toIndex = window.GLOBAL.history.getItem(to.path)
  const fromIndex = window.GLOBAL.history.getItem(from.path)
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      // 判断是否是ios左滑返回
      if (!window.GLOBAL.isPush && (Date.now() - window.GLOBAL.endTime) < 377) {
        store.commit('updateDirection', {direction: ''})
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++window.GLOBAL.historyCount
    window.GLOBAL.history.setItem('count', window.GLOBAL.historyCount)
    to.path !== '/' && window.GLOBAL.history.setItem(to.path, window.GLOBAL.historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
  next()
}

export function routerAfterEachFunc (to, from, next) {
  window.GLOBAL.isPush = false
  store.commit('updateLoadingStatus', {isLoading: false})
}
