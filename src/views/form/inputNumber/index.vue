<template>
  <div>
    <el-input-number
      v-model="num"
      :min="1"
      :max="10"
      label="描述文字"
      @change="handleChange"
      :controls="false"
    ></el-input-number>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  data () {
    return {
      num: 1
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>

</style>
