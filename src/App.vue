<script>
//import
import { store } from "./store";
import AppMenuNav from './components/AppMenuNav.vue';
import AppFooter from './components/AppFooter.vue';
import AppToHome from "./components/AppToHome.vue";
import JumboFounder from "./components/JumboFounder.vue";

import JumboBook from "./components/JumboBook.vue";
import BecauseCourse from "./components/BecauseCourse.vue";
import JumboNet from "./components/JumboNet.vue";
import StudentSay from "./components/StudentSay.vue";
import CursesNew from "./components/CursesNew.vue";
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
    AppFooter,
    JumboFounder,
    JumboBook,
    BecauseCourse,
    JumboNet,
    StudentSay,
    CursesNew,
  },

}
</script>

<template>
  <header>
    <AppMenuNav />
    <AppToHome />
  </header>
  <main>
    <JumboFounder />
    <section>
      <CursesNew />
    </section>
    <JumboBook />
    <section>
      <BecauseCourse />
    </section>
    <JumboNet />
    <section>
      <StudentSay />
    </section>

  </main>

  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss">
//Import SASS
@use "./styles/general.scss" as*;
@use "./styles/partials/variables" as*;
</style>
