<template>
  <div class="home">
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
