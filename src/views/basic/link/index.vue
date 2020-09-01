<template>
  <div>
    <el-row>
      <el-link href="https://www.baidu.com">默认链接</el-link>
      <el-link href="https://www.baidu.com" type="primary" disabled>主要</el-link>
      <el-link href="https://www.baidu.com" type="success" :underline="false">成功</el-link>
      <el-link href="https://www.baidu.com" type="info" :disabled="isDisabled">信息</el-link>
      <el-link href="https://www.baidu.com" type="warning">警告</el-link>
      <el-link href="https://www.baidu.com" type="danger">危险</el-link>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Link',
  data () {
    return {
      isDisabled: false
    }
  }
}
</script>

<style scoped>
  .el-link {
    margin: 0 20px;
  }
</style>
