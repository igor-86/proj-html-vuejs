<script>
import { store } from '../store';
export default {
    name: "FooterContact",
    props: {
        contacts: Object
    },
    data() {

        return {
            store
        }
    },
    components: {

    },
}
</script>

<template>
    <div class="contact">
        <ul>
            <li v-for="(item, index) in contacts.contact" :key="index">
                <div class="head">
                    <h3>{{ item.title }}</h3>
                </div>
                <div class="content">
                    <p>{{ item.adress }}</p>
                    <div class="phone">
                        <p>{{ item.phone }}</p>
                        <p>{{ item.fax }}</p>
                    </div>
                    <p>{{ item.email }}</p>
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
    color: $c-smalltitle;
}

.phone {
    margin: 1rem 0;


}
</style>