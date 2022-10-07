import {createRouter, createWebHistory} from 'vue-router'
import Counter from '../views/Counter.vue'
import About from '../views/About.vue'
import Posts from '../views/Posts.vue'
import PostDetails from '../views/PostDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/details/post/:id',
    name: 'PostDetails',
    component: PostDetails,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
