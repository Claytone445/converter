
<template>
  <div>
  <div class="converter">
    <h1>{{ $t('main.convert') }}</h1>
    <p>{{ $t('main.enterAmount') }}</p>
    <label for="rubQauntity"> {{ $t('main.usdToRub', {rub: 'rub'}) }} </label>
    <input name="rubQauntity" id="rubQauntity" type="text" v-model.number="rub">
    <label for="usdQauntity"> {{ $t('main.rub') }} </label>
    <input name="usdQauntity" id="usdbQauntity" type="text" v-model.number="convert">

  </div>
  <div class="switcher">
    <locale-switcher/>
  </div>
  </div>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
