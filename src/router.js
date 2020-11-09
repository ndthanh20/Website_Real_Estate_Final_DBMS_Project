import Vue from "vue";
import Router from "vue-router";
import Contact from "./pages/Contact.vue";
import Home from "./pages/Home.vue";
import Product from "./pages/Product.vue";
import Search from "./pages/Search.vue";
import Buy from "./pages/Buy.vue";
import Rent from "./pages/Rent.vue";
import Login from "./pages/Login.vue";
import Agency from "./pages/Agency.vue";
import Project from "./pages/Project.vue";

Vue.use(Router);

const router = new Router({
    routes: [{
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
            path: "/buy",
            name: "buy",
            component: Buy,
        },
        {
            path: "/rent",
            name: "rent",
            component: Rent,
        },
        {
            path: "/agency",
            name: "agency",
            component: Agency,
        },
        {
            path: "/project",
            name: "project",
            component: Project,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
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