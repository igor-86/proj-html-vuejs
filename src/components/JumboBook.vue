<script>
import MenuCart from './MenuCart.vue';
export default {
    name: "JumboBook",
    data() {

    },
    components: {
        MenuCart
    },
}
</script>

<template>
    <div class="jumbo-book">
        <div class="container-jumbo">
            <div class="text-propose">
                <h3>Get my Exclusive Investing Book just fot $19.50</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod, repellat, accusantium harum
                    cumque
                    temporibus nemo pariatur quaerat, mollitia dolor dolorum.</p>
                <img src="../assets/img/amazon.png" alt="">
            </div>
            <div class="img-hand">
                <img src="../assets/img/book.png" alt="book">
            </div>
        </div>
        <MenuCart />
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.jumbo-book {
    width: 100%;
    height: 400px;
    background-image: url(../assets/img/book.jpg);
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;

    .container-jumbo {
        max-width: 1100px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

        .text-propose {
            width: 40%;
            text-align: center;

            h3 {
                color: $first-color;
                font-size: 2.4rem;

            }

            p {
                font-style: italic;
                color: white;
                font-size: 1.4rem;
                margin-top: 2rem;
            }

            img {
                margin-top: 2rem;
                width: 25%;
                cursor: pointer;
            }
        }

        .img-hand {
            width: 350px;
            align-self: flex-end;
            margin-bottom: -5px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>