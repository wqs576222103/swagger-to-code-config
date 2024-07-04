import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '@/store';

import basic from './modules/basic';
// swagger-to-code import-route-start
// swagger-to-code import-route-end


Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  // swagger-to-code use-route-start
  // swagger-to-code use-route-end
  ...basic
];

const router = new VueRouter({ mode: 'hash', base: process.env.BASE_URL, routes });

router.beforeEach((to, from, next) => {

  store.commit('route/setFrom', {
    name: from.name,
    path: from.path,
    query: from.query,
    params: from.params,
    meta: from.meta
  });

  next();
});
export default router;
