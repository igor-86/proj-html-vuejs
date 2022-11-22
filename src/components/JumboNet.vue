<script>
import { store } from '../store';
export default {
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
    <div class="jumbo-net">
        <div class="container-net">
            <div class="single-info" v-for="(net, index) in store.arrayNet" :key="index">
                <i class="fa-regular" :class="net.icon"></i>
                <div class="text">
                    <h3>{{ net.number }}</h3>
                    <p>{{ net.category }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.jumbo-net {
    width: 100%;
    background-image: url(../assets/img/network.jpg);
    background-size: cover;
    background-position: 50% 10%;
    height: 60vh;

    .container-net {
        max-width: 1100px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .single-info {
            display: flex;
            align-items: center;

            i {
                font-size: 4rem;
                color: white;
            }

            .text {
                margin-left: 2rem;

                h3 {
                    font-size: 2.4rem;
                    color: $first-color;
                }

                p {
                    color: white;
                    font-size: 1.4rem;
                }
            }
        }
    }

}
</style>