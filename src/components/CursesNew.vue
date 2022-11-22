<script>
import { store } from '../store';
export default {
    name: "CursesNew",
    data() {
        return {
            store
        }
    },
    methods: {
        getImage(url) {
            return new URL(url, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="new-courses">
        <div class="container">
            <h2>New Courses</h2>
            <div class="wrapper">
                <div class="card-course" v-for="(card, index) in store.courseTop" :key="index">
                    <div class="img-curses">
                        <img :src="getImage(`../assets/img/${card.image}`)" alt="foto">
                        <div class="prize">
                            <h3>$59</h3>
                        </div>
                    </div>
                    <div class="text-curse">
                        <h3>{{ card.title }}</h3>
                        <p>{{ card.sub }}</p>
                    </div>
                    <div class="info-curse">
                        <div class="single">
                            <i class="fa-solid fa-signal"></i>
                            <p>Intermedie</p>
                        </div>
                        <div class="single">
                            <i class="fa-solid fa-list-ul"></i>
                            <p>{{ card.lect }}lectures</p>
                        </div>
                        <div class="single">
                            <i class="fa-regular fa-clock"></i>
                            <p>6 hours</p>
                        </div>
                    </div>
                </div>
                <button class="btn-curse">Load more</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.new-courses {
    width: 100%;
    background-color: $third-color;
    padding: 4rem 0;
    position: relative;



    .img-curses {
        position: relative;
        width: 100%;


        .prize {
            position: absolute;
            width: 100%;
            background-color: #00000093;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            visibility: hidden;


            h3 {
                color: white;
                font-weight: 700;
                font-size: $title-small;
            }
        }

    }

    h2 {
        color: $c-bigtitle;
        text-align: center;
        font-size: $title-med;
        font-weight: 800;
        margin-bottom: 3rem;
    }

    .card-course {
        width: calc(100% / 3 - 2rem);
        border: 1px solid #cccccc;
        background-color: white;
        position: relative;
        cursor: pointer;

        &:nth-child(-n+3) {
            &::after {
                content: 'Special';
                position: absolute;
                text-transform: uppercase;
                padding: .6rem .5rem;
                background-color: $first-color;
                color: white;
                font-weight: 700;
                right: 10px;
                top: 10px;
                border-radius: 4px;
                z-index: 100;
            }
        }

        &:hover .prize {
            visibility: visible;


        }


        .text-curse {
            text-align: center;
            padding: 2rem 0;
            width: 80%;
            margin: 0 auto;

            h3 {
                font-weight: 800;
                font-size: 1.6rem;
                color: $c-bigtitle;
                margin: 2rem 0;
            }

            p {
                font-size: 1.2rem;
                color: $c-light;
                margin-bottom: 2rem;
            }
        }

        .info-curse {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80%;
            margin: 0 auto;
            border-top: 1px solid #bdbdbd;
            padding: 3rem 0;

            .single {
                display: flex;
                align-items: center;

                i {
                    color: $first-color;
                    margin-right: 1rem;
                }

            }
        }
    }

    .btn-curse {
        background-color: $first-color;
        border: none;
        color: white;
        text-transform: uppercase;
        padding: 1rem 1.5rem;
        border-radius: 50rem;
        font-weight: 700;
        margin: 0 auto;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
        }
    }
}
</style>