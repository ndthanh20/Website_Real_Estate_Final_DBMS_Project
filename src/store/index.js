import Vue from "vue";
import Vuex from "vuex";
import 'es6-promise/auto'
import category from './modules/category'
import product from './modules/product'
import client from './modules/client'
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        category,
        product,
        client
    },
    strict: false
}); 