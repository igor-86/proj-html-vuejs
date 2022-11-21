<script>
import { store } from '../store';
import ListPage from './ListPage.vue';
export default {
    name: "FooterPages",
    props: {
        page: Object
    },
    data() {
        return {
            store
        }
    },
    components: {
        ListPage
    },
}
</script>

<template>
    <div class="pagelist">
        <ul>
            <li v-for="(item, index) in page.pagesList" :key="index">
                <div class="head">
                    <h3>{{ item.title }}</h3>
                </div>
                <div class="content">
                    <ListPage :menu="item" />
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

p {
    color: white;
}
</style>