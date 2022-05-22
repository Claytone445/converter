<template>
  <div class="about">
    <h1>This is current courses page</h1>
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
