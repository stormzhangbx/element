<template>
  <div>
    <el-row>
      <Validate></Validate>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <CustomRules></CustomRules>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <DynamicValidate></DynamicValidate>
    </el-row>
  </div>
</template>

<script>
import Validate from '@/views/form/form/Validate'
import CustomRules from '@/views/form/form/CustomRules'
import DynamicValidate from '@/views/form/form/DynamicValidate'

export default {
  name: 'Form',
  components: {
    Validate,
    CustomRules,
    DynamicValidate
  }
}
</script>

<style scoped>

</style>
