<template>
  <div>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'DateTimePicker',
  data () {
    return {
      value1: ''
    }
  }
}
</script>

<style scoped>

</style>
