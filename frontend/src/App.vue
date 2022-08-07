<template>
  <div id="app">
    <Header />
    <SideNav />
    <v-main>
      <Content />
    </v-main>
  </div>
</template>

<script>
import Header from "./templates/Header";
import Content from "./templates/Content";
import SideNav from "./components/SideNav";
export default {
  components: {
    Header,
    Content,
    SideNav,
  },
};
</script>

<style scoped lang="scss">
::v-deep .v-application--wrap {
  min-height: 1vh;
  min-width: 1vw;
}
</style>
