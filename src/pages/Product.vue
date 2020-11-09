<template>
    <div id="product">
        <div id="header">
            <div id="title">
                <h1>{{ home.title }}</h1>
            </div>
            <carousel :data="images"></carousel>
        </div>
        <div id="content">
            <h2>
                {{ home.price.toLocaleString(undefined, {style:'currency', currency: home.currency}) }}
            </h2>
            <div id="features">
                <span class="reference">{{ home.ref_key }}</span>
                <span class="bedrooms">{{ home.bedroom }}</span>
                <span class="bathrooms">{{ home.bathroom }}</span>
                <span class="squares">{{ home.square }}</span>
                <span class="outside">{{ home.outside }}</span>
            </div>
            <div id="description" v-html="home.description">
            </div>
        </div>
        <div id="gallery">
            <img :src="image" :key="image" v-for="image in home.images" />
        </div>
        <div id="additionals">
            <h1>Additional features</h1>
            <ul>
                <!-- todo : feature content -->
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    props: ['id'],
    data() {
        return {
            images: [],
        };
    },
    async created() {
        await this.getPost({ params: {id: this.id} });
        this.images = [];
        for (let i = 0; i < this.home.images.length; i++) {
            this.images.push(`<img class="carousel-img" src="${this.home.images[i]}">`);
        }
    },
    computed: mapState({
        home: state => state.post,
    }),
    methods: {
        ...mapActions([
        "getPost"
        ])
    }
}
</script>

<style>
.carousel-img {
    width: 100vw;
    height: 100vh;
}
</style>

<style lang="scss" scoped>

@mixin media-max($_max-width) {
    @media screen and (max-width: $_max-width) {
        &{ @content; }
    }
}

#product {
    #header {
        position: relative;
        width: 100vw;
        height: 100vh;
        margin-bottom: 89px;
        background: rgb(36, 156, 220);
        #title {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            padding: 20px;
            z-index: 10;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            h1 {
                color: white;
                display: block;
                font-weight: bold;
                letter-spacing: -4px;
                text-transform: uppercase;
                text-align: center;
            }
        }
    }
    #content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 89px;
        h1 {
            font-size: 3.5em;
            font-weight: 700;
            line-height: 1.15;
        }
        h2 {
            font-size: 1.825em;
            font-weight: 400;
            line-height: 1.4em;
        }
        #features {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            .reference {
                background: rgb(249, 99, 50);
                color: white;
                padding: 5px;
            }
            .bedrooms:before {
                content: 'bedroom: ';
                padding-left: 10px;
                font-weight: bolder;
            }
            .bathrooms:before {
                content: 'bathroom: ';
                padding-left: 10px;
                font-weight: bolder;
            }
            .squares:before {
                content: 'squares: ';
                padding-left: 10px;
                font-weight: bolder;
            }
            .outside:before {
                content: 'outside: ';
                padding-left: 10px;
                font-weight: bolder;
            }
        }
        #description {
            margin-top: 39px;
            margin-left: 330px;
            margin-right: 330px;

            @include media-max(800px) {
            margin-left: 30px;
            margin-right: 30px;
            }
            font-size: 1.2em;
            font-weight: 400;
            line-height: 1.61em;
        }
    }
    #gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 89px;
        margin-left: 73px;
        margin-right: 73px;
        img {
            box-sizing: border-box;
            width: 400px;
            height: 277px;
            margin: 22.5px;
        }
    }
    #additionals {
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
            font-size: 1.825em;
            line-height: 1.4em;
            text-transform: uppercase;
        }
    }
}
</style>