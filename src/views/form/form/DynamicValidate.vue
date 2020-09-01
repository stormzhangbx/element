<template>
  <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="80px" :rules="rules">
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="dynamicValidateForm.email"></el-input>
    </el-form-item>
    <el-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="index"
      :label="`域名${index}`"
      :prop="`domains.${index}.value`"
      :rules="[
        { required: true, message: '域名不能为空', trigger: 'blur' }
      ]"
    >
      <el-input v-model="domain.value"></el-input>
      <el-button @click="removeDomain(index)" v-if="index!==0">删除</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      <el-button @click="clearForm('dynamicValidateForm')">clear</el-button>
      <el-button @click="addDomain">新增域名</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'DynamicValidate',
  data () {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: ''
          }
        ],
        email: 'qqqq'
      },
      rules: {
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    // 新增
    addDomain () {
      this.dynamicValidateForm.domains.push({
        value: ''
      })
    },
    // 删除
    removeDomain (index) {
      if (index !== 0) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    // 提交
    submitForm (ref) {
      this.$refs[ref].validate(valid => {
        if (valid) {
          alert('submit')
        } else {
          console.log('error')
          return false
        }
      })
    },
    // 重置
    resetForm (ref) {
      this.$refs[ref].resetFields()
    },
    clearForm (ref) {
      this.$refs[ref].clearValidate()
    }
  }
}
</script>

<style scoped lang="less">
  .el-input {
    width: 270px;
    margin-right: 10px;
  }
</style>
