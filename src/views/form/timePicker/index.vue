<template>
  <div>
    <el-row>
      <el-time-select
        v-model="value"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }"
        placeholder="选择时间"
        editable
      >
      </el-time-select>
    </el-row>
    <el-row>
      <el-time-select
        v-model="startTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
          maxTime: endTime
        }"
        placeholder="选择开始时间"
      >
      </el-time-select>
      -
      <el-time-select
        v-model="endTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
          minTime: startTime
        }"
        placeholder="选择结束时间"
      >
      </el-time-select>
    </el-row>
    <el-row>
      <el-time-picker
        v-model="value2"
        arrow-control
        :picker-options="{

        }"
        placeholder="选择时间"
      >
      </el-time-picker>
    </el-row>
    <el-row>
      <el-time-picker
        is-range
        v-model="rangeTime"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
      ></el-time-picker>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TimePicker',
  data () {
    return {
      value: '',
      value2: '',
      startTime: '',
      endTime: '',
      rangeTime: [new Date(), new Date()]
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
</style>
