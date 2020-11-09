import axios from 'axios'
const url = process.env.VUE_APP_BACKEND_URL+'/';
const state = {
  posts: [],
  client: [],
}

// getters
const getters = {

}
// mutations
const mutations = {
    getClient(state, data) {
        if (!data) {
            state.posts = [];
            state.client = [];
        }
        else {
            let list=[];
            data.products_m.forEach((item) => {
                if (item['images']) {
                    for (let i=0; i<item['images'].length; i++) {
                        item['images'][i] =  {src: item['images'][i]};
                    }
                }
                list.push(item);
            });
            data.products_a.forEach((item) => {
                if (item['images']) {
                    for (let i=0; i<item['images'].length; i++) {
                        item['images'][i] =  {src: item['images'][i]};
                    }
                }
                list.push(item);
            });
            state.posts = list;
            state.client = data.customer;
        }
    }
};
// actions
const actions = {
    getClient({commit}, params) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'customerpage/'+params.id).then((response) => {
            commit('getClient', response.data);
        });
    }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}