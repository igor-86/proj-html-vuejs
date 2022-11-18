<script>
import { store } from "../store";
export default {
    name: "AppMenuNav",
    data() {
        return {
            store
        }
    },
    methods: {

    },
}
</script>

<template>
    <div class="container">
        <div class="menu-nav">
            <div class="logo">
                <img src="../assets/img/MasterStudy-1.svg" alt="Logo">
            </div>
            <nav class="nav">
                <ul class="d-flex">
                    <li v-for="(link, index) in store.arrayMenu" :key="index" :class="{ 'active': link.active }">
                        <a href="">{{ link.name }}</a>
                    </li>
                </ul>
            </nav>
            <div class="social-nav">
                <ul class="d-flex">
                    <li v-for="(social, index) in store.arraySocial" :key="index">
                        <a href="">
                            <i class="fa-brands" :class="social.link"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.menu-nav {
    width: 100%;
    height: 100px;
    background-color: $second-color;
    display: flex;
    align-items: center;
    padding: 1rem 0;

    .nav {
        margin-left: auto;

        ul {
            li {
                margin: 0 1.5em;
                position: relative;

                &.active::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background-color: $first-color;
                    bottom: -1rem;
                    left: 0%;
                }

                &.active::before {
                    content: '';
                    position: absolute;
                    bottom: -1rem;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0 6px 6px 6px;
                    border-color: transparent transparent $first-color transparent;
                    transform: translateX(-50%);
                }

                &:nth-child(3) a {
                    position: relative;

                    &::after {
                        content: 'New';
                        position: absolute;
                        background-color: red;
                        top: -1.5rem;
                        right: -1rem;
                        border-radius: 4px;
                        text-transform: uppercase;
                        padding: .2rem .3rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: .9rem;
                        color: white;
                        font-weight: 500;
                    }




                }

                a {
                    font-size: $text-card;
                    font-weight: 700;
                    color: $c-smalltitle;
                }
            }
        }
    }

    .social-nav {

        margin-left: 4em;

        li {
            margin: 0 1rem;

            i {
                font-size: 1.6rem;
                color: $c-bigtitle;
            }
        }

    }

}
</style>