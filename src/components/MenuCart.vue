<script>
import { store } from '../store';
export default {
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
    <div class="menu-cart">
        <div class="single-menu" v-for="(cart, index) in store.arrayCart" :key="index">
            <i class="fa-solid" :class="cart.out"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.menu-cart {
    position: absolute;
    right: 0;
    top: 20px;
    width: 40px;
    background-color: white;
    z-index: 10;
    text-align: center;
    padding: 1rem 0;

    .single-menu {
        width: 100%;

        i {
            font-size: 1.6rem;
            margin: 1rem 0;
            color: $c-smalltitle;
            cursor: pointer;
        }
    }
}
</style>