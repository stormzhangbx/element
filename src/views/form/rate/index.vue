<template>
  <div>
    <el-row>
      <el-rate v-model="value" show-score disabled score-template="{value}"></el-rate>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Rate',
  data () {
    return {
      value: 3.7
    }
  }
}
</script>

<style scoped>

</style>
