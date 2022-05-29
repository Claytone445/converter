<template>
  <div class="switcher">
<ul>
  <p>{{ $t('main.switcher') }} </p>
  <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
    {{locale}}
  </li>
</ul>
  </div>
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
.switcher ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
li {
  padding: 3px;
  list-style-type: none;
  text-decoration: underline;
  color: black;
  cursor: pointer;
}
li:hover {
  color: #42b983;
}
</style>