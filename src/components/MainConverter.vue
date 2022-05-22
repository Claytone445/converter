
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <label for="rubQauntity">Рубли </label>
    <input name="rubQauntity" id="rubQauntity" type="text" v-model.number="rub">
    <label for="usdQauntity">Доллары </label>
    <input name="rubQauntity" id="usdbQauntity" type="text" v-model.number="convert">
    <h3>usd in rub {{usd}} </h3>

  </div>
</template>

<script>
export default {
  name: 'MainConverter',
  data() {
    return {
      usd: "",
      rub: "",
    }
  },
  props: {
    msg: String
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
