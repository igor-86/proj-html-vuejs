<script>
import { store } from '../store';
import FooterAbout from './FooterAbout.vue';
import FooterSocial from './FooterSocial.vue';
import FooterContact from './FooterContact.vue';
import FooterPages from './FooterPages.vue';
import FooterBlog from './FooterBlog.vue';
export default {
    name: "CardFooter",
    data() {
        return {
            store
        }
    },
    components: {
        FooterAbout,
        FooterSocial,
        FooterContact,
        FooterPages,
        FooterBlog

    }
}
</script>

<template>
    <div class="cards-footer" v-for="(inner, index) in store.arrayFooter" :key="index">
        <FooterAbout :item="inner" />
        <FooterSocial :socials="inner" />
    </div>
    <div class="cards-footer" v-for="(contact, index) in store.arrayFooter" :key="index">
        <FooterContact :contacts="contact" />
    </div>
    <div class="cards-footer" v-for="(inner, index) in store.arrayFooter" :key="index">
        <FooterPages :page="inner" />
    </div>
    <div class="cards-footer" v-for="(blog, index) in store.arrayFooter" :key="index">
        <FooterBlog :prev="blog" />
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.cards-footer {
    width: calc(100% / 4 - 2rem);
    height: 220px;
    padding: 3rem 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;





    h3 {
        color: white;

    }


}
</style>