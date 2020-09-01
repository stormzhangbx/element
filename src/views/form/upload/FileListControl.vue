<template>
  <el-upload
    class="upload-demo"
    action="/upload"
    :on-change="handleChange"
    :file-list="fileList">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>
<script>
export default {
  name: 'FileListControl',
  data () {
    return {
      fileList: [{
        name: 'image1.png',
        url: 'http://localhost/file/image1.png'
      }, {
        name: 'image2.png',
        url: 'http://localhost/file/image2.png'
      }]
    }
  },
  methods: {
    handleChange (file, fileList) {
      this.fileList = fileList.slice(-3)
    }
  }
}
</script>

<style scoped lang="less">

</style>
