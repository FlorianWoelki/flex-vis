import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AlignContent from '../views/flexOptions/AlignContent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/aligncontent',
    name: 'alignContent',
    component: AlignContent,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
