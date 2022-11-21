<script>
import { store } from '../store';
export default {
    name: "FooterSocial",
    props: {
        socials: Object
    },
    data() {
        return {
            store
        }
    },
    components: {

    }
}
</script>

<template>
    <div class="social-footer">
        <ul class="d-flex">
            <li v-for="(social, index) in socials.footerSocial" :key="index">
                <i class="fa-brands" :class="social.socials"></i>
            </li>
        </ul>
    </div>


</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.social-footer {
    margin-top: 2rem;

    li {
        margin-left: 1rem;



        &:nth-child(1) {
            margin-left: 0;
        }

        i {
            color: $c-smalltitle;
            font-size: 1.6rem;
        }
    }
}
</style>