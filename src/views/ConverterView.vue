<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MainConverter msg="I'm component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainConverter from '@/components/MainConverter.vue'

export default {
  name: 'ConverterView',
  components: {
    MainConverter
  }
}
</script>
