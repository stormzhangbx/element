<template>
  <div>
    <el-row>
      <el-tag closable size="medium" @close="close" v-if="show">标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
    </el-row>
    <el-row>
      <el-tag
        v-for="(tag, index) in dynamicTags"
        :key="tag"
        closable
        @close="handleClose(index)"
      >
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        size="small"
        ref="saveTagInput"
        @blur="handleInputConfirm"
        @keyup.enter.native="handleInputConfirm"
      />
      <el-button class="button-new-tag" v-else size="small" @click="showInput">+ New Tag</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  data () {
    return {
      show: true,
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    close () {
      this.show = false
    },
    handleClose (index) {
      this.dynamicTags.splice(index, 1)
    },
    handleInputConfirm () {
      this.inputVisible = false
      if (this.inputValue) {
        this.dynamicTags.push(this.inputValue)
      }
      this.inputValue = ''
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.focus()
      })
    }
  }
}
</script>

<style scoped lang="less">
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
  }
</style>
