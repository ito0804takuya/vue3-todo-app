import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import VOn from '../views/VOn.vue'
import VBind from '../views/VBind.vue'
import VIfAndVFor from '../views/VIfAndVFor.vue'
import VModel from '../views/VModel.vue'
import SimpleComponent from '../views/SimpleComponent.vue'
import FetchData from '../views/FetchData.vue'
import TreeView from '../views/TreeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/hello-world',
    name: '',
    component: HelloWorld
  },
  {
    path: '/v-on',
    name: '',
    component: VOn
  },
  {
    path: '/v-bind',
    name: '',
    component: VBind
  },
  {
    path: '/v-if',
    name: '',
    component: VIfAndVFor
  },
  {
    path: '/v-model',
    name: '',
    component: VModel
  },
  {
    path: '/simple-component',
    name: '',
    component: SimpleComponent
  },
  {
    path: '/fetch-data',
    name: '',
    component: FetchData
  },
  {
    path: '/tree',
    name: '',
    component: TreeView
  }
  // あと、やるやつ
  // todo mvc

  // crud
  //
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
