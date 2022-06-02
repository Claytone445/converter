<template>
  <v-app>
    <v-main>
      <v-container fluid d-flex justify-center align-center >
        <router-link to="/">{{ $t('main.convert') }}</router-link> |
        <router-link to="/CurrentCourses">{{$t ('main.currentCourses')}}</router-link>
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
