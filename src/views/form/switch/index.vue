<template>
  <div>
    <el-row>
      <el-switch
        v-model="value"
      ></el-switch>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Switch',
  data () {
    return {
      value: false
    }
  }
}
</script>

<style scoped>

</style>
