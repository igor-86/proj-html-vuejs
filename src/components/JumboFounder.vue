<script>
export default {
    name: "JumboFounder",
    data() {

    },
    components: {

    }
}
</script>

<template>
    <div class="jumbo-founder">
        <div class="container d-flex-jumbo justify-center">
            <div class="sx">
                <h3>Hey there, my name is John Doe. I'm the founder of the Brain Academy.</h3>
                <div class="img-sign">
                    <img src="../assets/img/sign.jpg" alt="Signature">
                </div>

            </div>
            <div class="dx">
                <p>A wonderful serenity has taken possession of my entite soul, like these sweet mornings of spring
                    which I
                    enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was
                    created
                    for the bliss of souls like mine. I am so happy, my dear friend, so absorted in the exquisite sense
                    of
                    mere tranquil existence, that I neglect my talents. When, while the lovely valley teems with vapour
                    around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees,
                    and
                    but a few stray gleams steal into the inner sanctuary</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.jumbo-founder {
    width: 100%;
    padding: 10rem 0;

    .dx {
        width: 45%;
        margin-left: 3rem;

        p {
            font-size: $text-card;
            font-weight: 300;
            line-height: 2.5rem;
        }
    }

    .sx {
        width: 25%;
        position: relative;

        h3 {
            font-weight: 700;
            font-size: $title-small;
            margin-bottom: 2rem;
        }

        .img-sign {
            width: 40%;
            position: absolute;
            right: 30px;


            img {
                width: 100%;

            }
        }
    }
}
</style>