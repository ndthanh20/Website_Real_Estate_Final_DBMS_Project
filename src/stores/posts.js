import Vapi from "vuex-rest-api";

const posts = new Vapi({
        baseURL: "http://13.58.114.69:3000/api",
        //baseURL: "http://localhost:3000/api",
        state: {
            totalPages: 0,
            totalCount: 0,
            currentPage: 1,
            post: {
                title: 'null',
                price: 'null',
                description: 'null',
            },
            posts: [],
            locations: [],
            areas: [],
            types: []
        }
    })
    .get({
        action: "getPosts",
        property: "posts",
        path: ({ page }) => `/product/?page=${page}`,
        onSuccess(state, payload, axios, { params, data }) {

            if (!payload.data) return;
            let list = [];
            payload.data.data.forEach((item) => {
                /**if (item['images']) {
                  for (let i=0; i<item['images'].length; i++) {
                    item['images'][i] =  {src: 'https://media.inmobalia.com/imgV1/'+item['images'][i]};
                  }
                }**/
                let duplicate = false;
                for (let i = 0; i < list.length; i++) {
                    if (list[i]._id == item._id) {
                        duplicate = true;
                        break;
                    }
                }
                if (!duplicate) {
                    list.push(item);
                }
                console.log(item);
            });
            state.posts = list;

            if (payload.data.total) {
                state.totalCount = payload.data.total;
                state.totalPages = Math.ceil(payload.data.total / 10);
            }
            state.currentPage = 1;
        },
        onError(state, error, axios, { params, data }) {
            state.posts = [];
            state.totalPages = 0;
            state.totalCount = 0;
            state.currentPage = 1;
        }
    })
    .get({
        action: "getPost",
        property: "post",
        path: ({ id }) => `/productapi/${id}`,
        onSuccess(state, payload, axios, { params, data }) {
            console.log(payload);
            if (!payload.data) return;
            let item = payload.data;
            /**if (item['images']) {
              for (let i=0; i<item['images'].length; i++) {
                item['images'][i] = 'https://media.inmobalia.com/imgV1/'+item['images'][i];
              }
            }**/
            state.post = item;
        },
        onError(state, error, axios, { params, data }) {
            state.post = null;
        }
    })
    .get({
        action: "searchPost",
        property: "post",
        path: ({ page, location, area, type, bedrooms, ref, price_from, price_to }) => `/product?page=${page}&location=${location}&area=${area}&type=${type}&bedroom=${bedrooms}&ref_key=${ref}&from_price=${price_from}&to_price=${price_to}`,
        onSuccess(state, payload, axios, { params, data }) {
            if (!payload.data) return;
            let list = [];
            payload.data.data.forEach((item) => {
                list.push(item);
            });
            state.posts = list;
            if (payload.data.total) {
                state.totalCount = payload.data.total;
                state.totalPages = Math.ceil(payload.data.total / 10);
            }
        },
        onError(state, error, axios, { params, data }) {
            state.posts = [];
            state.totalPages = 0;
            state.totalCount = 0;
            state.currentPage = 1;
        }
    })
    .get({
        action: "getLocations",
        property: "locations",
        path: "/categlocation",
        onSuccess(state, payload, axios, { params, data }) {
            if (!payload.data) return;
            state.locations = payload.data;
        },
        onError(state, error, axios, { params, data }) {
            state.locations = [];
        }
    })
    .get({
        action: "getAreas",
        property: "areas",
        path: "/categarea",
        onSuccess(state, payload, axios, { params, data }) {
            if (!payload.data) return;
            state.areas = payload.data;
        },
        onError(state, error, axios, { params, data }) {
            state.areas = [];
        }
    })
    .get({
        action: "getTypes",
        property: "types",
        path: "/categtype",
        onSuccess(state, payload, axios, { params, data }) {
            if (!payload.data) return;
            state.types = payload.data;
        },
        onError(state, error, axios, { params, data }) {
            state.types = [];
        }
    })
    .getStore();

export default posts;