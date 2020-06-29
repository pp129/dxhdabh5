<template>
<div>
  <mt-search autofocus v-model="value" :result.sync="result"></mt-search>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    result () {

    }
  }
}
</script>

<style scoped>

</style>
