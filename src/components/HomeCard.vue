<template>
    <div class="home-card">
        <div class="home-card-carousel">
            <img class="home-card-carousel-img" :src="home.images[0]">
        </div>
        <div class="home-card-description">
            <h1>{{ home.title }}</h1>
            <h2>{{ home.location.title }}</h2>
            <router-link :to="{ name: 'product', params: {id: home._id}}">Read more</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['home'],
    data() {
        return {
            images: [],
        };
    },
    created() {
        this.images = [];
        for (let i = 0; i < this.home.images.length; i++) {
            this.images.push(`<img class="home-card-carousel-img" src="${this.home.images[i]}">`);
        }
    }
}
</script>

<style>
.home-card-carousel-img {
    width: 459px;
    height: 318px;
}
</style>

<style lang="scss" scoped>

.home-card {
    display: flex;
    flex-direction: column;
    width: 459px;
    margin-bottom: 54px;
    .home-card-carousel {
        height: 318px;  
        background: lightgray;
    }
    .home-card-description {
        margin-top: 10px;
        h1 {
            font-size: 1.1em;
            line-height: 1.4em;
            text-transform: uppercase;
        }
    }
}

</style>