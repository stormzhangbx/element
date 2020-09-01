<template>
<!--  <el-upload-->
<!--    class="upload-demo"-->
<!--    action="/upload"-->
<!--    :on-preview="handlePreview"-->
<!--    :on-remove="handleRemove"-->
<!--    :file-list="fileList"-->
<!--    list-type="picture">-->
<!--    <el-button size="small" type="primary">点击上传</el-button>-->
<!--    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
<!--  </el-upload>-->
  <el-upload
    action="/upload"
    list-type="picture"
    multiple
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  name: 'FileList',
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
    }
  }
}
</script>

<style scoped lang="less">

</style>
