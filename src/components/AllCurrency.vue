
<template>
  <div class="currency">
    <h2 class="d-flex justify-center">Выберите базовую валюту для конвертации</h2>
    <select multiple="multiple" v-model="selected" class="">
      <option v-for="value in rub" v-bind:key="value.Name" v-bind:value="{ name: value.Name, number: value.Value }">
        {{ value.Name}}
      </option>
    </select>
    <ul id="v-for-object" class="list">
      <li v-for="value in rub" v-bind:key="value.Name" >
        {{ value.Name}}: {{ value.Value.toFixed(2)}} рублей или
        <span v-if="selected.length > 0"> {{  (value.Value / selected[0].number).toFixed(2) }} {{selected[0].name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllCurrency',
  data() {
    return {
      rub: "",
      selected: [],
    }
  },
  created() {
    this.axios
        .get(`https://www.cbr-xml-daily.ru/daily_json.js`)
        .then(response => (this.rub = response.data.Valute));
  },
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
