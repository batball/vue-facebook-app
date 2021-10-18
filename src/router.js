import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";
import Profile from "./components/Profile.vue";
import Change from "./components/Change.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/change",
    name: "change",
    component: Change,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;