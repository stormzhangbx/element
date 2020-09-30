<template>
  <div class="top">
    <el-backtop target=".el-main .el-scrollbar__wrap"></el-backtop>
    <el-backtop :bottom="40"></el-backtop>
    <div>hello</div>
    <div class="long">world</div>
    <div>hhh</div>
  </div>
</template>

<script>
export default {
  name: 'Backtop'
}
</script>

<style scoped>
  .long {
    height: 1400px;
  }
</style>
