import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components:{
        default: () => import('@/views/HomeView.vue'),
        Navbar: () => import('@/components/Navbar.vue')
      } 
    },
  ],
});

export default router;
