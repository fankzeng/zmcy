import Vue from 'vue'
import app from './index'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import all from './components/all'
import sort from './components/sort'
//import Group from 'vux/src/components/group'
//import Cell from 'vux/src/components/cell'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter();
router.map({
    "/all": {
        component: all
    },
    "/sort": {
        component: sort
    }
})

router.redirect({
  '*': '/all'
})

router.start(app,'app');
