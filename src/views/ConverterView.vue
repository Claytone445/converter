<template>
  <div class="home d-flex justify-center">
    <MainConverter msg="Конвертер валют"/>
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
