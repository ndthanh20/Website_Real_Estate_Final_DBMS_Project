import axios from 'axios'
const url = process.env.VUE_APP_BACKEND_URL+'/';
const state = {
  totalPages: 0,
  totalCount: 0,
  currentPage: 1,
  posts: [],
  post:[]
}

// getters
const getters = {

}
// mutations
const mutations = {
    getPosts(state, data) {
      if (!data) {
        state.posts = [];
        state.totalPages = 0;
        state.totalCount = 0;
        state.currentPage = 1;
      }
      else {
        let list=[];
        data.data.forEach((item) => {
          if (item['images']) {
            for (let i=0; i<item['images'].length; i++) {
              item['images'][i] =  {src: item['images'][i]};
            }
          }
          list.push(item);
        });
        state.posts = list;
        if (data.total)
        {
          state.totalCount = data.total;
          state.totalPages = Math.ceil(data.total/10);
        }
        state.currentPage = 1;
      }
    },
    getPost(state, data) {
      if (!data) 
        state.post = null;
      else {
        let item = data;
        if (item['images']) {
          for (let i=0; i<item['images'].length; i++) {
            item['images'][i] = item['images'][i];
          }
        }
        state.post = item;
      }
    },
    searchPost(state, data) {
      if (!data) {
        state.posts = [];
        state.totalPages = 0;
        state.totalCount = 0;
        state.currentPage = 1;
      }
      else {
        let list=[];
        data.data.forEach((item) => {
          if (item['images']) {
            for (let i=0; i<item['images'].length; i++) {
              item['images'][i] =  {src: item['images'][i]};
            }
          }
          list.push(item);
        });
        state.posts = list;
        if (data.total)
        {
          state.totalCount = data.total;
          state.totalPages = Math.ceil(data.total/10);
        }
        state.currentPage = 1;
      }
    }
};
// actions
const actions = {
    getPosts({commit}, params) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'product?page='+params.page).then((response) => {
            commit('getPosts', response.data);
        });
    },
    getPost({commit}, params) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'product'+params.type+'/'+params.id).then((response) => {
            commit('getPost', response.data);
        });
    },
    searchPost({commit}, params) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'product?page='+params.page+'&location='+params.location+'&area='+params.area+'&type='+params.type+'&bedroom='+params.bedrooms+'&ref_key='+params.ref+'&from_price='+params.price_from+'&to_price='+params.price_to).then((response) => {
            commit('searchPost', response.data);
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