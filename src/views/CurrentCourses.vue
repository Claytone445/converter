<template>
  <div class="about d-flex justify-center ">
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
