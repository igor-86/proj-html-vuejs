<script>
import { store } from '../store';
export default {
    name: "BlogPreview",
    props: {
        article: Object
    },
    data() {
        store
    },
    methods: {
        getImage(url) {
            return new URL(url, import.meta.url).href;
        }
    },
}
</script>

<template>
    <div class="mini-card" v-for="(prev, index) in article.preview" :key="index">
        <img :src="getImage(`../assets/img/${prev.image}`)" alt="image">
        <div class="text">
            <h5>{{ prev.article }}</h5>
            <p>-{{ prev.date }}</p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.mini-card {
    display: flex;
    align-items: center;

    &:nth-child(2) {
        margin-top: .5rem;
    }

    img {
        width: 60px;
    }

    .text {
        padding: 0 .5rem;

        h5 {
            color: $c-bigtitle;
            font-size: 1.2rem;
        }

        p {
            color: $c-smalltitle;
            font-size: .9rem;
        }
    }
}
</style>