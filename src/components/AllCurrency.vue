
<template>
  <div class="currency ">
    <h1></h1>
    <ul id="v-for-object" class="list">
      <li v-for="value in usd" v-bind:key="value">
        {{ value.Name}}: {{ value.Value}} - рублей.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllCurrency',
  data() {
    return {
      usd: "",
    }
  },
  created() {
    this.axios
        .get(`https://www.cbr-xml-daily.ru/daily_json.js`)
        .then(response => (this.usd = response.data.Valute));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.currency {
  max-width: 1920px;
  margin: 0px 50px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 10px;
}
a {
  color: #42b983;
}
</style>
