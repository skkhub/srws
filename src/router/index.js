import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import entry from 'components/entry'
import chapter from 'components/chapter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entry',
      component: entry
    }, {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
      beforeEnter (to, from, next) {
        console.log(to)
        console.log(from)
        console.log(next)
        next()
      }
    }, {
      path: '/chapter',
      name: 'chapter',
      component: chapter
    }
  ]
})
// .beforeEach((to, from, next) => {
//   console.log('全局的钩子调用')
//   next()
// })
