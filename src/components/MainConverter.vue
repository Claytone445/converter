
<template>
  <v-container class="d-flex justify-center">
  <div class="converter">
    <h1>{{ $t('main.convert') }}</h1>
    <p>{{ $t('main.enterAmount') }}</p>
    <label for="rubQauntity"> {{ $t('main.usdToRub', {rub: 'rub'}) }} </label>
    <v-text-field name="rubQauntity" id="rubQauntity" type="number" v-model.number="rub"></v-text-field>
    <v-text-field name="usdQauntity" id="usdbQauntity" type="number" v-model.number="convert"></v-text-field>
    <locale-switcher/>
  </div>
  </v-container>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";
export default {
  name: 'MainConverter',
  components: {LocaleSwitcher},
  data() {
    return {
      usd: "",
      rub: "",
    }
  },
  computed: {
    convert() {
      return (this.rub * this.usd).toFixed(2)
    }
  },
  created() {
      this.axios
        .get(`https://www.cbr-xml-daily.ru/daily_json.js`)
        .then(response => (this.usd = response.data.Valute.USD.Value));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
