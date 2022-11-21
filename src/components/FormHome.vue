<script>
export default {
    name: "FormHome",
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="form-home">
        <div class="login-home">
            <h3><span>Limited sales:</span>All Courses with 55% off</h3>
            <div class="form-input">
                <label for="mailsS">scrivi mails</label>
                <input type="email" id="mails" placeholder="Enter you Email">
                <button class="btn-form">Subscribe</button>
            </div>
        </div>
        <div class="count-home">
            <div class="single-count">
                <h3>26</h3>
                <p>Days</p>
            </div>
            <div class="single-count">
                <h3>01</h3>
                <p>Hours</p>
            </div>
            <div class="single-count">
                <h3>47</h3>
                <p>Minutes</p>
            </div>
            <div class="single-count">
                <h3>34</h3>
                <p>Seconds</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as*;
@use "../styles/partials/variables" as*;

.form-home {
    width: 75%;
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%);
    padding: 4rem 3rem;
    background-color: $first-color;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .login-home {
        width: 50%;
        margin-right: 2rem;

        h3 {
            font-size: $title-small;

            letter-spacing: .1rem;

            span {
                margin-right: .5rem;
                color: white;
            }
        }

        .form-input {
            margin-top: 2rem;
            position: relative;

            label {
                display: none;
            }

            input {
                outline: none;
                border: none;
                width: 100%;
                padding: 1.3rem;
                border-radius: 50rem;
            }

            .btn-form {
                padding: 1.3rem;
                border: none;
                border-radius: 50rem;
                text-transform: uppercase;
                color: white;
                background-color: $form-button;
                position: absolute;
                right: 0;
                cursor: pointer;
            }
        }
    }

    .count-home {
        width: 50%;
        display: flex;


        .single-count {
            width: calc(100% / 4);

            text-align: center;

            h3 {
                color: white;
                font-size: $title-big;
                font-weight: 800;
            }

            p {
                color: $c-bigtitle;
                font-weight: 700;
                font-size: $text-card;
            }
        }
    }

}
</style>