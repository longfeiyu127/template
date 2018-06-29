// 上拉加载插件
class Scroll {
    constructor (viewbox, parent, child, cb, autoLoad) {
      this.parent = parent
      this.child = child
      this.viewbox = viewbox
      this.cb = cb
      autoLoad && cb()
    }
    addEvent () {
      this.newscrollfn = this.scrollBottom.bind(this)// 并保存新函数以便移除事件监听
      this.parent.addEventListener('scroll', this.newscrollfn)
    }
    removeEvent () {
      this.parent.removeEventListener('scroll', this.newscrollfn)
      this.cb()
    }
    scrollBottom () {
      let parentHeight = this.parent.offsetHeight + this.viewbox.getScrollTop()
      let childHeight = this.child.offsetHeight
      if (parentHeight >= childHeight) {
        this.removeEvent()
      }
    }
  }
  export function ScrollPlugin(vue) {
    vue.prototype.$scrollPlugin = Scroll
  }
  