<template>
  <div class="about">
    <h1>Список текущих валют</h1>
    <AllCurrency/>
  </div>
</template>

<script>
// @ is an alias to /src
import AllCurrency from '@/components/AllCurrency.vue'

export default {
  name: 'CurrentCourses',
  components: {
    AllCurrency
  }
}
</script>
