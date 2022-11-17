<script>
export default {
  name: "AppVue",
  data() {
    return {

    }
  }
}
</script>

<template>
  <h3>Start your</h3>
</template>

<style lang="scss">
//Import SASS
@use "./styles/general.scss" as*;
@use "./styles/partials/variables" as*;

/* Debu Variables Sass */
h3 {
  font-size: $title-big;
  color: $c-bigtitle;
}
</style>
