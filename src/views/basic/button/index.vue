<template>
  <div>
    <el-row>
      <el-button :disabled="isDisabled" @click="handler">默认按钮</el-button>
      <el-button type="primary" disabled @click="handler">主要</el-button>
      <el-button type="success" size="medium">成功</el-button>
      <el-button type="info" size="small">信息</el-button>
      <el-button type="warning" size="mini">警告</el-button>
      <el-button type="danger">危险</el-button>
    </el-row>
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button plain type="primary">主要</el-button>
      <el-button plain type="success">成功</el-button>
      <el-button plain type="info">信息</el-button>
      <el-button plain type="warning">警告</el-button>
      <el-button plain type="danger">危险</el-button>
    </el-row>
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button round type="primary">主要</el-button>
      <el-button round type="success">成功</el-button>
      <el-button round type="info">信息</el-button>
      <el-button round type="warning">警告</el-button>
      <el-button round type="danger">危险</el-button>
    </el-row>
    <el-row>
      <el-button circle icon="el-icon-edit"></el-button>
      <el-button circle type="primary" icon="el-icon-edit"></el-button>
      <el-button circle type="success" icon="el-icon-edit"></el-button>
      <el-button circle type="info" icon="el-icon-edit"></el-button>
      <el-button circle type="warning" icon="el-icon-edit"></el-button>
      <el-button circle type="danger" icon="el-icon-edit"></el-button>
    </el-row>
    <el-row>
      <el-button type="text">文字按钮</el-button>
    </el-row>
    <el-row>
      <el-button type="primary" icon="el-icon-edit">修改</el-button>
    </el-row>
    <el-row>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
    </el-row>
    <el-row>
      <el-button :loading="loading">加载中</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      isDisabled: false,
      loading: false
    }
  },
  methods: {
    handler () {
      console.log('点击了我')
    }
  }
}
</script>

<style scoped lang="less">
  .el-row {
    margin-bottom: 20px;
    &:last-child{
      margin-bottom: 0;
    }
  }
</style>
