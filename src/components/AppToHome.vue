<script>
export default {
    name: "AppToHome",
    data() {

    },
    components: {

    },
}
</script>
<template>
    <div class="home-container">
        <div class="img-home">
            <img src="../assets/img/slide-1.jpg" alt="">
        </div>
        <div class="title-home">
            <h1>Start your Human <span>Revolution</span> today</h1>
            <p>A wonderful serenity as taken possession of my entire soul, like these sweet mornings of spring wich I
                enjoy with my whole heart</p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.home-container {
    width: 100%;
    height: 80vh;
    position: relative;

    .img-home {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .title-home {
        width: 400px;
        position: absolute;
        top: 180px;
        left: 50%;

        h1 {
            font-size: $title-big;
            color: $c-bigtitle;
            line-height: 4rem;
            margin-bottom: 2rem;

            span {
                color: $c-bigyellow;
            }
        }

        p {
            font-size: $text-card;
            font-weight: 400;
            line-height: 2rem;
        }
    }
}
</style>