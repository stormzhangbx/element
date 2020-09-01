<template>
<!--  <el-upload-->
<!--    class="upload-demo"-->
<!--    action="/upload"-->
<!--    :on-preview="handlePreview"-->
<!--    :on-remove="handleRemove"-->
<!--    :before-remove="beforeRemove"-->
<!--    multiple-->
<!--    :limit="3"-->
<!--    :on-exceed="handleExceed"-->
<!--    :file-list="fileList">-->
<!--    <el-button size="small" type="primary">点击上传</el-button>-->
<!--    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
<!--  </el-upload>-->
  <el-upload
    class="upload-demo"
    action="/upload"
    multiple
    :limit="3"
    :file-list="fileList"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  name: 'ClickUpload',
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
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style scoped lang="less">

</style>
