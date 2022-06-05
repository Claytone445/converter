<template>
  <v-container class="d-flex ma-4">
<ul class="d-flex ">
  <p class="">{{ $t('main.switcher') }} </p> <li
    v-for="locale in locales"
    :key="locale"
    @click="switchLocale(locale)"
    class="pl-2">
    <v-btn x-small>{{locale}}</v-btn>
  </li>
</ul>
  </v-container>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
    }
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
  text-decoration: none;
  color: black;
  cursor: pointer;
}
li:hover {
  color: #42b983;
}
</style>