<template>
  <div>
    <el-row>
      <el-progress
        :percentage="percentage"
        type="dashboard"
        stroke-linecap="square"
      >
      </el-progress>
      <el-button-group>
        <el-button icon="el-icon-minus" @click="decrease"></el-button>
        <el-button icon="el-icon-plus" @click="increase"></el-button>
      </el-button-group>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  data () {
    return {
      percentage: 10
    }
  },
  methods: {
    decrease () {
      this.percentage -= 10
      if (this.percentage <= 0) {
        this.percentage = 0
      }
    },
    increase () {
      this.percentage += 10
      if (this.percentage >= 100) {
        this.percentage = 100
      }
    }
  }
}
</script>

<style scoped>

</style>
