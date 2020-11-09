import Vue from "vue";
import Router from "vue-router";
import Contact from "./pages/Contact.vue";
import Home from "./pages/Home.vue";
import Product from "./pages/Product.vue";
import Search from "./pages/Search.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/product/:id",
      name: "product",
      component: Product,
      props: true
    }
  ],
});

export default router;
