import Vue from 'vue'
import Router from 'vue-router'
import entry from 'components/pageEntry'
import chapter from 'components/pageChapter'
import load from 'components/pageLoad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entry',
      component: entry
    }, {
      path: '/load',
      name: 'load',
      component: load
    }, {
      path: '/chapter',
      name: 'chapter',
      component: chapter
    }
  ]
})
