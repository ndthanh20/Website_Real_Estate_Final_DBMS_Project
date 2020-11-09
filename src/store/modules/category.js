import axios from 'axios'
const url = process.env.VUE_APP_BACKEND_URL+'/';
const state = {
    locations: [],
    areas: [],
    types: [],
    is_contact: false
}

// getters
const getters = {

}
// mutations
const mutations = {
    getLocations(state, data) {
        data.forEach(item=>{
            if (item.location_id=='') {
                item._id = '';
            }
        });
        state.locations = data;
        //console.log(data);
    },
    getAreas(state, data) {
        data.forEach(item=>{
            if (item.area_id=='') {
                item._id = '';
            }
        });
        state.areas = data;
        //console.log(data);
    },
    getTypes(state, data) {
        data.forEach(item=>{
            if (item.type_id=='') {
                item._id = '';
            }
        });
        state.types = data;
        //console.log(data);
    },
    saveContact(state) {
        state.is_contact = true;
    }
};
// actions
const actions = {
    getLocations({commit}) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'categlocation').then((response) => {
            commit('getLocations', response.data);
        });
    },
    getAreas({commit}) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'categarea').then((response) => {
            commit('getAreas', response.data);
        });
    },
    getTypes({commit}) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.get(url+'categtype').then((response) => {
            commit('getTypes', response.data);
        });
    },    
    saveContact({commit}, params) {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.post(url+'usercustomer', params).then((response) => {
            commit('saveContact');
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