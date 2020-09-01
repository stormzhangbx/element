<template>
  <div>
    <el-row>
      <div>点击上传</div>
      <ClickUpload/>
    </el-row>
    <el-row>
      <div>用户图像上传</div>
      <AvatarUpload/>
    </el-row>
    <el-row>
      <div>照片墙</div>
      <ImageWall/>
    </el-row>
    <el-row>
      <div>文件缩略图</div>
      <Thumbnail/>
    </el-row>
    <el-row>
      <div>图片列表缩略图</div>
      <FileList/>
    </el-row>
    <el-row>
      <div>上传文件列表控制</div>
      <FileListControl/>
    </el-row>
    <el-row>
      <div>拖拽上传</div>
      <Drag/>
    </el-row>
    <el-row>
      <div>手动上传</div>
      <ManualUpload/>
    </el-row>
  </div>
</template>

<script>
import ClickUpload from '@/views/form/upload/ClickUpload'
import AvatarUpload from '@/views/form/upload/AvatarUpload'
import ImageWall from '@/views/form/upload/ImageWall'
import Thumbnail from '@/views/form/upload/Thumbnail'
import FileList from '@/views/form/upload/FileList'
import FileListControl from '@/views/form/upload/FileListControl'
import Drag from '@/views/form/upload/Drag'
import ManualUpload from '@/views/form/upload/ManualUpload'

export default {
  name: 'Upload',
  components: {
    ClickUpload,
    AvatarUpload,
    ImageWall,
    Thumbnail,
    FileList,
    FileListControl,
    Drag,
    ManualUpload
  }
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;

  & > div:first-child {
    margin-bottom: 16px;

    &::before {
      margin-right: 12px;
      content: "";
      width: 5px;
      height: 22px;
      display: inline-block;
      background: #409EFF;
      vertical-align: middle;
    }
  }
}
</style>
