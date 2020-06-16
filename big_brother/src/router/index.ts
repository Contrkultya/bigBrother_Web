import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Dashboard from '../components/Dashboard.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
    path: '/',
    name: 'login',
    component: Login,
},
{
    path: '/register',
    name: 'Register',
    component: Register,
},
{
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
}

];

const router = new VueRouter({
  routes,
});

export default router;
