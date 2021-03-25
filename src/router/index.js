import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerOptions = [
  { path: "/", component: "Home" },
  { path: "/form", component: "BotSubmit" },
  { path: "*", component: "NotFound" }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../components/${route.component}.vue`)
  };
});

const router = new VueRouter({
  routes
})

export default router
