<script>
//import
import { store } from "./store";
import AppMenuNav from './components/AppMenuNav.vue';
import AppFooter from './components/AppFooter.vue';
import AppToHome from "./components/AppToHome.vue";

export default {
  name: "AppVue",
  data() {
    return {
      store,

    }
  },
  components: {
    AppMenuNav,
    AppToHome,
    AppFooter
  },

}
</script>

<template>
  <header>
    <AppMenuNav />
    <AppToHome />
  </header>


  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss">
//Import SASS
@use "./styles/general.scss" as*;
@use "./styles/partials/variables" as*;
</style>
