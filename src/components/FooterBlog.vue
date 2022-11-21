<script>
import { store } from '../store';
import Blogpreview from './Blogpreview.vue';
export default {
    name: "FooterBLog",
    props: {
        prev: Object
    },
    data() {
        store
    },
    components: {
        Blogpreview

    },
}
</script>

<template>
    <div class="cont-blog">
        <ul>
            <li v-for="(blog, index) in prev.blog" :key="index">
                <div class="head">
                    <h3>{{ blog.title }}</h3>
                </div>
                <div class="content">
                    <Blogpreview :article="blog" />
                </div>
            </li>
        </ul>

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

h3 {
    color: $c-bigtitle;
    text-transform: uppercase;
}
</style>