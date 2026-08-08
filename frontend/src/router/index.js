import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CommunityView from '../views/CommunityView.vue'
import PropertiesView from '../views/PropertiesView.vue'
import ContactView from '../views/ContactView.vue'
import CustomView from '../views/CustomView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: '首页' } },
    { path: '/community', name: 'community', component: CommunityView, meta: { title: '用户社区' } },
    { path: '/properties', name: 'properties', component: PropertiesView, meta: { title: '房源' } },
    { path: '/contact', name: 'contact', component: ContactView, meta: { title: '联系' } },
    { path: '/custom', name: 'custom', component: CustomView, meta: { title: '定制' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} · 智慧云居` : '智慧云居 · 高端智能公寓社区'
})

export default router