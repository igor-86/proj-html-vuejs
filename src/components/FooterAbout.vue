<script>
import { store } from '../store';

export default {
    name: "FooterAbout",
    props: {
        item: Object
    },

    data() {
        return {
            store
        }
    },


}
</script>

<template>
    <div class="info">
        <ul>
            <li v-for="(about, index) in item.description" :key="index">
                <div class="head">
                    <h3>{{ about.title }}</h3>
                </div>
                <div class="content">
                    <p>{{ about.text }}</p>
                    <p>{{ about.develope }}</p>
                </div>
            </li>
        </ul>
    </div>


</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/general.scss" as*;

h3 {
    color: $c-bigtitle;
    text-transform: uppercase;
}

p {
    color: $c-smalltitle;
    line-height: 1.5rem;
}

i {
    color: white;
}
</style>