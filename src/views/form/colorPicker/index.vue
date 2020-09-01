<template>
  <div>
    <el-row>
      <el-color-picker
        v-model="color"
      ></el-color-picker>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  data () {
    return {
      color: '#409EFF'
    }
  }
}
</script>

<style scoped>

</style>
