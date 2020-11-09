<template>
    <div id="project">
        <div id="header">
            <form>
                <div class="column">
                <input type="text" name="search" id="search" placeholder="Nhập tên dự án, chủ đầu tư ..." v-model="search">
                <button>Tìm kiếm</button>
            </div>
            </form>
        </div>
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
                price_from: this.$refs.min.value || 1000000,
                price_to: this.$refs.max.value || 10000000000,
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

#project {
    #header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        color:black;
        .column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 45%;
            min-width: 400px;
            margin-bottom: 89px;
            margin-top: 80px;
            input {
                padding: 10px 18px 10px 18px;
                border: 1px solid #e3e3e3;
                border-radius: 20px;
            }
            input:focus {
                border: 1px solid red;
                border-radius: 20px;
                outline: none;
            }
            textarea {
                padding: 10px 18px 10px 18px;
                border: 1px solid #e3e3e3;
                border-radius: 20px;
            }
            textarea:focus {
                border: 1px solid red;
                border-radius: 20px;
                outline: none;
            }
            button {
                width: 150px;
                padding: 10px;
                background-color:#f96332;
                color: white;
                border-width: 2px;
                font-weight: 400;
                font-size: 1.0em;
                line-height: 1.35em;
                margin: 10px 1px;
                border: none;
                border-radius: .1875rem;
                padding: 11px 22px;
                margin-top: 15px;
            }
            button, button:hover, button:active {
                outline: none;
                cursor: pointer;
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