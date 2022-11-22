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
    <div class="why-curses">
        <div class="container">
            <h2>Why my Courses?</h2>

            <div class="wrapper-why">
                <div class="card-why" v-for="(why, index) in store.arrayWhyCourse" :key="index">
                    <i class="fa-solid" :class="why.icon"></i>
                    <div class="text-why">
                        <h3>{{ why.title }}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam distinctio cumque
                            illum
                            consequatur. Voluptas inventore earum corporis cum sapiente, optio quia? Asperiores
                            aspernatur
                            odio incidunt nulla explicabo vero neque.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.why-curses {
    width: 100%;
    background-color: #f9f9f8;
    padding: 4rem 0;

    h2 {
        text-align: center;
        font-size: $title-med;
        margin-bottom: 3rem;
    }

    .wrapper-why {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 3rem 0;

        .card-why {
            width: calc(100% / 2 - 1.5rem);
            padding: 6rem 0;
            background-color: white;
            position: relative;
            display: flex;
            justify-content: center;
            box-shadow: 5px 8px 13px -4px rgba(0, 0, 0, 0.2);

            &:hover {
                box-shadow: none;
                cursor: pointer;
                background-color: $first-color;

                &>i {
                    color: white;
                }

                & .text-why>p {
                    color: black;
                }


            }

            &::after {
                content: '';
                width: 6px;
                height: 100%;
                position: absolute;
                background-color: $first-color;
                top: 0;
                left: 2px;
            }

            i {
                font-size: 5rem;
                color: $first-color;
            }

            .text-why {
                width: 70%;
                margin-left: 2rem;

                h3 {
                    font-size: 2.2rem;
                    margin-bottom: 1.5rem;
                }

                p {
                    font-size: 1.4rem;
                    color: $c-light;
                }
            }
        }
    }
}
</style>