import Vue from 'vue';
import VueRouter from 'vue-router';
import Hero from '../views/Hero.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'hero',
    component: Hero,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
