<template>
    <div id="home">
        <div id="fullscreen-video">
            <div class="header">
                <h1>Homes</h1>
                <h2>Search homes</h2>
            </div>
            <video onloadeddata="this.play();" loop playsinline muted>
                <source src="/video/video.mp4" type="video/mp4">
            </video>
        </div>
        <div id="company-info">
            <div id="company-info-image">
                <img src="/images/home-company-info.jpg" />
            </div>
            <div id="company-info-text">
                <h1>About the company</h1>
                <h2>Real estate</h2>
                <p>
                    - Insert here a nice text about the company services -
                </p>
            </div>
        </div>
        <div id="home-listing">
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
        this.getPosts();
    },
    computed: mapState({
        homes: state => state.posts,
    }),
    methods: {
    ...mapActions([
      "getPosts"
    ]),
  }
}
</script>

<style lang="scss" scoped>
#fullscreen-video {
    position: relative;
    float: left;
    width: 100vw;
    height: 100vh;
    margin-bottom: 113px;
    background: url('/video/video.jpg');
    background-position: 0 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    video {
        position: relative;
        top: 0;
        left: 0;
        z-index: 50;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    .header {
        position: absolute;
        float: left;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: white;
        text-shadow: 1px 1px 2px lightblue, 0 0 1em lightblue, 0 0 0.2em lightblue;
        h1 {
            display: block;
            font-size: 100px;
            font-weight: bold;
            letter-spacing: -4px;
            text-transform: uppercase;
        }
        h2 {
            font-size: 16px;
        }
    }
}

@mixin media-max($_max-width) {
    @media screen and (max-width: $_max-width) {
        &{ @content; }
    }
}
#company-info {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    div {
        margin-bottom: 113px;
    }
    #company-info-image {
        width: 50%;
        @include media-max(800px) {
            width: 100%;
        }
        img {
            width: 100%;
            height: 380px;
        }
    }
    #company-info-text {
        padding-left: 113px;
        padding-right: 89px;
        h1 {
            font-size: 35px;
            font-weight: bold;
            line-height: 42px;
            color: rgb(17, 17, 17);
        }
        h2 {
            font-size: 12px;
            font-weight: bold;
            line-height: 15px;
            text-transform: uppercase;
            color: rgb(154, 154, 154);
        }
    }
}

#home-listing {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @include media-max(1200px) {
        justify-content: center;
    }
    padding-left: 113px;
    padding-right: 113px;
}
</style>