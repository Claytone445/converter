<template>
  <v-app>
    <v-main>
      <v-container fluid >
        <v-app-bar elevation="5"
        color="yellow"
        class="d-flex justify-center"
        >
          <v-btn rounded class="me-2 text-capitalize menu">
        <router-link to="/">{{ $t('main.convert') }}</router-link>
          </v-btn>
          <v-btn rounded class="me-2 text-capitalize menu">
        <router-link to="/CurrentCourses">{{$t ('main.currentCourses')}}</router-link>
          </v-btn>
        </v-app-bar>
      </v-container>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped lang="scss">
.menu {
  a {
    color: black;
  }
}
</style>