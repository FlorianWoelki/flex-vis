import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AlignContent from '../views/flexOptions/AlignContent.vue';
import AlignItems from '../views/flexOptions/AlignItems.vue';
import JustifyContent from '../views/flexOptions/JustifyContent.vue';
import AlignSelf from '../views/flexOptions/AlignSelf.vue';
import FlexDirection from '../views/flexOptions/FlexDirection.vue';
import FlexProperty from '../views/flexOptions/FlexProperty.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/flexdirection',
    name: 'flexDirection',
    component: FlexDirection,
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
  {
    path: '/alignself',
    name: 'alignSelf',
    component: AlignSelf,
  },
  {
    path: '/flex',
    name: 'flexProperty',
    component: FlexProperty,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
