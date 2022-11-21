<script>
import { store } from '../store';
export default {
    name: "Listpage",
    props: {
        menu: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="listpage">
        <ul class="wrapper">
            <li class="single" v-for="(item, index) in menu.list" :key="index">
                <a href="">{{ item.pagelist }}</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

ul {
    list-style-type: disc;
    padding: 0 .8rem;
    gap: 1rem 0;

    .single {
        width: calc(100% / 2);


        a {
            color: $c-smalltitle;
        }
    }
}
</style>