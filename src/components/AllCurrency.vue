
<template>
  <v-container class="d-flex justify-center">
    <div>
    <h2 class="justify-center ma-2">Выберите базовую валюту для конвертации</h2>
    <select multiple="multiple" v-model="selected" class="ma-2 justify-center select">
      <option v-for="value in rub" :key="value.Name" :value="{ name: value.Name, number: value.Value }">
        {{ value.Name}}
      </option>
    </select>

      <v-simple-table>
        <template >
          <thead>
          <tr>
            <th class="text-left">
              Название валюты
            </th>
            <th class="text-left">
              Стоимость
            </th>
            <th class="text-left">
              Сравнение
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="value in rub"
              v-bind:key="value.Name"

          >
            <td>{{ value.Name}}</td>
            <td>{{ value.Value.toFixed(2)}} ₽</td>
            <th class="text-left" v-if="selected.length > 0">
              или {{  (value.Value / selected[0].number).toFixed(2) }} {{selected[0].name}}
            </th>
            <th class="text-left" v-else>
            выберите валюту
          </th>
          </tr>
          </tbody>
        </template>
      </v-simple-table>

    </div>
  </v-container>
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
.select {
  width: 100%;
}
</style>
