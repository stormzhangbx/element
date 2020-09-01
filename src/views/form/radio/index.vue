<template>
  <div>
    <el-row>
      <el-radio v-model="sex" label="1">男</el-radio>
      <el-radio v-model="sex" label="2" border>女</el-radio>
      <el-radio v-model="sex" label="3" disabled>中性</el-radio>
    </el-row>
    <el-row>
      <el-radio-group v-model="city" @change="handler1">
        <el-radio label="1">深圳</el-radio>
        <el-radio label="2">广州</el-radio>
        <el-radio label="3">东莞</el-radio>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-radio-group v-model="place" size="small" text-color="#ff0000" fill="#00ff00" disabled>
        <el-radio-button label="深圳"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="东莞"></el-radio-button>
      </el-radio-group>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data () {
    return {
      sex: '1',
      city: '1',
      place: '广州'
    }
  },
  methods: {
    handler1 (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
