import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AlignContent from '../views/flexOptions/AlignContent.vue';
import AlignItems from '../views/flexOptions/AlignItems.vue';
import JustifyContent from '../views/flexOptions/JustifyContent.vue';

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
  {
    path: '/alignitems',
    name: 'alignItems',
    component: AlignItems,
  },
  {
    path: '/justifycontent',
    name: 'justifyContent',
    component: JustifyContent,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
