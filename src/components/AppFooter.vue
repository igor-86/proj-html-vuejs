<script>
import { store } from '../store';
import FooterSocial from './FooterSocial.vue';
import CardFooter from './CardFooter.vue';
export default {
    name: "AppFooter",
    data() {
        return {
            store
        }
    },
    components: {

        FooterSocial,
        CardFooter
    }
}
</script>

<template>
    <div class="footer-cont">
        <div class="container">
            <div class="wrapper gap-2">
                <CardFooter />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.footer-cont {
    width: 100%;
    background-color: $first-color;


}
</style>