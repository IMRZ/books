import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/book1',
    component: require('@/views/Book1.vue').default
  },
  {
    path: '/book2',
    component: require('@/views/Book2.vue').default
  },
  {
    path: '/book3',
    component: require('@/views/Book3.vue').default
  },
  {
    path: '/book4',
    component: require('@/views/Book4.vue').default
  },
  {
    path: '/book5',
    component: require('@/views/Book5.vue').default
  },

  {
    path: '/car1',
    component: require('@/views/Car1.vue').default
  },
  {
    path: '/car2',
    component: require('@/views/Car2.vue').default
  },
  {
    path: '/car3',
    component: require('@/views/Car3.vue').default
  },
  {
    path: '/car4',
    component: require('@/views/Car4.vue').default
  },
];

const router = new VueRouter({
  routes
});

export default router;
