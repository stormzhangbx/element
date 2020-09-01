<template>
  <div>
    <el-row>
      <p>复选框可以不使用label（这点与单选框radio不同），用于绑定布尔值，勾选状态对于true，不勾选状态对应false</p>
      <el-checkbox v-model="isOk" border>是吗</el-checkbox>
    </el-row>
    <el-row>
      <el-checkbox-group v-model="checkList" :max="2">
        <el-checkbox label="1">深圳</el-checkbox>
        <el-checkbox label="2">广州</el-checkbox>
        <el-checkbox label="3">东莞</el-checkbox>
        <el-checkbox label="4">佛山</el-checkbox>
      </el-checkbox-group>
    </el-row>
    <el-row>
      <div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAll">全选</el-checkbox>
      </div>
      <el-checkbox-group v-model="cities" @change="handleCheckedCities">
        <el-checkbox v-for="city in cityOptions" :key="city" :label="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </el-row>
    <el-row>
      <el-checkbox-group v-model="checkedCities">
        <el-checkbox-button v-for="city in cityOptions" :key="city" :label="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </el-row>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  name: 'Checkbox',
  data () {
    return {
      isOk: true,
      checkList: ['2'],
      cities: ['北京', '上海'],
      cityOptions: cityOptions,
      isIndeterminate: true,
      checkAll: false,
      checkedCities: []
    }
  },
  methods: {
    handleCheckAll (val) {
      this.isIndeterminate = false
      this.cities = val ? cityOptions : []
    },
    handleCheckedCities (value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === cityOptions.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < cityOptions.length
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
