<template>
    <div id="search">
        <div id="header">
            <h1>Tìm kiếm</h1>
            <h2>Tìm kiếm nhà lọc theo</h2>
        </div>
        <form id="search-form">
                <div id="search-form-filter">
                    <select ref="location" name="location" id="location" @change="updateSearch">
                        <option value="0">Hướng nhà</option>
                        <option value="1">Không xác định</option>
                        <option value="2">Đông</option>
                        <option value="3">Tây</option>
                        <option value="4">Nam</option>
                        <option value="5">Bắc</option>
                        <option value="6">Đông Bắc</option>
                        <option value="7">Đông Nam</option>
                        <option value="8">Tây Bắc</option>
                        <option value="9">Tây Nam</option>
                    </select>
                    <select ref="area" name="areas" id="areas" @change="updateSearch">
                        <option value="0">Khu vực</option>
                        <option value="1">TPHCM</option>
                        <option value="2">Hà Nội</option>
                        <option value="3">Hải Phòng</option>
                        <option value="4">Đà Nẵng</option>
                    </select>
                    <select ref="type" name="types" id="types" @change="updateSearch">
                        <option value="0">Loại BĐS</option>
                        <option value="1">Nhà</option>
                        <option value="2">Căn hộ</option>
                        <option value="3">Đất</option>
                        <option value="4">Mặt bằng</option>
                    </select>
                    <select ref="bedroom" name="bedrooms" id="bedrooms" @change="updateSearch">
                        <option value="0">Số phòng ngủ</option>
                        <option value="1">1 phòng ngủ</option>
                        <option value="2">2 phòng ngủ</option>
                        <option value="3">3 phòng ngủ</option>
                        <option value="4">4 phòng ngủ</option>
                        <option value="5">5 phòng ngủ</option>
                        <option value="6">6 phòng ngủ</option>
                    </select>
                </div>
                <div id="search-form-filter2">
                    <div>
                        <input ref="min" type="number" step="1" min="1000000" max="10000000000" placeholder="Giá thấp nhất" id="min">
                        <input ref="max" type="number" step="1" min="1000000" max="10000000000" placeholder="Giá cao nhất" id="max">
                    </div>
                </div>
        </form>
        <div id="paginator">
            <div
                v-for="page in totalPages"
                :key="page"
                :class="{'active': currentPage == page}"
                @click="updatePage(page)">
                {{ page }}
            </div>
        </div>
        <div id="search-results">
            <HomeCard v-for="home in homes" :key="home._id" :home="home"></HomeCard>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HomeCard from '../components/HomeCard.vue';

export default {
    components: {
        HomeCard,
    },
    created() {
        this.getLocations();
        this.getAreas();
        this.getTypes();
    },
    mounted() {
        this.updateSearch();
    },
    computed: mapState({
        homes: state => state.posts,
        locations: state => state.locations,
        areas: state => state.areas,
        types: state => state.types,
        currentPage: state => state.currentPage,
        totalPages: state => state.totalPages,
    }),
    methods: {
        ...mapActions([
            "searchPost",
            "getLocations",
            "getAreas",
            "getTypes",
        ]),
        updateSearch() {
            this.updatePage(1);
        },
        updatePage(page) {
            this.searchPost({ params: {
                page: page,
                location: this.$refs.location.value,
                value: this.$refs.area.value,
                type: this.$refs.type.value,
                bedroom: this.$refs.bedroom.value,
                ref: this.$refs.ref.value || '',
                price_from: this.$refs.min.value || 100000,
                price_to: this.$refs.max.value || 100000000,
            }});
    },
  }
}
</script>

<style lang="scss" scoped>
@mixin media-max($_max-width) {
    @media screen and (max-width: $_max-width) {
        &{ @content; }
    }
}

#search {
    #header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        color:black;
        h1 {
            margin-top: 10px;
            display: block;
            font-weight: bold;
            letter-spacing: -4px;
            text-transform: uppercase;
            text-align: center;
        }
    }
    #search-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 30px;
        
        #search-form-filter {
            display: flex;
            width: 80%;
            justify-content: space-between;
            flex-wrap: wrap;

            @include media-max(1200px) {
                justify-content: center;
            }
            select {
                background-color: rgb(249, 99, 50);
                color: white;
                padding: 15px;
                margin: 10px;
                width: 180px;
                border-radius: 50;
            }
        }
        #search-form-filter2 {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            div {
                width: 50%;
                min-width: 500px;
                display: flex;
                justify-content: center;
                align-items: center;

                input {
                    margin: 10px;
                    padding: 10px 18px 10px 18px;
                    border: 1px solid #e3e3e3;
                    border-radius: 20px;
                }
                input:focus {
                    border: 1px solid red;
                    border-radius: 20px;
                    outline: none;
                }
            }
        }
    }
    #paginator {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        margin-bottom: 30px;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
            width: 40px;
            height: 40px;
            border-radius: 50px;
            cursor: pointer;
        }

        .active {
            color: white;
            background: rgb(249, 99, 50);
        }
    }

    #search-results {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        @include media-max(1200px) {
            justify-content: center;
        }
        padding-left: 113px;
        padding-right: 113px;
    }
}
</style>