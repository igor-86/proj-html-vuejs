<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            activeState: 1,
        }
    },
    methods: {
        getImage(url) {
            return new URL(url, import.meta.url).href;
        },
        showItem(indexActive) {
            this.activeState = indexActive;
        },
        showNext() {
            if (this.activeState < this.store.slider.length - 1) {
                this.activeState++;
            } else {
                this.activeState = 0;
            }
        },
        showPrev() {
            if (this.activeState > 0) {
                this.activeState--;
            } else {
                this.activeState = this.store.slider.length - 1;
            }
        }
    },
}
</script>

<template>
    <div class="students">
        <div class="container">
            <h2>Whats students say?</h2>
            <div class="thumbs-user">
                <div class="left-arrow" @click.prevent="showPrev">
                    &LeftArrow;
                </div>
                <div class="img-user" v-for="(student, index) in store.slider" :key="index"
                    :class="{ 'active': (index === activeState) }" @click="showItem(index)">
                    <img :src="getImage(`../assets/img/${student.image}`)" alt="image">
                </div>
                <div class="right-arrow" @click.prevent="showNext">
                    &RightArrow;
                </div>
            </div>
            <div class="message-user">
                <h3>{{ store.slider[activeState].title }}</h3>
                <div class="star">
                    <i class="fa-solid fa-star" v-for="inner in 5"></i>
                </div>
                <p>{{ store.slider[activeState].art }}</p>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.students {
    width: 100%;
    padding: 4rem 0;

    h2 {
        color: $c-bigtitle;
        text-align: center;
        font-size: $title-med;
        font-weight: 800;
        margin-bottom: 3rem;
    }

    .thumbs-user {
        width: 60%;
        display: flex;
        align-items: center;
        margin: 0 auto;
        justify-content: center;

        .img-user {
            margin: 0 2rem;
            width: 60px;
            border-radius: 50%;

            &.active {
                transform: scale(1.5);
            }

            img {
                width: 100%;
                border-radius: 50%;
            }
        }

        .left-arrow {
            margin-right: 4rem;
            font-size: 2.2rem;
            cursor: pointer;
        }

        .right-arrow {
            margin-left: 4rem;
            font-size: 2.2rem;
            cursor: pointer;
        }
    }

    .message-user {
        width: 50%;
        margin: 3rem auto;
        height: 200px;


        h3 {
            text-align: center;
            font-weight: 700;
            color: $c-bigtitle;
            font-size: $title-small;
            margin-bottom: .5rem;
        }

        .star {
            text-align: center;
            margin-bottom: 2rem;

            i {
                color: $first-color;
            }
        }

        p {
            text-align: center;
            font-size: $text-card;
            color: $c-smalltitle;
            font-weight: 300;
            line-height: 2.4rem;
        }
    }
}
</style>